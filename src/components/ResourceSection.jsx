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

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setSearchQuery('');
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    setSelectedCategory('All');
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

  return (
    <div className="container relative xl:max-w-screen-2xl mx-auto pt-4 px-4">
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
          ) : filteredData.length > 0 ? (
            filteredData.map((item, index) => (
              <motion.div
                key={`${item.category}-${item.name}-${index}`}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="w-full xs:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)] xl:w-[calc(25%-12px)] 2xl:w-[calc(20%-13px)]"
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
    </div>
  );
}
