import React, { useMemo } from 'react';
import dataLinks from "../data/data.json";

export default function TabLinks({ onCategorySelect, selectedCategory }) {
  const categoryData = useMemo(() => {
    const categoryCount = dataLinks.reduce((acc, item) => {
      acc[item.category] = (acc[item.category] || 0) + 1;
      return acc;
    }, {});

    const totalCount = dataLinks.length;

    const categories = Object.entries(categoryCount).map(([category, count]) => ({
      category,
      count: count.toString().padStart(2, '0')
    }));

    return { categories, totalCount: totalCount.toString().padStart(2, '0') };
  }, []);

  const handleClick = (e, category) => {
    e.preventDefault(); // Prevent default action
    onCategorySelect(category);
  };

  return (
    <div className="flex items-center justify-center md:justify-start flex-wrap gap-[8px] px-5">
      <a
        href="#"
        onClick={(e) => handleClick(e, 'All')}
        className={`py-[12px] px-[18px] flex items-center gap-[8px] ${selectedCategory === 'All' ? 'bg-[#FFC70F] text-black' : 'bg-[#000000] text-white'} rounded-[8px] shadow-drop border border-1 border-white`}
      >
        All
        <span className="text-sm border border-1 py-[2px] px-[6px] rounded border-white">
          {categoryData.totalCount}
        </span>
      </a>
      {categoryData.categories.map((item, index) => (
        <a
          key={index}
          href="#"
          onClick={(e) => handleClick(e, item.category)}
          className={`py-[12px] px-[18px] flex items-center gap-[8px] ${selectedCategory === item.category ? 'bg-[#FFC70F] text-black' : 'bg-[#000000] text-white'} rounded-[8px] shadow-drop border border-1 border-white`}
        >
          {item.category}
          <span className="text-sm border border-1 py-[2px] px-[6px] rounded border-white">
            {item.count}
          </span>
        </a>
      ))}
    </div>
  );
}
