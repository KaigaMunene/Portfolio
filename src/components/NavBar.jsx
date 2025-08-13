import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => setIsMenuOpen(false);

  return (
    <nav
      className={`fixed w-full z-10 transition duration-300 ${isScrolled ? 'bg-secondary shadow-md' : 'bg-primary'}`}
    >
      <div className="container text-primary_text_color mx-auto px-4 py-3 flex justify-between items-center">
        {/* Left: Logo */}
        <div>
          <Link
            to="home"
            smooth
            duration={500}
            className="cursor-pointer"
            onClick={handleLinkClick}
          >
            <p className="font-bold text-2xl text-red-600">Kaiga.</p>
          </Link>
        </div>

        {/* Center: Nav Links */}
        <div className="hidden md:flex space-x-8">
          {['Home', 'About Me', 'Resume', 'Skills', 'Projects', 'Contact'].map(
            (item) => (
              <Link
                key={item}
                to={item.toLowerCase()}
                smooth
                duration={500}
                className="text-black hover:text-secondary_text_color hover:underline cursor-pointer"
                onClick={handleLinkClick}
              >
                {item}
              </Link>
            ),
          )}
        </div>

        {/* Social icons */}
        <div className="hidden md:flex space-x-4">
          <a
            href="https://linkedin.com/in/kaiga-munene"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="h-6 w-6" />
          </a>

          <a
            href="https://github.com/KaigaMunene"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-800 transition-colors"
            aria-label="GitHub"
          >
            <FaGithub className="h-6 w-6" />
          </a>

          <a
            href="https://twitter.com/Kaiga_treymylo"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors"
            aria-label="Twitter"
          >
            <FaSquareXTwitter className="h-6 w-6" />
          </a>

          <a
            href="https://instagram.com/Kaiga_Munene"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-700 transition-colors"
          >
            <FaInstagram className="h-6 w-6" />
          </a>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <button
          className="md:hidden text-gray-700 text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? '✖' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md flex flex-col items-center py-4 space-y-4">
          {['Home', 'About', 'Projects', 'Resume', 'Skills', 'Contact'].map(
            (item) => (
              <Link
                key={item}
                to={item.toLowerCase()}
                smooth
                duration={500}
                className="text-gray-700 hover:text-secondary_text_color cursor-pointer"
                onClick={handleLinkClick}
              >
                {item}
              </Link>
            ),
          )}

          {/* Social Icons */}
          <div className="flex space-x-4">
            <a
              href="https://linkedin.com/in/kaiga-munene"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="h-6 w-6" />
            </a>

            <a
              href="https://github.com/KaigaMunene"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-800 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="h-6 w-6" />
            </a>

            <a
              href="https://twitter.com/Kaiga_treymylo"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors"
              aria-label="Twitter"
            >
              <FaSquareXTwitter className="h-6 w-6" />
            </a>

            <a
              href="https://instagram.com/Kaiga_Munene"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-700 transition-colors"
            >
              <FaInstagram className="h-6 w-6" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
