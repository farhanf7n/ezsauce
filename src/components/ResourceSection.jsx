import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TabLinks from './TabLinks';
import Card from './Card';
import Skeleton from './Skeleton';
import dataLinks from '../data/data.json';

export default function ResourceSection() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    const loadData = async () => {
      await Promise.all(
        dataLinks.map((item) => {
          return new Promise((resolve) => {
            const img = new Image();
            img.src = item.img;
            img.onload = resolve;
            img.onerror = resolve;
          });
        }),
      );
      setData(dataLinks);
      setIsLoading(false);
    };

    loadData();
  }, []);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setSearchQuery('');
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    setSelectedCategory('All');
  };

  const filteredData = dataLinks
    .filter((item) => {
      if (!searchQuery && selectedCategory === 'All') {
        return true;
      }

      const searchTerm = searchQuery.toString().toLowerCase().trim();

      const matchesCategory =
        selectedCategory === 'All' || item.category === selectedCategory;

      const matchesSearch = !searchTerm
        ? true
        : item.tags.some((tag) =>
            tag.toString().toLowerCase().includes(searchTerm),
          ) ||
          item.name.toString().toLowerCase().includes(searchTerm) ||
          item.category.toString().toLowerCase().includes(searchTerm) ||
          item.description?.toString().toLowerCase().includes(searchTerm);

      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      if (a.newTag && !b.newTag) return -1;
      if (!a.newTag && b.newTag) return 1;

      return a.name.localeCompare(b.name);
    });

  return (
    <div className="w-full px-5 pt-4 mx-auto max-w-[1160px]">
      <TabLinks
        onCategorySelect={handleCategorySelect}
        selectedCategory={selectedCategory}
        onSearch={handleSearch}
      />
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pt-4"
      >
        <AnimatePresence mode="popLayout">
          {isLoading ? (
            // Show skeletons while loading
            [...Array(8)].map((_, index) => (
              <motion.div
                key={`skeleton-${index}`}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
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
              >
                <Card item={item} />
              </motion.div>
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="col-span-full text-center py-8 text-gray-500"
            >
              No results found for "{searchQuery}"
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
