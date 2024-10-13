import guyUsingLaptop from '../assets/guy-using-laptop.svg';
export default function HeroSection() {
  return (
    <div className="hero-container w-[1160px] h-[640px] mx-auto flex items-center justify-between relative">
      <div>
        <p className="hero-heading font-ClashDisplayMedium relative text-[98px] leading-[98px] flex flex-col">
          <span className="font-ClashDisplayMedium">
            The{' '}
            <span className="relative font-ClashDisplayMedium before:block before:absolute before:bg-[#FFC70F] before:h-[16px] before:w-full before:bottom-[8px] before:right-0 before:z-[-1]">
              one-stop
            </span>
            shop
          </span>
          <span className="font-ClashDisplayMedium">
            with{' '}
            <span className="relative text-white font-ClashDisplayMedium before:block before:absolute before:bg-[#000000] before:h-[85px] before:w-full before:bottom-[8px] before:right-0 before:z-[-1]">
              everything
            </span>
          </span>

          <span>
            <span className="relative font-ClashDisplayMedium before:block before:absolute before:bg-[#FFC70F] before:h-[16px] before:w-full before:bottom-[8px] before:right-0 before:z-[-1]">
              you
            </span>{' '}
            <span className="text-white relative font-ClashDisplayMedium before:block before:absolute before:bg-[#000000] before:h-[85px] before:w-full before:bottom-[8px] before:right-0 before:z-[-1]">
              need
            </span>
          </span>
        </p>

        <div>
          <p className="text-[20px] leading-[30px] flex flex-col pt-[20px]">
            <span>Explore selected and chosen items that will improve</span>
            <span>your productivity and help you grow as a developer</span>
            <span>and designer.</span>
          </p>
        </div>
      </div>

      <img
        className="absolute right-[-54px] bottom-[20px]"
        src={guyUsingLaptop}
        alt=""
      />
    </div>
  );
}
