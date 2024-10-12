const BackToTopButton = () => {
  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <a
      href="#"
      className="absolute right-[30px] bottom-[30px] p-[10px] bg-black rounded-[4px] shadow-drop"
      onClick={handleBackToTop}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#FFF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-corner-right-up"
      >
        <polyline points="10 9 15 4 20 9" />
        <path d="M4 20h7a4 4 0 0 0 4-4V4" />
      </svg>
    </a>
    // Add circular progress
  );
};

export default BackToTopButton;
