import { useState } from 'react';
import { imageSrcSet } from '../data/resources';
import { cn } from '../lib/cn';
import Tag from './Tag';
import { ArrowUpRightIcon } from './icons';

export default function Card({ item, className }) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const srcSet = imageSrcSet(item.img);

  return (
    <article className={cn('h-full', className)}>
      <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex h-full flex-col rounded-lg border border-line bg-surface/90 p-4 transition-[border-color,box-shadow] duration-300 hover:border-accent hover:border-dashed hover:shadow-drop focus-visible:border-accent dark:border-line-dark dark:bg-surface-dark dark:hover:border-accent"
      >
        <div className="relative h-[135px] w-full overflow-hidden rounded-lg bg-light-gray dark:bg-zinc-800">
          {!loaded && !failed ? (
            <div className="absolute inset-0 animate-pulse bg-medium-gray/25 dark:bg-zinc-700" />
          ) : null}

          {failed ? (
            <div
              aria-hidden="true"
              className="flex h-full w-full items-center justify-center bg-gradient-to-br from-cosmic-latte to-light-gray text-2xl font-bold text-muted dark:from-zinc-800 dark:to-zinc-700 dark:text-muted-dark"
            >
              {item.name.slice(0, 1).toUpperCase()}
            </div>
          ) : (
            <img
              src={item.img}
              srcSet={srcSet}
              sizes="(min-width: 1280px) 288px, (min-width: 1024px) 30vw, (min-width: 480px) 45vw, 92vw"
              alt=""
              width="640"
              height="360"
              loading="lazy"
              decoding="async"
              onLoad={() => setLoaded(true)}
              onError={() => setFailed(true)}
              className={cn(
                'h-full w-full object-cover transition-[opacity,transform] duration-500 group-hover:scale-[1.03]',
                loaded ? 'opacity-100' : 'opacity-0',
              )}
            />
          )}

          {item.newTag ? (
            <span className="absolute -top-1 left-2 z-10 -rotate-6 rounded-full bg-slate-500 px-2 py-0.5 text-2xs font-bold uppercase tracking-wider text-white dark:bg-accent dark:text-black">
              New
            </span>
          ) : null}

          <div className="absolute inset-x-2 bottom-2 flex flex-wrap gap-1">
            {item.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        </div>

        <div className="flex flex-1 items-start justify-between gap-3 pt-3">
          <div className="min-w-0">
            <h3 className="truncate text-[17px] font-semibold leading-6 text-black dark:text-white">
              {item.name}
            </h3>
            <p className="truncate text-xs text-muted dark:text-muted-dark">
              {item.host}
            </p>
          </div>
          <ArrowUpRightIcon className="mt-0.5 h-5 w-5 shrink-0 text-black transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 dark:text-white" />
        </div>
      </a>
    </article>
  );
}
