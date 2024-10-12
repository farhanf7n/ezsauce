import React, { useState, useEffect } from 'react';

const BackToTopButton = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <a
      href="#"
      className="fixed right-[30px] bottom-[30px] w-[44px] h-[44px] bg-black rounded-full shadow-drop flex items-center justify-center"
      onClick={handleBackToTop}
    >
      <svg width="44" height="44" viewBox="0 0 44 44" className="absolute">
        <circle
          cx="22"
          cy="22"
          r="20"
          fill="none"
          stroke="rgb(255 199 15 / var(--tw-bg-opacity))"
          strokeWidth="4"
          strokeDasharray={`${scrollProgress * 1.256}, 126`}
          transform="rotate(-90 22 22)"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#FFF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-corner-right-up relative z-10"
      >
        <polyline points="10 9 15 4 20 9" />
        <path d="M4 20h7a4 4 0 0 0 4-4V4" />
      </svg>
    </a>
  );
};

export default BackToTopButton;
