import { cn } from '../lib/cn';

export default function Tag({ children, className }) {
  return (
    <span
      className={cn(
        'block max-w-[11rem] truncate rounded bg-accent px-1.5 py-0.5 text-[11px] font-medium leading-4 text-black',
        className,
      )}
    >
      {children}
    </span>
  );
}
