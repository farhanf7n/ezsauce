import React from 'react';
import { Search } from 'lucide-react';
import * as Ariakit from '@ariakit/react';

export default function SearchBar({ onSearch }) {
  const handleChange = (value) => {
    const searchValue =
      typeof value === 'string' ? value : value?.target?.value || '';
    onSearch(searchValue);
  };

  return (
    <div className="relative w-full md:w-80">
      <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
        <Search strokeWidth={1.5} className="text-black dark:text-white" />
      </div>
      <Ariakit.ComboboxProvider>
        <Ariakit.Combobox
          onChange={handleChange}
          placeholder="Enter keyword to search..."
          className="w-full h-[48px] pl-10 pr-4 rounded-[8px] border border-1 border-medium-gray bg-glass-cosmic-latte text-black placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black dark:bg-black dark:text-white dark:border-slate-gray dark:focus:ring-white"
        />
      </Ariakit.ComboboxProvider>
    </div>
  );
}
