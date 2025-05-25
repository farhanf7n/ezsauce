import { twMerge } from 'tailwind-merge';

export default function Tag({ children, className }) {
  return (
    <span
      className={twMerge(
        'bg-[#FFC70F] text-[12px] font-medium leading-[20px] rounded-[4px] px-[6px] dark:text-black',
        className,
      )}
    >
      {children}
    </span>
  );
}
