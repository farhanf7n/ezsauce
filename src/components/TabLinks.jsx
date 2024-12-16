import React, { useMemo, useState } from 'react';
import dataLinks from '../data/data.json';
import { Menu, MenuItem } from './menu.jsx';
import SearchBar from './SearchBar';
import './menu.css';

export default function TabLinks({
  onCategorySelect,
  selectedCategory,
  onSearch,
}) {
  const [open, setOpen] = useState(false);

  const categoryData = useMemo(() => {
    const categoryCount = dataLinks.reduce((acc, item) => {
      acc[item.category] = (acc[item.category] || 0) + 1;
      return acc;
    }, {});

    const totalCount = dataLinks.length;

    const categories = Object.entries(categoryCount).map(
      ([category, count]) => ({
        category,
        count: count.toString().padStart(2, '0'),
      }),
    );

    return { categories, totalCount: totalCount.toString().padStart(2, '0') };
  }, []);

  const menu = {
    closed: {
      scale: 0,
      transition: {
        delay: 0.15,
      },
    },
    open: {
      scale: 1,
      transition: {
        type: 'spring',
        duration: 0.4,
        delayChildren: 0.2,
        staggerChildren: 0.05,
      },
    },
  };

  const item = {
    variants: {
      closed: { x: -16, opacity: 0 },
      open: { x: 0, opacity: 1 },
    },
    transition: { opacity: { duration: 0.2 } },
  };

  const handleMenuItemClick = (category) => {
    onCategorySelect(category);
    setOpen(false);
  };

  return (
    <div className="flex items-center justify-end sm:justify-between flex-wrap gap-2 px-5">
      <div className="flex items-center gap-2">
        <Menu
          label={selectedCategory || 'Select Category'}
          open={open}
          setOpen={setOpen}
          animate={open ? 'open' : 'closed'}
          initial="closed"
          exit="closed"
          variants={menu}
        >
          <MenuItem
            variants={item.variants}
            transition={item.transition}
            onClick={() => handleMenuItemClick('All')}
          >
            <span>All</span>
            <span className="ml-auto">{categoryData.totalCount}</span>
          </MenuItem>
          {categoryData.categories.map((categoryItem, index) => (
            <MenuItem
              key={categoryItem.category}
              variants={item.variants}
              transition={item.transition}
              onClick={() => handleMenuItemClick(categoryItem.category)}
            >
              <span>{categoryItem.category}</span>
              <span className="ml-auto">{categoryItem.count}</span>
            </MenuItem>
          ))}
        </Menu>
        <SearchBar onSearch={onSearch} />
      </div>
      <div className="flex items-center gap-2">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10 0.833252H7.29572C6.07055 0.833242 5.10013 0.833233 4.34065 0.935342C3.55904 1.04043 2.9264 1.26184 2.4275 1.76075C1.92859 2.25966 1.70718 2.89229 1.60209 3.6739C1.49998 4.43338 1.49999 5.4038 1.5 6.62897V10.6666C1.5 11.9147 2.4147 12.9493 3.61034 13.1364C3.70232 13.6457 3.87835 14.0805 4.23223 14.4344C4.63351 14.8356 5.13876 15.0082 5.73883 15.0889C6.31681 15.1666 7.05169 15.1666 7.96342 15.1666H10.0366C10.9483 15.1666 11.6832 15.1666 12.2612 15.0889C12.8612 15.0082 13.3665 14.8356 13.7678 14.4344C14.169 14.0331 14.3416 13.5278 14.4223 12.9278C14.5 12.3498 14.5 11.6149 14.5 10.7032V7.29667C14.5 6.38494 14.5 5.65006 14.4223 5.07209C14.3416 4.47201 14.169 3.96676 13.7678 3.56549C13.4139 3.2116 12.9791 3.03557 12.4698 2.9436C12.2827 1.74795 11.2482 0.833252 10 0.833252ZM11.4196 2.84736C11.2177 2.25741 10.6584 1.83325 10 1.83325H7.33333C6.06212 1.83325 5.15901 1.83431 4.4739 1.92643C3.80317 2.0166 3.41674 2.18571 3.1346 2.46785C2.85246 2.74999 2.68335 3.13643 2.59317 3.80715C2.50106 4.49226 2.5 5.39537 2.5 6.66659V10.6666C2.5 11.325 2.92416 11.8843 3.51411 12.0861C3.49999 11.6795 3.49999 11.2197 3.5 10.7032V7.29667C3.49999 6.38494 3.49998 5.65006 3.57768 5.07209C3.65836 4.47201 3.83096 3.96676 4.23223 3.56549C4.63351 3.16421 5.13876 2.99161 5.73883 2.91093C6.31681 2.83323 7.05169 2.83324 7.96342 2.83325H10.0366C10.5531 2.83324 11.0129 2.83324 11.4196 2.84736ZM4.93934 4.27259C5.12385 4.08808 5.3829 3.96779 5.87208 3.90202C6.37565 3.83431 7.04306 3.83325 8 3.83325H10C10.9569 3.83325 11.6244 3.83431 12.1279 3.90202C12.6171 3.96779 12.8762 4.08808 13.0607 4.27259C13.2452 4.4571 13.3655 4.71615 13.4312 5.20533C13.4989 5.7089 13.5 6.37631 13.5 7.33325V10.6666C13.5 11.6235 13.4989 12.2909 13.4312 12.7945C13.3655 13.2837 13.2452 13.5427 13.0607 13.7272C12.8762 13.9118 12.6171 14.0321 12.1279 14.0978C11.6244 14.1655 10.9569 14.1666 10 14.1666H8C7.04306 14.1666 6.37565 14.1655 5.87208 14.0978C5.3829 14.0321 5.12385 13.9118 4.93934 13.7272C4.75483 13.5427 4.63453 13.2837 4.56877 12.7945C4.50106 12.2909 4.5 11.6235 4.5 10.6666V7.33325C4.5 6.37631 4.50106 5.7089 4.56877 5.20533C4.63453 4.71615 4.75483 4.4571 4.93934 4.27259Z"
            className="fill-[#828282] dark:fill-white"
          />
        </svg>

        <div className="flex items-center gap-2 ">
          <span className="text-medium-gray text-sm font-medium dark:text-white">
            Total Resources:
          </span>
          <span className="font-medium dark:text-white">
            {categoryData.totalCount}
          </span>
        </div>
      </div>
    </div>
  );
}
