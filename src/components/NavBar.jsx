import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

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
      className={`fixed w-full z-10 transition duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-gray-200'}`}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
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
          {['Home', 'About', 'Projects', 'Experience', 'Blog'].map((item) => (
            <Link
              key={item}
              to={item.toLowerCase()}
              smooth
              duration={500}
              className="text-black hover:text-purple-600 cursor-pointer"
              onClick={handleLinkClick}
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Right: Social Icons */}
        <div className="hidden md:flex space-x-4">
          <a
            href="https://linkedin.com/in/kaiga-munene"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black text-base hover:text-blue-700"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/KaigaMunene"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black text-base hover:text-gray-700"
          >
            <FaGithub />
          </a>
          <a
            href="https://twitter.com/KaigaMunene"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black text-base hover:text-blue-600"
          >
            <FaSquareXTwitter />
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
          {['Home', 'About', 'Projects', 'Experience', 'Blog', 'Contact'].map(
            (item) => (
              <Link
                key={item}
                to={item.toLowerCase()}
                smooth
                duration={500}
                className="text-gray-700 hover:text-purple-600 cursor-pointer"
                onClick={handleLinkClick}
              >
                {item}
              </Link>
            ),
          )}

          {/* Mobile Social Links */}
          <div className="flex space-x-4 mt-4">
            <a
              href="https://linkedin.com/in/kaiga-munene"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black text-sm hover:text-blue-700"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/KaigaMunene"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black text-sm hover:text-gray-700"
            >
              <FaGithub />
            </a>
            <a
              href="https://twitter.com/KaigaMunene"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black text-sm hover:text-blue-600"
            >
              <FaSquareXTwitter />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
