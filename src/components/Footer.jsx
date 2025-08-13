import { IoLogoInstagram } from 'react-icons/io';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-secondary text-dark py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-center space-y-4 md:space-y-0">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} All rights reserved by{' '}
          <span className="font-semibold">Kaiga</span>.
        </p>

        <div className="flex items-center space-x-4">
          <span className="text-sm font-medium">Follow on:</span>
          <a
            href="https://linkedin.com/in/kaiga-munene"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors"
          >
            <FaLinkedin className="h-6 w-6" />
          </a>

          <a
            href="https://github.com/KaigaMunene"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-800 transition-colors"
          >
            <FaGithub className="h-6 w-6" />
          </a>

          <a
            href="https://instagram.com/Kaiga_Munene"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-700 transition-colors"
          >
            <IoLogoInstagram className="h-6 w-6" />
          </a>
          <a
            href="https://twitter.com/Kaiga_treymylo"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors"
          >
            <FaSquareXTwitter className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
