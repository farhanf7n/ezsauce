'use client';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function HeroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const textVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: 'blur(8px)',
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        delay: i * 0.3,
        duration: 0.5,
        ease: [0.32, 0.72, 0, 1],
        filter: {
          duration: 0.8,
          ease: [0.32, 0.72, 0, 1],
        },
      },
    }),
  };

  return (
    <div>
      <div className="hero-container w-full pt-24 pb-8 max-w-[1160px] mx-auto flex items-center justify-between relative px-5">
        <div ref={ref}>
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            custom={0}
            className="hero-heading text-[#161616] text-[44px] leading-[48px] md:text-[80px] md:leading-[88px] sm:text-[56px] sm:leading-[62px] tracking-[-.02em] text-center dark:text-white relative mb-5"
          >
            <span className="flex items-center justify-center flex-wrap gap-2 text-2xl">
              <div className="flex items-center justify-center">
                <img
                  src="/assets/person5.jpg"
                  className="w-10 h-10 rounded-[50%] border-2 border-white relative z-[5]"
                  alt=""
                />
                <img
                  src="/assets/person4.png"
                  className="w-10 h-10 rounded-[50%] border-2 border-white relative z-[4] -ml-3"
                  alt=""
                />
                <img
                  src="/assets/person3.jpg"
                  className="w-10 h-10 rounded-[50%] border-2 border-white relative z-[3] -ml-3"
                  alt=""
                />
                <img
                  src="/assets/person1.jpg"
                  className="w-10 h-10 rounded-[50%] border-2 border-white relative z-[2] -ml-3"
                  alt=""
                />
                <img
                  src="/assets/person2.png"
                  className="w-10 h-10 rounded-[50%] border-2 border-white relative z-[1] -ml-3"
                  alt=""
                />
              </div>
              5,652 Monthly Users
            </span>
          </motion.div>
          <motion.p
            variants={textVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            custom={1}
            className="hero-heading text-[#161616] text-[44px] leading-[48px] md:text-[80px] md:leading-[88px] sm:text-[56px] sm:leading-[62px] tracking-[-.02em] text-center dark:text-white font-ClashDisplayBold font-semibold relative"
          >
            The{' '}
            <span className="text-[#ffc70f] px-3 font-ClashDisplayBold font-semibold relative">
              one-stop 🚧
            </span>{' '}
            shop with everything you need 🚀
          </motion.p>
          <div className="flex flex-col items-center justify-center">
            <motion.p
              variants={textVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              custom={2}
              className="text-xl text-center leading-[30px] pt-5 dark:text-white"
              whileInView={{
                transition: {
                  duration: 2,
                  ease: 'easeInOut',
                },
              }}
            >
              Explore selected and chosen items that will improve{' '}
              <br className="hidden lg:block" /> your productivity and help you
              grow <br className="hidden lg:block" /> as a developer and
              designer.
            </motion.p>

            <img
              className="w-[5em]"
              src="https://i.giphy.com/eNMFnkhf7qEtGaOGEg.webp"
              alt=""
            />
          </div>

          <motion.div
            variants={textVariants}
            className="hidden xl:block"
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            custom={3}
          >
            <motion.img
              src="/assets/bulbicon.png"
              className="absolute -left-16 bottom-24 hidden lg:block"
              alt=""
              animate={{
                x: [0, 8, 0, -8, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          </motion.div>

          <motion.div
            variants={textVariants}
            className="hidden xl:block"
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            custom={4}
          >
            <motion.img
              src="/assets/labIcon.png"
              className="absolute -right-32 bottom-72 hidden lg:block"
              alt=""
              animate={{
                x: [0, 8, 0, -8, 0],
                y: [-8, 0, 8, 0, -8],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
