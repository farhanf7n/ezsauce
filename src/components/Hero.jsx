function Hero() {
  return (
    <>
      <section className="py-32 w-full">
        <div className="container mx-auto flex flex-col items-center justify-center gap-4 text-center">
          <button
            data-slot="button"
            className="whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive text-secondary-foreground hover:bg-secondary/80 h-9 has-[>svg]:px-3 group flex w-fit items-center justify-center gap-3 rounded-full bg-muted/70 px-5 py-1"
          >
            <span className="size-2.5 rounded-full bg-foreground"></span>
            Flexible Plan customized for you
          </button>
          <h1 className="max-w-3xl font-calSans text-5xl font-medium tracking-tight text-foreground md:text-7xl">
            Blocks Built <br /> With Shadcn &amp; Tailwind.
          </h1>
          <p className="mt-3 max-w-xl text-muted-foreground/80">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum
            animi, ipsam provident optio delectus neque aliquid cumque. Beatae,
            odio!
          </p>
          <div className="mt-8 mb-12 flex gap-4">
            <button
              data-slot="button"
              className="whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-secondary text-secondary-foreground hover:bg-secondary/80 h-9 has-[>svg]:px-3 group flex w-fit items-center justify-center gap-2 rounded-full px-4 py-1 tracking-tight"
            >
              <span>Documentation</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-right size-4 -rotate-45 transition-all ease-out group-hover:ml-3 group-hover:rotate-0"
                aria-hidden="true"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </button>
            <button
              data-slot="button"
              className="whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground hover:bg-primary/90 h-9 has-[>svg]:px-3 group flex w-fit items-center justify-center gap-2 rounded-full px-4 py-1 tracking-tight"
            >
              <span>Get Started</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-right size-4 -rotate-45 transition-all ease-out group-hover:ml-3 group-hover:rotate-0"
                aria-hidden="true"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </button>
          </div>
          <div className="relative mx-auto flex items-center justify-center">
            <div
              className="relative"
              role="region"
              aria-roledescription="carousel"
              data-slot="carousel"
            >
              <div className="overflow-hidden" data-slot="carousel-content">
                <div
                  className="flex ml-0"
                  style={{ transform: 'translate3d(-855.63px, 0px, 0px)' }}
                >
                  <div
                    role="group"
                    aria-roledescription="slide"
                    data-slot="carousel-item"
                    className="min-w-0 shrink-0 grow-0 relative mr-6 flex h-15 basis-1/2 justify-center pl-0 opacity-30 sm:basis-1/4 md:basis-1/3 lg:basis-1/9"
                    style={{ transform: 'translate3d(0px, 0px, 0px)' }}
                  >
                    <div className="flex flex-col items-center justify-center">
                      <img
                        alt="Logo 1"
                        className="h-7 w-auto"
                        src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/astro-wordmark.svg"
                      />
                    </div>
                  </div>
                  <div
                    role="group"
                    aria-roledescription="slide"
                    data-slot="carousel-item"
                    className="min-w-0 shrink-0 grow-0 relative mr-6 flex h-15 basis-1/2 justify-center pl-0 opacity-30 sm:basis-1/4 md:basis-1/3 lg:basis-1/9"
                    style={{ transform: 'translate3d(0px, 0px, 0px)' }}
                  >
                    <div className="flex flex-col items-center justify-center">
                      <img
                        alt="Logo 2"
                        className="h-7 w-auto"
                        src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-1.svg"
                      />
                    </div>
                  </div>
                  <div
                    role="group"
                    aria-roledescription="slide"
                    data-slot="carousel-item"
                    className="min-w-0 shrink-0 grow-0 relative mr-6 flex h-15 basis-1/2 justify-center pl-0 opacity-30 sm:basis-1/4 md:basis-1/3 lg:basis-1/9"
                    style={{ transform: 'translate3d(0px, 0px, 0px)' }}
                  >
                    <div className="flex flex-col items-center justify-center">
                      <img
                        alt="Logo 3"
                        className="h-7 w-auto"
                        src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-2.svg"
                      />
                    </div>
                  </div>
                  <div
                    role="group"
                    aria-roledescription="slide"
                    data-slot="carousel-item"
                    className="min-w-0 shrink-0 grow-0 relative mr-6 flex h-15 basis-1/2 justify-center pl-0 opacity-30 sm:basis-1/4 md:basis-1/3 lg:basis-1/9"
                    style={{ transform: 'translate3d(0px, 0px, 0px)' }}
                  >
                    <div className="flex flex-col items-center justify-center">
                      <img
                        alt="Logo 4"
                        className="h-7 w-auto"
                        src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-3.svg"
                      />
                    </div>
                  </div>
                  <div
                    role="group"
                    aria-roledescription="slide"
                    data-slot="carousel-item"
                    className="min-w-0 shrink-0 grow-0 relative mr-6 flex h-15 basis-1/2 justify-center pl-0 opacity-30 sm:basis-1/4 md:basis-1/3 lg:basis-1/9"
                    style={{ transform: 'translate3d(0px, 0px, 0px)' }}
                  >
                    <div className="flex flex-col items-center justify-center">
                      <img
                        alt="Logo 5"
                        className="h-7 w-auto"
                        src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-4.svg"
                      />
                    </div>
                  </div>
                  <div
                    role="group"
                    aria-roledescription="slide"
                    data-slot="carousel-item"
                    className="min-w-0 shrink-0 grow-0 relative mr-6 flex h-15 basis-1/2 justify-center pl-0 opacity-30 sm:basis-1/4 md:basis-1/3 lg:basis-1/9"
                    style={{ transform: 'translate3d(0px, 0px, 0px)' }}
                  >
                    <div className="flex flex-col items-center justify-center">
                      <img
                        alt="Logo 6"
                        className="h-5 w-auto"
                        src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-5.svg"
                      />
                    </div>
                  </div>
                  <div
                    role="group"
                    aria-roledescription="slide"
                    data-slot="carousel-item"
                    className="min-w-0 shrink-0 grow-0 relative mr-6 flex h-15 basis-1/2 justify-center pl-0 opacity-30 sm:basis-1/4 md:basis-1/3 lg:basis-1/9"
                    style={{ transform: 'translate3d(0px, 0px, 0px)' }}
                  >
                    <div className="flex flex-col items-center justify-center">
                      <img
                        alt="Logo 7"
                        className="h-7 w-auto"
                        src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-6.svg"
                      />
                    </div>
                  </div>
                  <div
                    role="group"
                    aria-roledescription="slide"
                    data-slot="carousel-item"
                    className="min-w-0 shrink-0 grow-0 relative mr-6 flex h-15 basis-1/2 justify-center pl-0 opacity-30 sm:basis-1/4 md:basis-1/3 lg:basis-1/9"
                    style={{ transform: 'translate3d(0px, 0px, 0px)' }}
                  >
                    <div className="flex flex-col items-center justify-center">
                      <img
                        alt="Logo 8"
                        className="h-7 w-auto"
                        src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-7.svg"
                      />
                    </div>
                  </div>
                  <div
                    role="group"
                    aria-roledescription="slide"
                    data-slot="carousel-item"
                    className="min-w-0 shrink-0 grow-0 relative mr-6 flex h-15 basis-1/2 justify-center pl-0 opacity-30 sm:basis-1/4 md:basis-1/3 lg:basis-1/9"
                  >
                    <div className="flex flex-col items-center justify-center">
                      <img
                        alt="Logo 1"
                        className="h-7 w-auto"
                        src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/astro-wordmark.svg"
                      />
                    </div>
                  </div>
                  <div
                    role="group"
                    aria-roledescription="slide"
                    data-slot="carousel-item"
                    className="min-w-0 shrink-0 grow-0 relative mr-6 flex h-15 basis-1/2 justify-center pl-0 opacity-30 sm:basis-1/4 md:basis-1/3 lg:basis-1/9"
                  >
                    <div className="flex flex-col items-center justify-center">
                      <img
                        alt="Logo 2"
                        className="h-7 w-auto"
                        src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-1.svg"
                      />
                    </div>
                  </div>
                  <div
                    role="group"
                    aria-roledescription="slide"
                    data-slot="carousel-item"
                    className="min-w-0 shrink-0 grow-0 relative mr-6 flex h-15 basis-1/2 justify-center pl-0 opacity-30 sm:basis-1/4 md:basis-1/3 lg:basis-1/9"
                  >
                    <div className="flex flex-col items-center justify-center">
                      <img
                        alt="Logo 3"
                        className="h-7 w-auto"
                        src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-2.svg"
                      />
                    </div>
                  </div>
                  <div
                    role="group"
                    aria-roledescription="slide"
                    data-slot="carousel-item"
                    className="min-w-0 shrink-0 grow-0 relative mr-6 flex h-15 basis-1/2 justify-center pl-0 opacity-30 sm:basis-1/4 md:basis-1/3 lg:basis-1/9"
                  >
                    <div className="flex flex-col items-center justify-center">
                      <img
                        alt="Logo 4"
                        className="h-7 w-auto"
                        src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-3.svg"
                      />
                    </div>
                  </div>
                  <div
                    role="group"
                    aria-roledescription="slide"
                    data-slot="carousel-item"
                    className="min-w-0 shrink-0 grow-0 relative mr-6 flex h-15 basis-1/2 justify-center pl-0 opacity-30 sm:basis-1/4 md:basis-1/3 lg:basis-1/9"
                  >
                    <div className="flex flex-col items-center justify-center">
                      <img
                        alt="Logo 5"
                        className="h-7 w-auto"
                        src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-4.svg"
                      />
                    </div>
                  </div>
                  <div
                    role="group"
                    aria-roledescription="slide"
                    data-slot="carousel-item"
                    className="min-w-0 shrink-0 grow-0 relative mr-6 flex h-15 basis-1/2 justify-center pl-0 opacity-30 sm:basis-1/4 md:basis-1/3 lg:basis-1/9"
                  >
                    <div className="flex flex-col items-center justify-center">
                      <img
                        alt="Logo 6"
                        className="h-5 w-auto"
                        src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-5.svg"
                      />
                    </div>
                  </div>
                  <div
                    role="group"
                    aria-roledescription="slide"
                    data-slot="carousel-item"
                    className="min-w-0 shrink-0 grow-0 relative mr-6 flex h-15 basis-1/2 justify-center pl-0 opacity-30 sm:basis-1/4 md:basis-1/3 lg:basis-1/9"
                  >
                    <div className="flex flex-col items-center justify-center">
                      <img
                        alt="Logo 7"
                        className="h-7 w-auto"
                        src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-6.svg"
                      />
                    </div>
                  </div>
                  <div
                    role="group"
                    aria-roledescription="slide"
                    data-slot="carousel-item"
                    className="min-w-0 shrink-0 grow-0 relative mr-6 flex h-15 basis-1/2 justify-center pl-0 opacity-30 sm:basis-1/4 md:basis-1/3 lg:basis-1/9"
                  >
                    <div className="flex flex-col items-center justify-center">
                      <img
                        alt="Logo 8"
                        className="h-7 w-auto"
                        src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-7.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-t o-r absolute inset-y-0 left-0 w-32 from-background to-transparent"></div>
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent"></div>
          </div>
          <div className="relative mx-auto -mt-12 flex items-center justify-center">
            <div
              className="relative"
              role="region"
              aria-roledescription="carousel"
              data-slot="carousel"
            >
              <div className="overflow-hidden" data-slot="carousel-content">
                <div
                  className="flex -ml-4"
                  style={{ transform: 'translate3d(-742.11px, 0px, 0px)' }}
                >
                  <div
                    role="group"
                    aria-roledescription="slide"
                    data-slot="carousel-item"
                    className="min-w-0 shrink-0 grow-0 pl-4 relative flex basis-1/2 translate-y-18 cursor-grab justify-center active:cursor-grabbing sm:basis-1/4 md:basis-1/3 lg:basis-1/5"
                    style={{ transform: 'translate3d(0px, 0px, 0px)' }}
                  >
                    <div className="easeOut mt-auto w-full overflow-hidden rounded-t-3xl border transition-all hover:-translate-y-18">
                      <img
                        alt="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/random14.jpeg"
                        className="h-full w-full object-cover"
                        src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/random14.jpeg"
                      />
                    </div>
                  </div>
                  <div
                    role="group"
                    aria-roledescription="slide"
                    data-slot="carousel-item"
                    className="min-w-0 shrink-0 grow-0 pl-4 relative flex basis-1/2 translate-y-18 cursor-grab justify-center active:cursor-grabbing sm:basis-1/4 md:basis-1/3 lg:basis-1/5"
                    style={{ transform: 'translate3d(0px, 0px, 0px)' }}
                  >
                    <div className="easeOut mt-auto w-full overflow-hidden rounded-t-3xl border transition-all hover:-translate-y-18">
                      <img
                        alt="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw9.jpeg"
                        className="h-full w-full object-cover"
                        src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw9.jpeg"
                      />
                    </div>
                  </div>
                  <div
                    role="group"
                    aria-roledescription="slide"
                    data-slot="carousel-item"
                    className="min-w-0 shrink-0 grow-0 pl-4 relative flex basis-1/2 translate-y-18 cursor-grab justify-center active:cursor-grabbing sm:basis-1/4 md:basis-1/3 lg:basis-1/5"
                    style={{ transform: 'translate3d(0px, 0px, 0px)' }}
                  >
                    <div className="easeOut mt-auto w-full overflow-hidden rounded-t-3xl border transition-all hover:-translate-y-18">
                      <img
                        alt="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/random11.jpeg"
                        className="h-full w-full object-cover"
                        src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/random11.jpeg"
                      />
                    </div>
                  </div>
                  <div
                    role="group"
                    aria-roledescription="slide"
                    data-slot="carousel-item"
                    className="min-w-0 shrink-0 grow-0 pl-4 relative flex basis-1/2 translate-y-18 cursor-grab justify-center active:cursor-grabbing sm:basis-1/4 md:basis-1/3 lg:basis-1/5"
                    style={{ transform: 'translate3d(0px, 0px, 0px)' }}
                  >
                    <div className="easeOut mt-auto w-full overflow-hidden rounded-t-3xl border transition-all hover:-translate-y-18">
                      <img
                        alt="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/landscape5.jpeg"
                        className="h-full w-full object-cover"
                        src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/landscape5.jpeg"
                      />
                    </div>
                  </div>
                  <div
                    role="group"
                    aria-roledescription="slide"
                    data-slot="carousel-item"
                    className="min-w-0 shrink-0 grow-0 pl-4 relative flex basis-1/2 translate-y-18 cursor-grab justify-center active:cursor-grabbing sm:basis-1/4 md:basis-1/3 lg:basis-1/5"
                    style={{ transform: 'translate3d(0px, 0px, 0px)' }}
                  >
                    <div className="easeOut mt-auto w-full overflow-hidden rounded-t-3xl border transition-all hover:-translate-y-18">
                      <img
                        alt="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/random15.jpeg"
                        className="h-full w-full object-cover"
                        src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/random15.jpeg"
                      />
                    </div>
                  </div>
                  <div
                    role="group"
                    aria-roledescription="slide"
                    data-slot="carousel-item"
                    className="min-w-0 shrink-0 grow-0 pl-4 relative flex basis-1/2 translate-y-18 cursor-grab justify-center active:cursor-grabbing sm:basis-1/4 md:basis-1/3 lg:basis-1/5"
                  >
                    <div className="easeOut mt-auto w-full overflow-hidden rounded-t-3xl border transition-all hover:-translate-y-18">
                      <img
                        alt="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw4.jpeg"
                        className="h-full w-full object-cover"
                        src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw4.jpeg"
                      />
                    </div>
                  </div>
                  <div
                    role="group"
                    aria-roledescription="slide"
                    data-slot="carousel-item"
                    className="min-w-0 shrink-0 grow-0 pl-4 relative flex basis-1/2 translate-y-18 cursor-grab justify-center active:cursor-grabbing sm:basis-1/4 md:basis-1/3 lg:basis-1/5"
                  >
                    <div className="easeOut mt-auto w-full overflow-hidden rounded-t-3xl border transition-all hover:-translate-y-18">
                      <img
                        alt="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw5.jpeg"
                        className="h-full w-full object-cover"
                        src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw5.jpeg"
                      />
                    </div>
                  </div>
                  <div
                    role="group"
                    aria-roledescription="slide"
                    data-slot="carousel-item"
                    className="min-w-0 shrink-0 grow-0 pl-4 relative flex basis-1/2 translate-y-18 cursor-grab justify-center active:cursor-grabbing sm:basis-1/4 md:basis-1/3 lg:basis-1/5"
                  >
                    <div className="easeOut mt-auto w-full overflow-hidden rounded-t-3xl border transition-all hover:-translate-y-18">
                      <img
                        alt="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw6.jpeg"
                        className="h-full w-full object-cover"
                        src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw6.jpeg"
                      />
                    </div>
                  </div>
                  <div
                    role="group"
                    aria-roledescription="slide"
                    data-slot="carousel-item"
                    className="min-w-0 shrink-0 grow-0 pl-4 relative flex basis-1/2 translate-y-18 cursor-grab justify-center active:cursor-grabbing sm:basis-1/4 md:basis-1/3 lg:basis-1/5"
                  >
                    <div className="easeOut mt-auto w-full overflow-hidden rounded-t-3xl border transition-all hover:-translate-y-18">
                      <img
                        alt="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw7.jpeg"
                        className="h-full w-full object-cover"
                        src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw7.jpeg"
                      />
                    </div>
                  </div>
                  <div
                    role="group"
                    aria-roledescription="slide"
                    data-slot="carousel-item"
                    className="min-w-0 shrink-0 grow-0 pl-4 relative flex basis-1/2 translate-y-18 cursor-grab justify-center active:cursor-grabbing sm:basis-1/4 md:basis-1/3 lg:basis-1/5"
                  >
                    <div className="easeOut mt-auto w-full overflow-hidden rounded-t-3xl border transition-all hover:-translate-y-18">
                      <img
                        alt="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw8.jpeg"
                        className="h-full w-full object-cover"
                        src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw8.jpeg"
                      />
                    </div>
                  </div>
                  <div
                    role="group"
                    aria-roledescription="slide"
                    data-slot="carousel-item"
                    className="min-w-0 shrink-0 grow-0 pl-4 relative flex basis-1/2 translate-y-18 cursor-grab justify-center active:cursor-grabbing sm:basis-1/4 md:basis-1/3 lg:basis-1/5"
                  >
                    <div className="easeOut mt-auto w-full overflow-hidden rounded-t-3xl border transition-all hover:-translate-y-18">
                      <img
                        alt="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/person1.jpeg"
                        className="h-full w-full object-cover"
                        src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/person1.jpeg"
                      />
                    </div>
                  </div>
                  <div
                    role="group"
                    aria-roledescription="slide"
                    data-slot="carousel-item"
                    className="min-w-0 shrink-0 grow-0 pl-4 relative flex basis-1/2 translate-y-18 cursor-grab justify-center active:cursor-grabbing sm:basis-1/4 md:basis-1/3 lg:basis-1/5"
                  >
                    <div className="easeOut mt-auto w-full overflow-hidden rounded-t-3xl border transition-all hover:-translate-y-18">
                      <img
                        alt="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/person2.jpeg"
                        className="h-full w-full object-cover"
                        src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/person2.jpeg"
                      />
                    </div>
                  </div>
                  <div
                    role="group"
                    aria-roledescription="slide"
                    data-slot="carousel-item"
                    className="min-w-0 shrink-0 grow-0 pl-4 relative flex basis-1/2 translate-y-18 cursor-grab justify-center active:cursor-grabbing sm:basis-1/4 md:basis-1/3 lg:basis-1/5"
                  >
                    <div className="easeOut mt-auto w-full overflow-hidden rounded-t-3xl border transition-all hover:-translate-y-18">
                      <img
                        alt="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/person3.jpeg"
                        className="h-full w-full object-cover"
                        src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/person3.jpeg"
                      />
                    </div>
                  </div>
                  <div
                    role="group"
                    aria-roledescription="slide"
                    data-slot="carousel-item"
                    className="min-w-0 shrink-0 grow-0 pl-4 relative flex basis-1/2 translate-y-18 cursor-grab justify-center active:cursor-grabbing sm:basis-1/4 md:basis-1/3 lg:basis-1/5"
                  >
                    <div className="easeOut mt-auto w-full overflow-hidden rounded-t-3xl border transition-all hover:-translate-y-18">
                      <img
                        alt="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/random1.jpeg"
                        className="h-full w-full object-cover"
                        src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/random1.jpeg"
                      />
                    </div>
                  </div>
                  <div
                    role="group"
                    aria-roledescription="slide"
                    data-slot="carousel-item"
                    className="min-w-0 shrink-0 grow-0 pl-4 relative flex basis-1/2 translate-y-18 cursor-grab justify-center active:cursor-grabbing sm:basis-1/4 md:basis-1/3 lg:basis-1/5"
                  >
                    <div className="easeOut mt-auto w-full overflow-hidden rounded-t-3xl border transition-all hover:-translate-y-18">
                      <img
                        alt="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/random11.jpeg"
                        className="h-full w-full object-cover"
                        src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/random11.jpeg"
                      />
                    </div>
                  </div>
                  <div
                    role="group"
                    aria-roledescription="slide"
                    data-slot="carousel-item"
                    className="min-w-0 shrink-0 grow-0 pl-4 relative flex basis-1/2 translate-y-18 cursor-grab justify-center active:cursor-grabbing sm:basis-1/4 md:basis-1/3 lg:basis-1/5"
                  >
                    <div className="easeOut mt-auto w-full overflow-hidden rounded-t-3xl border transition-all hover:-translate-y-18">
                      <img
                        alt="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw1.jpeg"
                        className="h-full w-full object-cover"
                        src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw1.jpeg"
                      />
                    </div>
                  </div>
                  <div
                    role="group"
                    aria-roledescription="slide"
                    data-slot="carousel-item"
                    className="min-w-0 shrink-0 grow-0 pl-4 relative flex basis-1/2 translate-y-18 cursor-grab justify-center active:cursor-grabbing sm:basis-1/4 md:basis-1/3 lg:basis-1/5"
                  >
                    <div className="easeOut mt-auto w-full overflow-hidden rounded-t-3xl border transition-all hover:-translate-y-18">
                      <img
                        alt="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/random3.jpeg"
                        className="h-full w-full object-cover"
                        src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/random3.jpeg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
