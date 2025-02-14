import Hero from '../assets/images/hero-1.png';

const HeroSection = () => {
  return (
    <section
      className="relative bg-hero_bg overflow-hidden py-16 px-6 md:px-12 lg:px-20 flex flex-col-reverse md:flex-row items-center justify-around max-w-full h-screen"
      aria-label="Hero section for portfolio"
    >
      {/* SEO Heading */}
      <h1 className="sr-only">
        Portfolio of Kaiga Munene - Full-Stack Developer Enthusiast
      </h1>

      {/* Left Content */}
      <div className="text-primary_text_color text-center md:text-left max-w-xl">
        <p className="text-secondary_text_color font-semibold text-lg">
          Hello! 👋
        </p>
        <h2 className="text-2xl sm:text-xl lg:text-4xl font-extrabold text-gray-900 mt-4">
          I’m <span className="text-secondary_text_color">Kaiga Munene</span>,{' '}
          <br />
          Full-stack Developer Enthusiast
        </h2>
        <p className="text-gray-500 mt-4 text-lg">
          Team player, problem solver, and a quick learner. I love building web
          applications that are fast, responsive, and accessible to everyone.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
          <a
            href="#contact"
            className="bg-btn_color text-white font-medium py-3 px-6 rounded-lg shadow hover:bg-secondary_text_color"
            aria-label="Hire Me"
          >
            Hire Me
          </a>
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-secondary_text_color text-secondary_text_color font-medium py-3 px-6 rounded-lg hover:bg-blue-50"
            aria-label="Contact on WhatsApp"
          >
            WhatsApp
          </a>
        </div>
      </div>

      {/* Right Content (Image & Tags) */}
      <div className="relative m-4 md:mt-0 h-full flex items-end">
        <img
          src={Hero}
          alt="Kaiga Munene smiling, Full-Stack Developer Enthusiast"
          className="h-full w-auto object-cover"
        />
      </div>
    </section>
  );
};

export default HeroSection;
