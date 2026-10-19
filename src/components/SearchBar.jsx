import { cn } from '../lib/cn';
import { SearchIcon, XIcon } from './icons';

export default function SearchBar({ value, onChange, className }) {
  return (
    <div className={cn('relative w-full md:w-80', className)} role="search">
      <SearchIcon className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted dark:text-muted-dark" />
      <input
        type="text"
        inputMode="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === 'Escape') onChange('');
        }}
        placeholder="Search resources…"
        aria-label="Search resources"
        className="h-12 w-full rounded-lg border border-line bg-surface/80 pl-10 pr-10 text-sm text-ink placeholder:text-muted/80 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/60 dark:border-line-dark dark:bg-surface-dark/80 dark:text-white dark:placeholder:text-muted-dark"
      />
      {value ? (
        <button
          type="button"
          onClick={() => onChange('')}
          aria-label="Clear search"
          className="absolute right-1.5 top-1/2 rounded-md p-1.5 text-muted transition-colors hover:bg-black/5 hover:text-ink dark:text-muted-dark dark:hover:bg-white/10 dark:hover:text-white"
        >
          <XIcon className="h-4 w-4" />
        </button>
      ) : null}
    </div>
  );
}
