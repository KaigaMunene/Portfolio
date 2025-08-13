import Hero from '../assets/images/hero-1.webp';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative bg-secondary overflow-hidden min-h-screen flex flex-col-reverse md:flex-row items-center justify-around container-x py-12"
      aria-label="Hero section for portfolio"
    >
      <h1 className="sr-only">
        Portfolio of Kaiga Munene - Full-Stack Developer Enthusiast
      </h1>

      <div className="text-primary_text_color text-center md:text-left max-w-md md:max-w-lg">
        {/* <p className="text-secondary_text_color font-semibold text-sm sm:text-base">
          Hello! 👋,
        </p> */}
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-extrabold text-gray-900 mt-3 leading-tight">
          <span className="text-secondary_text_color">
            Hello! 👋, <br className="hidden md:block" /> I&apos;m Kaiga Munene.
          </span>{' '}
        </h2>
        <p className="text-dark leading-relaxed mt-3 text-xs md:text-sm lg:text-base">
          I&apos;m a Freelance Full-stack Developer based in Nairobi, Kenya.{' '}
          <br />
          I&apos;m passionate about trasforming ideas into scalable, user-focused web applications that make a real impact.
        </p>
        <div className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start">
          <a
            href="mailto:kaigamunene@gmail.com"
            className="bg-btn_color text-white font-medium py-2 sm:py-3 px-4 sm:px-6 rounded-lg shadow hover:bg-secondary_text_color text-xs sm:text-sm md:text-base"
            aria-label="Hire Me"
          >
            Hire Me
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
