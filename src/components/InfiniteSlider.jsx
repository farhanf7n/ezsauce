import { Children } from 'react';
import { cn } from '../lib/cn';

/**
 * CSS-driven marquee. The content is rendered twice so the `-50%` translate
 * loops seamlessly, and the whole thing runs off the main thread.
 */
export function InfiniteSlider({
  children,
  gap = 24,
  duration = 42,
  className,
}) {
  const items = Children.toArray(children);

  return (
    <div
      className={cn('slider', className)}
      style={{ '--gap': `${gap}px`, '--duration': `${duration}s` }}
      aria-hidden="true"
    >
      <div className="slider-track">
        {[0, 1].map((group) => (
          <div className="slider-group" key={group}>
            {items.map((child, index) => (
              <span className="contents" key={`${group}-${index}`}>
                {child}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
