import Hero from '../assets/images/hero-1.png';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

const HeroSection = () => {
  return (
    <section
      className="relative bg-white overflow-hidden py-16 px-6 md:px-12 lg:px-20 flex flex-col-reverse md:flex-row items-center justify-around max-w-full h-screen"
      aria-label="Hero section for portfolio"
    >
      {/* SEO Heading */}
      <h1 className="sr-only">
        Portfolio of Kaiga Munene - Full-Stack Developer Enthusiast
      </h1>

      {/* Left Content */}
      <div className="text-center md:text-left max-w-xl">
        <p className="text-blue-600 font-semibold text-lg">Hello!</p>
        <h2 className="text-2xl sm:text-xl lg:text-4xl font-extrabold text-gray-900 mt-4">
          I’m <span className="text-blue-500">Kaiga Munene</span>, <br />
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
            className="bg-blue-600 text-white font-medium py-3 px-6 rounded-lg shadow hover:bg-blue-700"
            aria-label="Hire Me"
          >
            Hire Me
          </a>
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-blue-600 text-blue-600 font-medium py-3 px-6 rounded-lg hover:bg-blue-50"
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

      {/* Social Icons */}
      <div className="absolute bottom-4 left-6 md:left-12 flex gap-4">
        <a
          href="https://linkedin.com/in/kaiga-munene"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-gray-800 hover:text-blue-700 border border-solid border-gray-800 rounded-full p-2"
        >
          <FaLinkedin className="text-3xl" />
        </a>

        <a
          href="https://github.com/KaigaMunene"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-gray-800 hover:text-gray-700 border border-solid border-gray-800 rounded-full p-2"
        >
          <FaGithub className="text-3xl" />
        </a>

        <a
          href="https://twitter.com/KaigaMunene"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="text-gray-800 hover:text-blue-600 border border-solid border-gray-800 rounded-full p-2"
        >
          <FaSquareXTwitter className="text-3xl" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
