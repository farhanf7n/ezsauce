import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { InfiniteSlider } from './InfiniteSlider'; // Adjust the import path as necessary

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => [
      'Developers',
      'Designers',
      'Daily users',
      'Geeks',
      'Makers',
      'Creatives',
      'Engineers',
      'Techies',
      'Dreamers',
    ],
    [],
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTitleNumber((prev) => (prev === titles.length - 1 ? 0 : prev + 1));
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  useEffect(() => {
    const image = document.querySelector('.gradient-image');
    if (image) {
      image.classList.add('animate-slide-in');
    }
  }, []);

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const newX = (mouseX / screenWidth - 0.5) * 12;
      const newY = (mouseY / screenHeight - 0.5) * -12;

      setX(newX);
      setY(newY);
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <div className="h-full flex-col mt-11 py-8 md:py-40 justify-center items-center flex relative overflow-hidden rounded-3xl px-10 max-md:px-6 max-md:justify-start">
        <InfiniteSlider durationOnHover={75} gap={24}>
          <img
            src="./assets/3dicons.png"
            className="aspect-square w-[80px] md:w-[120px] rounded-[4px] object-cover"
          />
          <img
            src="./assets/21stdev.png"
            className="aspect-square w-[80px] md:w-[120px] rounded-[4px] object-cover"
          />

          <img
            src="./assets/appdb.png"
            className="aspect-square w-[80px] md:w-[120px] rounded-[4px] object-cover"
          />

          <img
            src="./assets/awwwards.png"
            className="aspect-square w-[80px] md:w-[120px] rounded-[4px] object-cover"
          />
          <img
            src="/left-2.png"
            className="aspect-square w-[80px] md:w-[120px] rounded-[4px] object-cover"
          />
          <img
            src="/left-3.png"
            className="aspect-square w-[80px] md:w-[120px] rounded-[4px] object-cover"
          />
          <img
            src="/right-3.png"
            className="aspect-square w-[80px] md:w-[120px] rounded-[4px] object-cover"
          />
          <img
            src="/right-2.png"
            className="aspect-square w-[80px] md:w-[120px] rounded-[4px] object-cover"
          />
          <img
            src="/right-1.png"
            className="aspect-square w-[80px] md:w-[120px] rounded-[4px] object-cover"
          />
        </InfiniteSlider>
        <div className="flex mx-auto justify-start items-center flex-col w-full z-10 relative max-w-[50rem] text-center max-md:pt-11">
          <h1 className="text-black dark:text-white heading font-relativeFaux my-0 leading-[1.2] text-7xl max-md:text-[2.2rem] max-sm:text-[2rem] tracking-[-.01em] font-bold">
            Web Resources Collected For{' '}
            <span className="font-relativeFaux flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
              &nbsp;
              {titles.map((title, index) => (
                <motion.span
                  key={index}
                  className="absolute"
                  initial={{ opacity: 0, y: -100 }}
                  transition={{ type: 'spring', stiffness: 50 }}
                  animate={
                    titleNumber === index
                      ? { y: 0, opacity: 1 }
                      : {
                          y: titleNumber > index ? -150 : 150,
                          opacity: 0,
                        }
                  }
                >
                  {title}
                </motion.span>
              ))}
            </span>
          </h1>

          <p className="max-w-[38.5rem] text-xl max-md:text-base text-black/80 dark:text-white font-normal mx-auto leading-[30px] pt-6 pb-8">
            Explore selected and chosen items that will improve your
            productivity and help you grow as a developer and designer.
          </p>
        </div>

        {/* Left/Right Bubbles and Floating Cursors */}
        <div className="z-0 w-full h-full max-w-screen-xl justify-center items-center hidden xl:flex absolute pb-8 max-md:pb-0">
          {/* Left section */}
          <div className="h-[50vh] min-h-[25rem] flex-col justify-between items-start flex absolute mr-auto left-0 max-mdd:flex-row max-md:justify-center max-md:items-end max-md:mr-48 max-sm:mr-24 max-md:pb-36">
            <img
              src="/left-1.png"
              alt=""
              className="w-auto h-28 ml-28 rounded-2xl lg:animate-[up-down_9s_ease-in-out_3s_infinite]"
            />
            <img
              src="/left-2.png"
              alt=""
              className="w-auto h-28 rounded-2xl lg:animate-[up-down_9s_ease-in-out_0s_infinite]"
            />
            <img
              src="/left-3.png"
              alt=""
              className="w-auto h-28 ml-40 rounded-2xl lg:animate-[up-down_9s_ease-in-out_6s_infinite] max-md:hidden"
            />
            <img
              src="/mel.svg"
              alt="mel cursor"
              className="absolute top-[30%] left-[50%] duration-[1.5s] ease-out h-9 max-md:hidden"
              style={{
                transform: `translate3d(${x}rem, ${-y}rem, 0)`,
                transformStyle: 'preserve-3d',
                willChange: 'transform',
              }}
            />
            <img
              src="/eric.svg"
              alt="eric cursor"
              className="absolute bottom-[30%] right-[-10%] duration-[1.5s] ease-out h-9 max-md:bottom-[15%] max-md:left-[20%] max-md:right-auto"
              style={{
                transform: `translate3d(${x}rem, ${y}rem, 0)`,
                transformStyle: 'preserve-3d',
                willChange: 'transform',
              }}
            />
          </div>

          {/* Right section */}
          <div className="h-[50vh] min-h-[25rem] flex-col justify-between items-end flex absolute right-0 max-mdd:flex-row max-md:ml-48 max-sm:ml-24 max-md:pb-36">
            <img
              src="/right-1.png"
              alt=""
              className="w-auto h-28 mr-32 rounded-2xl lg:animate-[up-down_9s_ease-in-out_0s_infinite]"
            />
            <img
              src="/right-2.png"
              alt=""
              className="w-auto h-28 rounded-2xl lg:animate-[up-down_9s_ease-in-out_5s_infinite]"
            />
            <img
              src="/right-3.png"
              alt=""
              className="w-auto h-28 mr-40 rounded-2xl lg:animate-[up-down_9s_ease-in-out_3s_infinite] max-md:hidden"
            />
            <img
              src="/kaleb.svg"
              alt="kaleb cursor"
              className="absolute top-[30%] right-[60%] duration-[1.5s] ease-out h-9 max-md:bottom-[15%] max-md:right-[15%]"
              style={{
                transform: `translate3d(${x}rem, ${y}rem, 0)`,
                transformStyle: 'preserve-3d',
                willChange: 'transform',
              }}
            />
            <img
              src="/josh.svg"
              alt="josh cursor"
              className="absolute bottom-[15%] right-[10%] duration-[1.5s] ease-out h-9 max-md:hidden"
              style={{
                transform: `translate3d(${x}rem, ${-y}rem, 0)`,
                transformStyle: 'preserve-3d',
                willChange: 'transform',
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
