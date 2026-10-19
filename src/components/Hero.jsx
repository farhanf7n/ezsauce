import { useEffect, useRef, useState } from 'react';
import { totalCount } from '../data/resources';
import { useMediaQuery, useReducedMotion } from '../lib/hooks';
import { InfiniteSlider } from './InfiniteSlider';
import { ArrowDownIcon } from './icons';

const TITLES = [
  'Developers',
  'Designers',
  'Daily users',
  'Geeks',
  'Makers',
  'Creatives',
  'Engineers',
  'Techies',
  'Dreamers',
];

const sliderImages = [
  '/assets/opt/3dicons-240.webp',
  '/assets/opt/21stdev-240.webp',
  '/assets/opt/appdb-240.webp',
  '/assets/opt/awwwards-240.webp',
];

const sideImages = {
  left: ['left-1', 'left-2', 'left-3'],
  right: ['right-1', 'right-2', 'right-3'],
};

function DecorativeImage({ name, className }) {
  return (
    <img
      src={`/assets/opt/${name}-240.webp`}
      alt=""
      loading="lazy"
      decoding="async"
      className={className}
    />
  );
}

export default function Hero() {
  const reduced = useReducedMotion();
  const isDesktop = useMediaQuery('(min-width: 1280px)');
  const [titleIndex, setTitleIndex] = useState(0);
  const heroRef = useRef(null);

  useEffect(() => {
    if (reduced) return undefined;
    const id = window.setInterval(
      () => setTitleIndex((index) => (index + 1) % TITLES.length),
      2400,
    );
    return () => window.clearInterval(id);
  }, [reduced]);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero || reduced || !isDesktop) return undefined;

    let frame = 0;
    let x = 0;
    let y = 0;

    const render = () => {
      frame = 0;
      hero.style.setProperty('--px', `${x}rem`);
      hero.style.setProperty('--py', `${y}rem`);
    };

    const onMove = (event) => {
      x = (event.clientX / window.innerWidth - 0.5) * 12;
      y = (event.clientY / window.innerHeight - 0.5) * 12;
      if (!frame) frame = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', onMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [reduced, isDesktop]);

  return (
    <section
      ref={heroRef}
      aria-labelledby="hero-title"
      className="relative mx-auto mt-3 flex max-w-[1440px] flex-col items-center justify-center overflow-hidden rounded-3xl px-6 py-10 md:mt-6 md:py-24 lg:px-10"
    >
      {!isDesktop ? (
        <InfiniteSlider className="mb-8 w-full md:mb-12" gap={24} duration={42}>
          {sliderImages.map((src) => (
            <img
              key={src}
              src={src}
              alt=""
              width="120"
              height="120"
              loading="lazy"
              decoding="async"
              className="aspect-square w-20 rounded object-cover md:w-[120px]"
            />
          ))}
          {['left-2', 'left-3', 'right-3', 'right-2', 'right-1'].map((name) => (
            <DecorativeImage
              key={name}
              name={name}
              className="h-20 w-20 rounded object-cover md:w-[120px]"
            />
          ))}
        </InfiniteSlider>
      ) : null}

      <div className="relative z-10 flex w-full max-w-[50rem] flex-col items-center text-center">
        <h1
          id="hero-title"
          className="font-display text-7xl font-bold leading-[1.15] tracking-[-0.01em] text-black dark:text-white max-md:text-[2.2rem] max-sm:text-[2rem]"
        >
          Web Resources Collected For
          <span
            className="mt-1 flex h-[1.3em] justify-center overflow-hidden"
            aria-hidden="true"
          >
            <span
              className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
              style={{ transform: `translateY(-${titleIndex * 1.3}em)` }}
            >
              {TITLES.map((title) => (
                <span key={title} className="block h-[1.3em] leading-[1.3]">
                  {title}
                </span>
              ))}
            </span>
          </span>
          <span className="sr-only">developers, designers and creators</span>
        </h1>

        <p className="mx-auto max-w-[38.5rem] pt-5 text-lg font-normal leading-7 text-black/75 dark:text-zinc-300 md:text-xl md:leading-[30px]">
          Explore selected and chosen items that will improve your productivity
          and help you grow as a developer and designer.
        </p>

        <a
          href="#resources"
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-black px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-black/80 dark:bg-accent dark:text-black dark:hover:bg-accent/85"
        >
          Browse {totalCount} resources
          <ArrowDownIcon className="h-4 w-4" />
        </a>
      </div>

      {isDesktop ? (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 flex w-full items-center justify-center pb-8"
        >
          <div className="absolute left-0 mr-auto flex h-[50vh] min-h-[25rem] flex-col items-start justify-between">
            {sideImages.left.map((name, index) => (
              <DecorativeImage
                key={name}
                name={name}
                className={[
                  'h-28 w-auto rounded-2xl lg:animate-[up-down_9s_ease-in-out_infinite]',
                  index === 0 ? 'ml-28 [animation-delay:3s]' : '',
                  index === 2 ? 'ml-32 [animation-delay:6s]' : '',
                ].join(' ')}
              />
            ))}

            <img
              src="/mel.svg"
              alt=""
              width="36"
              height="36"
              className="absolute left-1/2 top-[30%] h-9 -translate-x-1/2 opacity-90 transition-transform duration-[1.5s] ease-out will-change-transform"
              style={{
                transform:
                  'translate3d(var(--px, 0rem), calc(var(--py, 0rem) * -1), 0)',
              }}
            />
            <img
              src="/eric.svg"
              alt=""
              width="36"
              height="36"
              className="absolute -right-[10%] bottom-[30%] h-9 opacity-90 transition-transform duration-[1.5s] ease-out will-change-transform"
              style={{
                transform: 'translate3d(var(--px, 0rem), var(--py, 0rem), 0)',
              }}
            />
          </div>

          <div className="absolute right-0 flex h-[50vh] min-h-[25rem] flex-col items-end justify-between">
            {sideImages.right.map((name, index) => (
              <DecorativeImage
                key={name}
                name={name}
                className={[
                  'h-28 w-auto rounded-2xl lg:animate-[up-down_9s_ease-in-out_infinite]',
                  index === 0 ? 'mr-32' : '',
                  index === 2 ? 'mr-32 [animation-delay:3s]' : '',
                  index === 1 ? '[animation-delay:5s]' : '',
                ].join(' ')}
              />
            ))}

            <img
              src="/kaleb.svg"
              alt=""
              width="36"
              height="36"
              className="absolute right-[60%] top-[30%] h-9 opacity-90 transition-transform duration-[1.5s] ease-out will-change-transform"
              style={{
                transform: 'translate3d(var(--px, 0rem), var(--py, 0rem), 0)',
              }}
            />
            <img
              src="/josh.svg"
              alt=""
              width="36"
              height="36"
              className="absolute bottom-[15%] right-[10%] h-9 opacity-90 transition-transform duration-[1.5s] ease-out will-change-transform"
              style={{
                transform:
                  'translate3d(var(--px, 0rem), calc(var(--py, 0rem) * -1), 0)',
              }}
            />
          </div>
        </div>
      ) : null}
    </section>
  );
}
