import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TabLinks from './TabLinks';
import Card from './Card';
import Skeleton from './Skeleton';
import dataLinks from '../data/data.json';

export default function ResourceSection() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
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
    <div className="container relative xl:max-w-screen-xl mx-auto pt-4 md:pt-12  px-4">
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
          {isLoading ? (
            [...Array(8)].map((_, index) => (
              <motion.div
                key={`skeleton-${index}`}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="w-full xs:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)] xl:w-[calc(25%-12px)] 2xl:w-[calc(20%-13px)]"
              >
                <Skeleton />
              </motion.div>
            ))
          ) : visibleData.length > 0 ? (
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
              No results found for "{searchQuery}"
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
            className="flex items-center gap-2 px-6 py-3  hover:bg-[#FFC70F] dark:bg-[#1F1F1F] text-black dark:text-white rounded-lg border font-medium border-medium-gray hover:border-dashed dark:hover:border-[#FFC70F] transition-all duration-300 cursor-pointer"
          >
            Load More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              className="text-black dark:text-white"
              fill="none"
            >
              <path
                d="M2 16C2 18.2109 2 19.3164 2.70187 20.0544C2.81413 20.1725 2.93785 20.2817 3.07164 20.3807C3.90809 21 5.16095 21 7.66667 21H8.33333C10.8391 21 12.0919 21 12.9284 20.3807C13.0621 20.2817 13.1859 20.1725 13.2981 20.0544C14 19.3164 14 18.2109 14 16C14 13.7891 14 12.6836 13.2981 11.9456C13.1859 11.8275 13.0621 11.7183 12.9284 11.6193C12.0919 11 10.8391 11 8.33333 11H7.66667C5.16095 11 3.90809 11 3.07164 11.6193C2.93785 11.7183 2.81413 11.8275 2.70187 11.9456C2 12.6836 2 13.7891 2 16Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10 8.00001C10 5.78908 10 4.68362 10.7019 3.94557C10.8141 3.82753 10.9379 3.71835 11.0716 3.6193C11.9081 3.00001 13.1609 3.00001 15.6667 3.00001H16.3333C18.8391 3.00001 20.0919 3.00001 20.9284 3.6193C21.0621 3.71835 21.1859 3.82753 21.2981 3.94557C22 4.68362 22 5.78908 22 8.00001C22 10.2109 22 11.3164 21.2981 12.0544C21.1859 12.1725 21.0621 12.2817 20.9284 12.3807C20.1696 12.9425 19.0683 12.9947 17 12.9995"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 15L14 15"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M10 7L22 7"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M2 9C2 5.68286 4.68286 3 8 3L7.14286 4.71429"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22 15C22 18.3171 19.3171 21 16 21L16.8571 19.2857"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </motion.div>
      )}
    </div>
  );
}
