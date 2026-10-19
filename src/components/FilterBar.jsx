import { categories } from '../data/resources';
import { cn } from '../lib/cn';
import SearchBar from './SearchBar';

export default function FilterBar({
  selectedCategory,
  onCategorySelect,
  query,
  onQueryChange,
  resultCount,
  totalCount,
}) {
  const isFiltered = resultCount !== totalCount;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <SearchBar value={query} onChange={onQueryChange} />
        <p
          className="text-sm font-medium text-muted dark:text-muted-dark"
          aria-live="polite"
          aria-atomic="true"
        >
          {isFiltered
            ? `${resultCount} of ${totalCount} resources`
            : `${totalCount} resources`}
        </p>
      </div>

      <div
        className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 pb-1 md:mx-0 md:flex-wrap md:px-0"
        role="group"
        aria-label="Filter by category"
      >
        {categories.map((category) => {
          const active = category.name === selectedCategory;

          return (
            <button
              key={category.name}
              type="button"
              aria-pressed={active}
              onClick={() => onCategorySelect(category.name)}
              className={cn(
                'inline-flex shrink-0 items-center gap-2 rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors',
                active
                  ? 'border-black bg-black text-white dark:border-accent dark:bg-accent dark:text-black'
                  : 'border-line bg-surface/70 text-ink hover:border-black/40 dark:border-line-dark dark:bg-surface-dark/60 dark:text-zinc-200 dark:hover:border-white/40',
              )}
            >
              {category.name}
              <span
                className={cn(
                  'text-xs tabular-nums',
                  active ? 'opacity-70' : 'text-muted dark:text-muted-dark',
                )}
              >
                {category.count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
