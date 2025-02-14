import Hero from '../assets/images/hero-1.png';

const HeroSection = () => {
  return (
    <section
      className="relative bg-secondary overflow-hidden min-h-screen flex flex-col-reverse md:flex-row items-center justify-around px-6 md:px-12 lg:px-20 py-12"
      aria-label="Hero section for portfolio"
    >
      {/* SEO Heading */}
      <h1 className="sr-only">
        Portfolio of Kaiga Munene - Full-Stack Developer Enthusiast
      </h1>

      {/* Left Content */}
      <div className="text-primary_text_color text-center md:text-left max-w-md md:max-w-lg">
        <p className="text-secondary_text_color font-semibold text-sm sm:text-base">
          Hello! 👋
        </p>
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-extrabold text-gray-900 mt-3 leading-tight">
          I’m <span className="text-secondary_text_color">Kaiga Munene</span>,{' '}
          <br className="hidden md:block" />
          Full-stack Web Developer.
        </h2>
        <p className="text-gray-500 mt-3 text-xs md:text-sm lg:text-lg">
        Team player, problem solver, and a quick learner. <br /> I love building web
        applications that are fast, <br /> responsive, and accessible to everyone.        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start">
          <a
            href="#contact"
            className="bg-btn_color text-white font-medium py-2 sm:py-3 px-4 sm:px-6 rounded-lg shadow hover:bg-secondary_text_color text-xs sm:text-sm md:text-base"
            aria-label="Hire Me"
          >
            Hire Me
          </a>
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-secondary_text_color text-secondary_text_color font-medium py-2 sm:py-3 px-4 sm:px-6 rounded-lg hover:bg-blue-50 text-xs sm:text-sm md:text-base"
            aria-label="Contact on WhatsApp"
          >
            WhatsApp
          </a>
        </div>
      </div>

      {/* Right Content (Image) */}
      <div className="relative flex items-center justify-center w-full md:w-1/2">
        <img
          src={Hero}
          alt="Kaiga Munene smiling, Full-Stack Developer Enthusiast"
          className="w-full max-w-[220px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[400px] h-auto object-contain"
        />
      </div>
    </section>
  );
};

export default HeroSection;
