import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TabLinks from './TabLinks';
import Card from './Card';
import dataLinks from '../data/data.json';
import { CornerRightDown } from 'lucide-react';

export default function ResourceSection() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleItems, setVisibleItems] = useState(8); // Show 2 rows initially (4 items per row)

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setSearchQuery('');
    setVisibleItems(8); // Reset visible items when changing category
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    setSelectedCategory('All');
    setVisibleItems(8); // Reset visible items when searching
  };

  const handleLoadMore = () => {
    setVisibleItems((prev) => prev + 8); // Load 8 more items (2 more rows)
  };

  // Filter and sort data
  const filteredData = dataLinks
    .filter((item) => {
      if (!searchQuery && selectedCategory === 'All') {
        return true;
      }

      const searchTerm = searchQuery.toLowerCase().trim();
      const matchesCategory =
        selectedCategory === 'All' || item.category === selectedCategory;
      const matchesSearch = !searchTerm
        ? true
        : item.tags.some((tag) => tag.toLowerCase().includes(searchTerm)) ||
          item.name.toLowerCase().includes(searchTerm) ||
          item.category.toLowerCase().includes(searchTerm) ||
          item.description?.toLowerCase().includes(searchTerm);

      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      if (a.newTag && !b.newTag) return -1;
      if (!a.newTag && b.newTag) return 1;
      return a.name.localeCompare(b.name);
    });

  const visibleData = filteredData.slice(0, visibleItems);
  const hasMore = filteredData.length > visibleData.length;

  return (
    <div
      className="container relative xl:max-w-screen-xl mx-auto pt-4 md:pt-12  px-4"
      id="resoucesSection"
    >
      <TabLinks
        onCategorySelect={handleCategorySelect}
        selectedCategory={selectedCategory}
        onSearch={handleSearch}
      />
      <motion.div
        layout
        className="flex flex-wrap gap-4 pt-20 -mt-16 overflow-hidden"
      >
        <AnimatePresence mode="popLayout">
          {visibleData.length > 0 ? (
            visibleData.map((item, index) => (
              <motion.div
                key={`${item.category}-${item.name}-${index}`}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="w-full xs:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)] xl:w-[calc(25%-12px)] 2xl:w-[calc(25%-13px)]"
              >
                <Card item={item} />
              </motion.div>
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="w-full text-center py-8 text-gray-500"
            >
              No results found for &quot;{searchQuery}&quot;
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {hasMore && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full flex justify-center mt-8 mb-12"
        >
          <button
            onClick={handleLoadMore}
            className="flex items-center bg-white p-1 rounded-2xl border border-gray-100 overflow-hidden cursor-pointer"
          >
            <span className="bg-[#1a1a1a] p-3 rounded-xl text-white flex items-center gap-2 text-xs">
              Load More
              <CornerRightDown
                className="animate-bounce text-white "
                size={15}
              />
            </span>
          </button>
        </motion.div>
      )}
    </div>
  );
}
