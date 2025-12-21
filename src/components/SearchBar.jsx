import { Search } from 'lucide-react';
import * as Ariakit from '@ariakit/react';
import PropTypes from 'prop-types';

export default function SearchBar({ onSearch }) {
  const handleChange = (value) => {
    const searchValue =
      typeof value === 'string' ? value : value?.target?.value || '';
    onSearch(searchValue);
  };

  return (
    <div className="relative w-full md:w-80">
      <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
        <Search size={16} className="text-black dark:text-black" />
      </div>
      <div className=" bg-white p-1 rounded-2xl border border-gray-100">
        <Ariakit.ComboboxProvider>
          <Ariakit.Combobox
            onChange={handleChange}
            placeholder="Enter keyword to search..."
            className="w-full py-2 pl-8 pr-4 rounded-xl border border-1 border-medium-gray bg-white text-xs text-black placeholder:text-black/80 focus:outline-none focus:ring-1 focus:ring-black dark:bg-[#f5f9fa] dark:text-black/80 dark:border-slate-gray dark:focus:ring-white"
          />
        </Ariakit.ComboboxProvider>
      </div>
    </div>
  );
}

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
