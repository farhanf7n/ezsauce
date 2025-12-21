import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Tag from './Tag';
import { motion } from 'framer-motion';
import { Layers, SquareArrowOutUpRight } from 'lucide-react';

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
    <>
      <motion.div
        ref={cardRef}
        className=" relative bg-white p-1 rounded-2xl border border-gray-100 overflow-hidden cursor-pointer "
        onClick={() => handleCardClick(item.link)}
      >
        <div className="bg-[#1a1a1a] p-3 rounded-xl text-white text-left">
          <div className="relative rounded-2xl overflow-hidden border border-white/20">
            {(!imageLoaded || !shouldLoad) && (
              <div className="absolute inset-0 bg-gray-300 dark:bg-gray-700 animate-pulse" />
            )}
            {shouldLoad && (
              <img
                src={item.img}
                alt={item.name}
                className={`object-cover w-full h-[190px] rounded-2xl transform transition-[opacity,transform] duration-500 ease-out will-change-transform ${
                  imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                } group-hover:scale-105`}
                onLoad={() => setImageLoaded(true)}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none" />
          </div>

          <h3 className="text-2xl font-medium text-white dark:text-white leading-tight mt-3">
            {item.name}
          </h3>
          <div className="flex gap-1 mt-1">
            {item.tags.map((tag, index) => (
              <Tag className="text-[11px]" key={index}>
                {tag}
              </Tag>
            ))}
          </div>
        </div>
        {/* Updated Footer Section */}
        <div className="flex items-start md:items-center gap-2 justify-between w-full">
          <div className="p-2 flex items-center gap-2 text-[10px] font-bold text-gray-600 flex-shrink-0">
            <Layers size={12} /> {item.category || item.tags[0] || 'Resource'}
          </div>
          <div
            className="p-2 flex items-center gap-2 text-[10px] font-bold text-gray-600 min-w-0"
            title={formattedUrl}
          >
            <SquareArrowOutUpRight size={12} className="flex-shrink-0" />
            <span className="truncate">{formattedUrl}</span>
          </div>
        </div>
      </motion.div>
    </>
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
