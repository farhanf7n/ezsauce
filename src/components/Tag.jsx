import { twMerge } from 'tailwind-merge';

export default function Tag({ children, className }) {
  return (
    <>
      <span className="bg-white px-2 py-0.5 rounded-full text-[9px] text-purple-600 font-bold">
        {children}
      </span>
    </>
  );
}
