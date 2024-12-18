'use client';
import { BackgroundLines } from './ui/background-lines';
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

  return (
    <div className="hero-container w-full pt-[90px] lg:w-[1160px] mx-auto flex items-center justify-between relative px-5">
      <div ref={ref}>
        <BackgroundLines>
          <motion.p
            variants={textVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            custom={0}
            className="hero-heading text-[#161616] text-[44px] leading-[48px] md:text-[80px] md:leading-[88px] sm:text-[56px] sm:leading-[62px] tracking-[-.03em] text-center dark:text-white font-ClashDisplayBold font-semibold relative"
          >
            The one-stop shop with everything you need
          </motion.p>
        </BackgroundLines>

        <div>
          <motion.p
            variants={textVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            custom={1}
            className="text-[20px] text-center leading-[30px] flex flex-col pt-[20px] dark:text-white"
          >
            Explore selected and chosen items that will improve{' '}
            <br className="hidden lg:block" /> your productivity and help you
            grow <br className="hidden lg:block" /> as a developer and designer.
          </motion.p>
        </div>
      </div>
    </div>
  );
}
