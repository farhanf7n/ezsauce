import BackToTopButton from './BackToTopButton';
export default function Footer() {
  return (
    <div className="w-full px-5 py-[30px] mx-auto max-w-[1160px] flex flex-col md:flex-row justify-between items-center gap-4">
      <p className="text-[14px] font-medium">
        Designed and Created by{' '}
        <a
          href="https://www.linkedin.com/in/farhanf7n/"
          className="underline hover:text-medium-gray dark:hover:text-white transition-colors duration-300"
          target="_blank"
        >
          Farhan Ahmed
        </a>
      </p>
      <div className="flex gap-[8px] items-center">
        <a
          href="https://github.com/farhanf7n/ezsauce/issues/new"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex py-[12px] px-[18px] items-center gap-[8px] bg-[#000000] text-white rounded-[8px] shadow-drop border border-transparent hover:border-transparent dark:hover:border-white"
        >
          Submit a resource{' '}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            color="#fff"
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
      <BackToTopButton />
    </div>
  );
}
