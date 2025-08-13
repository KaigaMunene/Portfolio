import {
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaDatabase,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaFigma,
} from 'react-icons/fa';
import {
  SiDjango,
  SiFlask,
  SiPostgresql,
  SiTailwindcss,
  SiPostman,
} from 'react-icons/si';
import { TbBrandVscode } from 'react-icons/tb';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="w-full bg-white text-black flex flex-col items-center justify-center py-8 sm:py-12 px-4"
    >
      {/* Section Title */}
      <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-primary_text_color mb-8 sm:mb-12 text-center">
        My Skills
      </h3>

      {/* Skills Grid */}
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
        {/* Languages */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="bg-secondary shadow-lg rounded-2xl p-4 sm:p-5 md:p-6 hover:shadow-xl transition-shadow duration-300"
        >
          <h4 className="text-base sm:text-lg md:text-xl font-bold mb-3 sm:mb-4 border-b-2 pb-2 border-primary_text_color text-center">
            Languages
          </h4>
          <ul className="space-y-2 sm:space-y-3 text-center">
            {[
              {
                icon: <FaPython className="text-yellow-400" />,
                name: 'Python',
              },
              { icon: <FaHtml5 className="text-orange-600" />, name: 'HTML' },
              { icon: <FaCss3Alt className="text-blue-600" />, name: 'CSS' },
              {
                icon: <FaJs className="text-yellow-500" />,
                name: 'JavaScript',
              },
              { icon: <FaDatabase className="text-slate-600" />, name: 'SQL' },
            ].map(({ icon, name }) => (
              <motion.li
                key={name}
                variants={item}
                className="flex items-center gap-2 justify-center text-xs sm:text-sm md:text-base hover:scale-105 transition-transform"
                title={name}
              >
                {icon} {name}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Frameworks */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="bg-secondary shadow-lg rounded-2xl p-4 sm:p-5 md:p-6 hover:shadow-xl transition-shadow duration-300"
        >
          <h4 className="text-base sm:text-lg md:text-xl font-bold mb-3 sm:mb-4 border-b-2 pb-2 border-primary_text_color text-center">
            Frameworks
          </h4>
          <ul className="space-y-2 sm:space-y-3 text-center">
            {[
              { icon: <FaReact className="text-cyan-400" />, name: 'React' },
              {
                icon: <FaNodeJs className="text-green-600" />,
                name: 'Node.js',
              },
              { icon: <SiDjango className="text-green-700" />, name: 'Django' },
              { icon: <SiFlask />, name: 'Flask' },
              {
                icon: <SiPostgresql className="text-blue-800" />,
                name: 'PostgreSQL',
              },
              {
                icon: <SiTailwindcss className="text-sky-400" />,
                name: 'Tailwind CSS',
              },
            ].map(({ icon, name }) => (
              <motion.li
                key={name}
                variants={item}
                className="flex items-center gap-2 justify-center text-xs sm:text-sm md:text-base hover:scale-105 transition-transform"
                title={name}
              >
                {icon} {name}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Tools */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="bg-secondary shadow-lg rounded-2xl p-4 sm:p-5 md:p-6 hover:shadow-xl transition-shadow duration-300"
        >
          <h4 className="text-base sm:text-lg md:text-xl font-bold mb-3 sm:mb-4 border-b-2 pb-2 border-primary_text_color text-center">
            Tools
          </h4>
          <ul className="space-y-2 sm:space-y-3 text-center">
            {[
              { icon: <FaGitAlt className="text-orange-500" />, name: 'Git' },
              { icon: <FaDocker className="text-blue-400" />, name: 'Docker' },
              {
                icon: <SiPostman className="text-orange-600" />,
                name: 'Postman',
              },
              {
                icon: <TbBrandVscode className="text-blue-600" />,
                name: 'VS Code',
              },
              { icon: <FaFigma className="text-pink-500" />, name: 'Figma' },
            ].map(({ icon, name }) => (
              <motion.li
                key={name}
                variants={item}
                className="flex items-center gap-2 justify-center text-xs sm:text-sm md:text-base hover:scale-105 transition-transform"
                title={name}
              >
                {icon} {name}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
