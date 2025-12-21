import BackToTopButton from './BackToTopButton';
export default function Footer() {
  return (
    <>
      <footer className="my-8 w-full">
        <div className="flex items-center justify-center gap-2">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Designed and built by
          </span>
          <div className="group relative size-7 overflow-hidden rounded-full">
            {/* Profile Image - slides up on hover */}
            <img
              src="/ghibli-dp.png"
              alt="Farhan Ahmed"
              width={28}
              height={28}
              className="absolute inset-0 size-7 rounded-full object-cover object-top transition-transform duration-300 ease-in-out group-hover:-translate-y-7"
            />

            {/* SVG Logo - slides up from below on hover */}
            <div className="absolute inset-0 flex translate-y-7 items-center justify-center transition-transform duration-300 ease-in-out group-hover:translate-y-0">
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_5025_2215)">
                  <path
                    d="M14 28C21.732 28 28 21.732 28 14C28 6.26801 21.732 0 14 0C6.26801 0 0 6.26801 0 14C0 21.732 6.26801 28 14 28Z"
                    fill="#D2FF37"
                  />
                  <path
                    d="M14.4245 7.00481L14.4637 7V7L14.5376 7.0001V7.0001L14.6268 7.01669V7.01669L14.6892 7.04022V7.04022L19.7661 9.40878C20.078 9.55425 20.078 9.96946 19.7661 10.1149L15.446 12.1304L19.7661 14.1459C20.079 14.2918 20.0777 14.7088 19.764 14.8531L14.8927 17.0933L14.9231 21.6022C14.9251 21.9079 14.5699 22.0997 14.2868 21.9456L9.2099 19.1823C9.07992 19.1116 9 18.9817 9 18.8413L9.00156 9.72683V9.72683L9.0172 9.65022V9.65022L9.03534 9.6039V9.6039L9.04537 9.584C9.05977 9.55738 9.07696 9.53295 9.09643 9.51084L9.15255 9.45822V9.45822L9.21299 9.41916V9.41916L14.3529 7.02306V7.02306L14.4245 7.00481Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_5025_2215">
                    <rect width="28" height="28" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>

          <a
            className="font-mediumtransition-colors text-sm dark:text-white underline"
            href="https://www.forhan.dev/"
            target="_blank"
          >
            Farhan Ahmed
          </a>
        </div>
        <BackToTopButton />
      </footer>
    </>
  );
}
