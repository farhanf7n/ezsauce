import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Tag from './Tag';

export default function Card({ item }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  const cardRef = useRef(null);

  const formattedUrl = item.link.replace(/^@?https?:\/\/(www\.)?/, '');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '100px',
      },
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleCardClick = (link) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      ref={cardRef}
      className="group relative cursor-pointer transition-transform duration-300 ease-out will-change-transform hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC70F]"
      onClick={() => handleCardClick(item.link)}
    >
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
        <div className="bg-black dark:bg-[#FFC70F] text-white dark:text-black px-4 py-2 rounded-md text-sm whitespace-nowrap shadow-xl">
          {formattedUrl}
          <div className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-3 h-3 bg-black dark:bg-[#FFC70F] rotate-45"></div>
        </div>
      </div>

      <div className="relative rounded-[28px] bg-gradient-to-br from-[#FFE5AF] via-[#FFD66B] to-[#F2F0FF] dark:from-[#111010] dark:via-[#1F1F1F] dark:to-[#2D2A33] p-[2px] transition-colors duration-300">
        <div className="relative rounded-[24px] bg-white/80 dark:bg-black/70 backdrop-blur-xl p-6 flex flex-col gap-4 h-full">
          <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-slate-600 dark:text-slate-300">
            <span className="flex items-center gap-2">
              <span className="inline-flex w-2 h-2 rounded-full bg-[#FFC70F] shadow-[0_0_10px_#FFC70F]" />
              {item.category || item.tags[0] || 'Resource'}
            </span>
            {item.newTag && (
              <span className="px-3 py-1 rounded-full bg-black text-white dark:bg-white dark:text-black text-[11px] tracking-[0.15em] font-semibold">
                New
              </span>
            )}
          </div>

          <div className="relative h-[190px] rounded-2xl overflow-hidden">
            {(!imageLoaded || !shouldLoad) && (
              <div className="absolute inset-0 bg-gray-300 dark:bg-gray-700 animate-pulse" />
            )}
            {shouldLoad && (
              <img
                src={item.img}
                alt={item.name}
                className={`object-cover w-full h-full rounded-2xl transform transition-[opacity,transform] duration-500 ease-out will-change-transform ${
                  imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                } group-hover:scale-105`}
                onLoad={() => setImageLoaded(true)}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none" />
            <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-2">
              {item.tags.map((tag, index) => (
                <Tag className="text-[11px]" key={index}>
                  {tag}
                </Tag>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white leading-tight">
              {item.name}
            </h3>
            {item.description && (
              <p className="text-sm text-slate-600 dark:text-slate-300 line-clamp-2">
                {item.description}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  item: PropTypes.shape({
    link: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    newTag: PropTypes.bool,
  }).isRequired,
};
