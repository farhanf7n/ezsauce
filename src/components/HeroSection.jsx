import { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import sunIcon from '/assets/sun.svg';
import moonStarsIcon from '/assets/moonStars.svg';
import dataLinks from '../data/data.json';

const HeroSection = () => {
  // Animation variants for floating elements
  const floatVariants = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: [0, -10, 0],
      transition: {
        y: {
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: delay,
        },
        opacity: { duration: 0.8, delay: delay },
      },
    },
  });

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

  const scrollToResources = () => {
    const element = document.getElementById('resoucesSection');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const categoryData = useMemo(() => {
    const categoryCount = dataLinks.reduce((acc, item) => {
      acc[item.category] = (acc[item.category] || 0) + 1;
      return acc;
    }, {});

    const totalCount = dataLinks.length;
    const totalCategories = Object.keys(categoryCount).length;

    const categories = Object.entries(categoryCount).map(
      ([category, count]) => ({
        category,
        count: count.toString().padStart(2, '0'),
      }),
    );

    return {
      categories,
      totalCount: totalCount.toString().padStart(2, '0'),
      totalCategories,
    };
  }, []);

  return (
    <div className="w-full overflow-hidden">
      {/* 2. Navigation */}
      <nav className="relative z-20 flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <svg
          className="w-8 h-8"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_3092_829)">
            <path
              className="fill-black dark:fill-white"
              d="M1.23937 22.1673C2.11075 15.041 5.74293 12.7552 8.99523 10.7298C12.3162 8.66085 15.1886 6.84869 14.8431 0.0400391C13.3282 0.148302 11.8367 0.473064 10.4139 1.00442C10.5584 6.40799 7.99865 8.01053 5.51472 9.55798C2.89127 11.192 0.413059 12.7359 0.257812 18.8284C0.465284 19.9881 0.795093 21.1077 1.23937 22.1673Z"
            />
            <path
              className="fill-black dark:fill-white"
              d="M4.75846 8.34322C7.07356 6.90022 8.94581 5.71978 8.98802 1.61899C4.7742 3.68441 1.59774 7.54839 0.460938 12.2043C1.62779 10.2949 3.24964 9.28257 4.75846 8.34322ZM5.18128 27.7747C5.74503 20.1798 9.07745 17.5292 12.309 14.963C15.8196 12.1757 19.137 9.5344 18.9502 0.268282C18.0665 0.103924 17.1705 0.0141807 16.2717 0C16.6423 7.62709 13.1475 9.82915 9.75209 11.9439C6.31235 14.0866 2.76244 16.3109 2.48915 24.5503C3.24194 25.738 4.14701 26.822 5.18128 27.7747ZM22.3163 19.4244C25.5228 16.851 28.5476 14.4014 28.3859 5.86215C27.5215 4.80995 26.5272 3.87148 25.4269 3.06915C25.3819 12.3982 21.7554 15.3143 18.2405 18.1345C14.9324 20.7894 11.8096 23.3012 11.5807 31.3804C12.8999 31.7596 14.2871 31.975 15.7208 32.0007C16.0979 24.4366 19.2536 21.8833 22.3163 19.4244ZM27.6905 22.7618C25.394 24.1611 23.4023 25.3881 23.1705 30.3088C27.5739 28.096 30.8198 23.9122 31.7441 18.9193C30.7125 20.9182 29.1478 21.874 27.6905 22.7618Z"
            />
            <path
              className="fill-black dark:fill-white"
              d="M26.9456 21.5406C29.4052 20.0411 31.7296 18.626 31.4463 12.0462L31.52 12.0434C31.1453 10.5781 30.5633 9.17388 29.7915 7.87321C29.4531 15.5067 26.2895 18.0708 23.2125 20.5404C20.2843 22.8884 17.5221 25.1255 17.1565 31.9607C18.7174 31.8502 20.2534 31.5103 21.7151 30.9519C21.8024 24.6748 24.5339 23.0101 26.9456 21.5406ZM17.3454 17.0184C20.8616 14.1975 24.1841 11.5254 23.9895 2.13339C22.8565 1.47857 21.6471 0.965808 20.3888 0.606689C20.4911 10.2935 16.7852 13.2353 13.1981 16.0834C9.93147 18.6768 6.84872 21.1407 6.55469 28.9051C7.66965 29.7241 8.88626 30.3948 10.174 30.9004C10.5274 22.5121 13.9886 19.712 17.3454 17.0184Z"
            />
          </g>
          <defs>
            <clipPath id="clip0_3092_829">
              <rect width="32" height="32" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <div className="hidden md:flex gap-1 bg-white/50 dark:bg-[#1a1a1a]/60 backdrop-blur-xl border border-gray-100 dark:border-slate-800 p-1 rounded-full shadow-sm transition-colors duration-300">
          <button
            onClick={scrollToResources}
            data-slot="button"
            className="whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-secondary text-secondary-foreground hover:bg-secondary/80 h-9 has-[>svg]:px-3 group flex w-fit items-center justify-center gap-2 rounded-full px-6 py-3 tracking-tight"
          >
            <span>Explore Resources</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-arrow-right size-4 -rotate-45 transition-all ease-out group-hover:ml-3 group-hover:rotate-0"
              aria-hidden="true"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </button>
          <button
            onClick={() =>
              window.open(
                'https://github.com/farhanf7n/ezsauce/issues/new',
                '_blank',
              )
            }
            data-slot="button"
            className="whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground hover:bg-primary/90 h-9 has-[>svg]:px-3 group flex w-fit items-center justify-center gap-2 rounded-full px-6 py-3 tracking-tight"
          >
            <span>Submit a Resource</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-arrow-right size-4 -rotate-45 transition-all ease-out group-hover:ml-3 group-hover:rotate-0"
              aria-hidden="true"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </button>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-white/10 dark:hover:bg-white/5 transition-colors"
          >
            <img
              src={isDarkMode ? sunIcon : moonStarsIcon}
              alt={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              className="w-6 h-6"
            />
          </button>

          <button
            onClick={() => window.open('https://www.forhan.dev/', '_blank')}
            data-slot="button"
            className="whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground hover:bg-primary/90 h-9 has-[>svg]:px-3 group flex w-fit items-center justify-center gap-2 rounded-full px-6 py-3 tracking-tight"
          >
            <span>Let&apos;s Talk</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-arrow-right size-4 -rotate-45 transition-all ease-out group-hover:ml-3 group-hover:rotate-0"
              aria-hidden="true"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* 3. Main Content Area */}
      <main className="relative z-10 flex flex-col items-center justify-center pt-20 px-4 text-center max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-7xl font-bold tracking-tight leading-[1.1]"
        >
          Curated Resources For <br className="hidden md:block" />
          <span className="text-gray-400">Developers </span>
          <span className="text-gray-400">Designers &</span>
          <br className="hidden md:block" />
          Modern Builders
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8  text-gray-500 max-w-lg font-light text-sm md:text-lg"
        >
          A handpicked collection of the best websites, tools, and inspiration —
          carefully curated to help developers and designers build better
          products, faster.
        </motion.p>

        {/* 4. Floating Decorative Elements */}

        {/* Left Card: Featured Resource */}
        <motion.div
          variants={floatVariants(0.2)}
          initial="initial"
          animate="animate"
          className="absolute -left-44 top-20 hidden lg:block p-4 bg-white rounded-2xl shadow-xl border border-gray-100 w-64 text-left"
        >
          <p className="text-[10px] uppercase tracking-wide text-gray-400 mb-2">
            Featured Resource
          </p>

          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl text-black bg-gray-100 flex items-center justify-center text-sm font-bold">
              FM
            </div>
            <div>
              <p className="font-semibold text-sm text-black">Framer Motion</p>
              <p className="text-[11px] text-gray-400">React Animations</p>
            </div>
          </div>

          <div className="flex gap-2">
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">
              Frontend
            </span>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">
              Animation
            </span>
          </div>
        </motion.div>

        {/* Right Card: Popular Categories */}
        <motion.div
          variants={floatVariants(0.8)}
          initial="initial"
          animate="animate"
          className="absolute -right-44 top-24 hidden lg:block p-4 bg-white rounded-2xl shadow-xl border border-gray-100 w-64 text-left"
        >
          <p className="text-[10px] uppercase tracking-wide text-gray-400 mb-3">
            Popular Categories
          </p>

          <ul className="space-y-2 text-sm">
            {categoryData.categories
              .sort((a, b) => parseInt(b.count) - parseInt(a.count))
              .slice(0, 4)
              .map(({ category, count }) => (
                <li key={category} className="flex justify-between">
                  <span className="text-gray-600 text-xs">{category}</span>
                  <span className="text-gray-400 text-xs">{count}</span>
                </li>
              ))}
          </ul>
        </motion.div>

        {/* Bottom Card: Editor’s Pick */}
        <motion.div
          variants={floatVariants(1.2)}
          initial="initial"
          animate="animate"
          className="hidden md:block absolute bottom-10 -left-10 bg-[#1a1a1a] text-white p-3 pr-6 rounded-full shadow-lg"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold">
              ★
            </div>
            <div className="text-left">
              <p className="text-[11px] font-semibold leading-none">
                Editor’s Pick
              </p>
              <p className="text-[9px] opacity-60">Best design systems</p>
            </div>
          </div>
        </motion.div>

        {/* Bottom Card: Library Stats */}
        <motion.div
          variants={floatVariants(1.5)}
          initial="initial"
          animate="animate"
          className="hidden md:block absolute bottom-10 -right-20 bg-[#a855f7] text-white p-3 pr-6 rounded-full shadow-lg"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold">
              {categoryData.totalCount}
            </div>
            <div className="text-left">
              <p className="text-[11px] font-semibold leading-none">
                Curated Resources
              </p>
              <p className="text-[9px] opacity-80">
                Across {categoryData.totalCategories} categories
              </p>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default HeroSection;
