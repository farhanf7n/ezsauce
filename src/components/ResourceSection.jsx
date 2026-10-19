import { useDeferredValue, useEffect, useMemo, useRef, useState } from 'react';
import { categories, resources, totalCount } from '../data/resources';
import { cn } from '../lib/cn';
import Card from './Card';
import FilterBar from './FilterBar';
import { ArrowDownIcon } from './icons';

const PAGE_SIZE = 8;

function readParams() {
  return new URLSearchParams(window.location.search);
}

function readCategory(params) {
  const value = params.get('category');
  return categories.some((category) => category.name === value) ? value : 'All';
}

export default function ResourceSection() {
  const [search, setSearch] = useState(() => readParams().get('q') ?? '');
  const [selectedCategory, setSelectedCategory] = useState(() =>
    readCategory(readParams()),
  );
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const deferredSearch = useDeferredValue(search);
  const sentinelRef = useRef(null);

  const filtered = useMemo(() => {
    const terms = deferredSearch
      .trim()
      .toLowerCase()
      .split(/\s+/)
      .filter(Boolean);

    return resources.filter(
      (item) =>
        (selectedCategory === 'All' || item.category === selectedCategory) &&
        terms.every((term) => item.search.includes(term)),
    );
  }, [deferredSearch, selectedCategory]);

  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [deferredSearch, selectedCategory]);

  // Keep filters shareable and restore them on load.
  useEffect(() => {
    const params = new URLSearchParams();
    const trimmed = search.trim();
    if (trimmed) params.set('q', trimmed);
    if (selectedCategory !== 'All') params.set('category', selectedCategory);

    const query = params.toString();
    window.history.replaceState(
      null,
      '',
      `${window.location.pathname}${query ? `?${query}` : ''}${window.location.hash}`,
    );
  }, [search, selectedCategory]);

  const hasMore = visibleCount < filtered.length;

  // Load the next page automatically when the sentinel approaches the
  // viewport, and keep filling while it remains in range.
  useEffect(() => {
    const node = sentinelRef.current;
    if (!node || !hasMore) return undefined;

    const frame = requestAnimationFrame(() => {
      const { top } = node.getBoundingClientRect();
      if (top > 0 && top <= window.innerHeight + 600) {
        setVisibleCount((count) => count + PAGE_SIZE);
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setVisibleCount((count) => count + PAGE_SIZE);
        }
      },
      { rootMargin: '600px 0px' },
    );

    observer.observe(node);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [hasMore, visibleCount, filtered.length]);

  const visibleItems = filtered.slice(0, visibleCount);
  const isStale = search !== deferredSearch;

  const clearFilters = () => {
    setSearch('');
    setSelectedCategory('All');
  };

  return (
    <section
      id="resources"
      aria-labelledby="resources-title"
      className="container relative mx-auto max-w-screen-xl scroll-mt-24 px-4 pt-10"
    >
      <h2 id="resources-title" className="sr-only">
        Resource collection
      </h2>

      <FilterBar
        selectedCategory={selectedCategory}
        onCategorySelect={setSelectedCategory}
        query={search}
        onQueryChange={setSearch}
        resultCount={filtered.length}
        totalCount={totalCount}
      />

      <div
        className={cn(
          'mt-8 grid grid-cols-1 gap-4 transition-opacity duration-200 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
          isStale && 'opacity-60',
        )}
        aria-busy={isStale}
      >
        {visibleItems.map((item) => (
          <Card key={item.id} item={item} className="card-in" />
        ))}

        {filtered.length === 0 ? (
          <div className="col-span-full flex flex-col items-center gap-3 py-16 text-center">
            <p className="text-lg font-semibold text-ink dark:text-white">
              No resources found
            </p>
            <p className="max-w-md text-sm text-muted dark:text-muted-dark">
              {search.trim()
                ? `Nothing matches “${search.trim()}”${
                    selectedCategory !== 'All' ? ` in ${selectedCategory}` : ''
                  }.`
                : 'Nothing matches this category yet.'}{' '}
              Try a different keyword or category.
            </p>
            <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
              {selectedCategory !== 'All' && search.trim() ? (
                <button
                  type="button"
                  onClick={() => setSelectedCategory('All')}
                  className="rounded-lg bg-black px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-black/80 dark:bg-accent dark:text-black dark:hover:bg-accent/85"
                >
                  Search all categories
                </button>
              ) : null}
              <button
                type="button"
                onClick={clearFilters}
                className="rounded-lg border border-line px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-black/40 dark:border-line-dark dark:text-white dark:hover:border-white/40"
              >
                Clear filters
              </button>
            </div>
          </div>
        ) : null}
      </div>

      {hasMore ? (
        <div
          ref={sentinelRef}
          className="mt-10 flex flex-col items-center gap-3 pb-4"
        >
          <button
            type="button"
            onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
            className="inline-flex items-center gap-2 rounded-lg border border-line bg-surface/70 px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-accent hover:bg-accent dark:border-line-dark dark:bg-surface-dark dark:text-white dark:hover:border-accent dark:hover:bg-accent dark:hover:text-black"
          >
            Load more
            <ArrowDownIcon className="h-4 w-4" />
          </button>
          <p className="text-xs text-muted dark:text-muted-dark">
            Showing {visibleItems.length} of {filtered.length}
          </p>
        </div>
      ) : null}

      {!hasMore && filtered.length > 0 ? (
        <p className="mt-10 pb-4 text-center text-xs text-muted dark:text-muted-dark">
          You have reached the end · {filtered.length} resources
        </p>
      ) : null}
    </section>
  );
}
