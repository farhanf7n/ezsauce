import { useState, useEffect } from 'react';
import sunIcon from '/assets/sun.svg';
import moonStarsIcon from '/assets/moonStars.svg';
import { useRef } from 'react';
import { useInView, motion } from 'framer-motion';

export default function Navbar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const navVariants = {
    hidden: {
      opacity: 0,
      filter: 'blur(8px)',
    },
    visible: (i) => ({
      opacity: 1,
      filter: 'blur(0px)',
      transition: {
        delay: i * 0.6,
        duration: 0.6,
        ease: [0.32, 0.72, 0, 1],
        filter: {
          duration: 0.8,
          ease: [0.32, 0.72, 0, 1],
        },
      },
    }),
  };

  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = (e) => {
      if (!localStorage.getItem('theme')) {
        setIsDarkMode(e.matches);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <div className="w-full mx-auto max-w-7xl px-4 md:px-0 mt-6">
        <motion.div
          ref={ref}
          variants={navVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          custom={0}
          className="bg-secondary/80 dark:bg-white border-border flex items-center justify-between gap-1 rounded-xl border p-[6px] backdrop-blur-sm"
        >
          <div className="text-muted-foreground text-sm">
            <div className="relative p-2">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3092_829)">
                  <path
                    className="fill-black dark:fill-black"
                    d="M1.23937 22.1673C2.11075 15.041 5.74293 12.7552 8.99523 10.7298C12.3162 8.66085 15.1886 6.84869 14.8431 0.0400391C13.3282 0.148302 11.8367 0.473064 10.4139 1.00442C10.5584 6.40799 7.99865 8.01053 5.51472 9.55798C2.89127 11.192 0.413059 12.7359 0.257812 18.8284C0.465284 19.9881 0.795093 21.1077 1.23937 22.1673Z"
                  />
                  <path
                    className="fill-black dark:fill-black"
                    d="M4.75846 8.34322C7.07356 6.90022 8.94581 5.71978 8.98802 1.61899C4.7742 3.68441 1.59774 7.54839 0.460938 12.2043C1.62779 10.2949 3.24964 9.28257 4.75846 8.34322ZM5.18128 27.7747C5.74503 20.1798 9.07745 17.5292 12.309 14.963C15.8196 12.1757 19.137 9.5344 18.9502 0.268282C18.0665 0.103924 17.1705 0.0141807 16.2717 0C16.6423 7.62709 13.1475 9.82915 9.75209 11.9439C6.31235 14.0866 2.76244 16.3109 2.48915 24.5503C3.24194 25.738 4.14701 26.822 5.18128 27.7747ZM22.3163 19.4244C25.5228 16.851 28.5476 14.4014 28.3859 5.86215C27.5215 4.80995 26.5272 3.87148 25.4269 3.06915C25.3819 12.3982 21.7554 15.3143 18.2405 18.1345C14.9324 20.7894 11.8096 23.3012 11.5807 31.3804C12.8999 31.7596 14.2871 31.975 15.7208 32.0007C16.0979 24.4366 19.2536 21.8833 22.3163 19.4244ZM27.6905 22.7618C25.394 24.1611 23.4023 25.3881 23.1705 30.3088C27.5739 28.096 30.8198 23.9122 31.7441 18.9193C30.7125 20.9182 29.1478 21.874 27.6905 22.7618Z"
                  />
                  <path
                    className="fill-black dark:fill-black"
                    d="M26.9456 21.5406C29.4052 20.0411 31.7296 18.626 31.4463 12.0462L31.52 12.0434C31.1453 10.5781 30.5633 9.17388 29.7915 7.87321C29.4531 15.5067 26.2895 18.0708 23.2125 20.5404C20.2843 22.8884 17.5221 25.1255 17.1565 31.9607C18.7174 31.8502 20.2534 31.5103 21.7151 30.9519C21.8024 24.6748 24.5339 23.0101 26.9456 21.5406ZM17.3454 17.0184C20.8616 14.1975 24.1841 11.5254 23.9895 2.13339C22.8565 1.47857 21.6471 0.965808 20.3888 0.606689C20.4911 10.2935 16.7852 13.2353 13.1981 16.0834C9.93147 18.6768 6.84872 21.1407 6.55469 28.9051C7.66965 29.7241 8.88626 30.3948 10.174 30.9004C10.5274 22.5121 13.9886 19.712 17.3454 17.0184Z"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_3092_829">
                    <rect width="32" height="32" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-white/10 dark:hover:bg-white/5 transition-colors"
            >
              <img
                src={isDarkMode ? sunIcon : moonStarsIcon}
                alt={
                  isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'
                }
                className="w-6 h-6"
              />
            </button>
            <a
              className="py-2 px-4 flex items-center gap-[8px] bg-white/10 dark:bg-white/5 border  dark:border-black hover:bg-black/10 dark:hover:bg-white/10 dark:border-white/10 rounded-lg text-sm text-black dark:text-black transition-colors duration-300 border-medium-gray hover:border-dashed dark:hover:border-white"
              href="https://www.linkedin.com/in/farhanf7n/"
              target="_blank"
            >
              Contact Me
            </a>
            <a
              href="https://github.com/farhanf7n/ezsauce/issues/new"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex py-2 px-4 items-center gap-[8px] bg-black/90 dark:bg-white/10 backdrop-blur-xl text-white dark:text-black rounded-[8px] border border-transparent hover:border-white/20 dark:border-white/20 dark:hover:border-white/30 dark:hover:bg-white/20 transition-colors duration-300 h-[38px]"
            >
              Submit a resource{' '}
              <svg
                className="text-white dark:text-black"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                color="currentColor"
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
            </a>
          </div>
        </motion.div>
      </div>
    </>
  );
}
