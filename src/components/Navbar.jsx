import { useState, useEffect } from 'react';
import siteLogo from '../assets/Logo.svg';
import sunIcon from '../assets/sun.svg';
import moonStarsIcon from '../assets/moonStars.svg';

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="w-[1160px] mx-auto flex items-center justify-between py-[20px]">
      <div>
        <img src={siteLogo} className="w-[32px] h-[32px]" alt="" />
      </div>
      <div className="flex items-center gap-[19px]">
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full"
        >
          <img
            src={isDarkMode ? sunIcon : moonStarsIcon}
            alt={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            className="w-6 h-6"
          />
        </button>

        <a
          href="#"
          className="py-[12px] px-[18px] flex items-center gap-[8px] border border-1 border-slate-gray rounded-[8px] hover:bg-black hover:text-white hover:border-black shadow-drop"
        >
          About
        </a>
        <a
          href="#"
          className="py-[12px] px-[18px] flex items-center gap-[8px] bg-[#000000] text-white rounded-[8px] shadow-drop"
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
    </div>
  );
}
