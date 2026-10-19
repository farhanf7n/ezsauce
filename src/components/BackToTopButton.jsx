import { useEffect, useRef, useState } from 'react';
import { cn } from '../lib/cn';
import { ArrowUpIcon } from './icons';

const RADIUS = 20;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export default function BackToTopButton() {
  const progressRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(1, window.scrollY / max) : 0;

      if (progressRef.current) {
        progressRef.current.style.strokeDasharray = `${progress * CIRCUMFERENCE} ${CIRCUMFERENCE}`;
      }
      setVisible(window.scrollY > 600);
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const backToTop = () => {
    const reduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' });
  };

  return (
    <button
      type="button"
      onClick={backToTop}
      aria-label="Back to top"
      className={cn(
        'fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-black text-white shadow-drop transition-opacity duration-300 dark:bg-accent dark:text-black',
        visible ? 'opacity-100' : 'pointer-events-none opacity-0',
      )}
    >
      <svg
        viewBox="0 0 44 44"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full -rotate-90"
      >
        <circle
          cx="22"
          cy="22"
          r={RADIUS}
          fill="none"
          stroke="currentColor"
          strokeOpacity="0.25"
          strokeWidth="4"
        />
        <circle
          ref={progressRef}
          cx="22"
          cy="22"
          r={RADIUS}
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray={`0 ${CIRCUMFERENCE}`}
          className="text-accent dark:text-black"
        />
      </svg>
      <ArrowUpIcon className="relative h-5 w-5" />
    </button>
  );
}
