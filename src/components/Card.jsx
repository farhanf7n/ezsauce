import React, { useState, useEffect, useRef } from 'react';
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
      className="group relative bg-glass-cosmic-latte/90 dark:bg-[#1F1F1F] border border-1 border-medium-gray rounded-[8px] cursor-pointer hover:border-dashed dark:hover:border-[#FFC70F] duration-300 animate-card"
      onClick={() => handleCardClick(item.link)}
    >
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
        <div className="bg-black dark:bg-[#FFC70F] text-white dark:text-black px-4 py-2 rounded-md text-sm whitespace-nowrap">
          {formattedUrl}
          <div className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-3 h-3 bg-black dark:bg-[#FFC70F] rotate-45"></div>
        </div>
      </div>
      <div className="p-[24px]">
        <div className="relative w-full h-[135px] bg-gray-100 dark:bg-gray-800 rounded-lg">
          {item.newTag && (
            <div className="absolute -top-[0.6125rem] left-0 -rotate-6 bg-slate-400 dark:bg-yellow-400 text-white dark:text-stone-950 rounded-full text-2xs font-bold uppercase tracking-wider px-2 py-0 z-10">
              New
            </div>
          )}
          {(!imageLoaded || !shouldLoad) && (
            <div className="absolute inset-0 bg-gray-300 dark:bg-gray-600 rounded-lg animate-pulse" />
          )}
          {shouldLoad && (
            <img
              src={item.img}
              alt={item.name}
              className={`object-cover w-full h-full transition-opacity duration-300 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={() => setImageLoaded(true)}
            />
          )}

          <div className="flex gap-[8px] absolute bottom-[0.3875rem] left-[0.3875rem]">
            {item.tags.map((tag, index) => (
              <Tag className="line-clamp-1" key={index}>
                {tag}
              </Tag>
            ))}
          </div>
        </div>

        <div className="pt-[8px] flex justify-between items-center">
          <span className="text-[20px] font-semibold leading-[30px] dark:text-white">
            {item.name}
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            className="text-black dark:text-white"
            fill="none"
          >
            <path
              d="M14.7731 9.22687L9 15M14.7731 9.22687C14.2678 8.72156 11.8846 9.21665 11.1649 9.22687M14.7731 9.22687C15.2784 9.73219 14.7834 12.1154 14.7731 12.8351"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
