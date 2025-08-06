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
} from "react-icons/fa";
import {
  SiDjango,
  SiFlask,
  SiPostgresql,
  SiTailwindcss,
  SiPostman,
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";

import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const Skills = () => {
  return (
    <div className="mt-12 container-x" id="skills">
      <h3 className="text-2xl font-semibold text-primary_text_color mb-8 text-center">
        My Skills
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-black">
        {/* Languages */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h4 className="text-xl font-bold mb-4 border-b-2 pb-2 border-primary_text_color text-center">
            Languages
          </h4>
          <ul className="space-y-3 text-center">
            <motion.li
              variants={item}
              className="flex items-center gap-2 justify-center"
              title="Python"
            >
              <FaPython className="text-yellow-400" /> Python
            </motion.li>
            <motion.li
              variants={item}
              className="flex items-center gap-2 justify-center"
              title="HTML5"
            >
              <FaHtml5 className="text-orange-600" /> HTML
            </motion.li>
            <motion.li
              variants={item}
              className="flex items-center gap-2 justify-center"
              title="CSS3"
            >
              <FaCss3Alt className="text-blue-600" /> CSS
            </motion.li>
            <motion.li
              variants={item}
              className="flex items-center gap-2 justify-center"
              title="JavaScript"
            >
              <FaJs className="text-yellow-500" /> JavaScript
            </motion.li>
            <motion.li
              variants={item}
              className="flex items-center gap-2 justify-center"
              title="SQL"
            >
              <FaDatabase className="text-slate-600" /> SQL
            </motion.li>
          </ul>
        </motion.div>

        {/* Frameworks */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h4 className="text-xl font-bold mb-4 border-b-2 pb-2 border-primary_text_color text-center">
            Frameworks
          </h4>
          <ul className="space-y-3 text-center">
            <motion.li
              variants={item}
              className="flex items-center gap-2 justify-center"
              title="React"
            >
              <FaReact className="text-cyan-400" /> React
            </motion.li>
            <motion.li
              variants={item}
              className="flex items-center gap-2 justify-center"
              title="Node.js"
            >
              <FaNodeJs className="text-green-600" /> Node.js
            </motion.li>
            <motion.li
              variants={item}
              className="flex items-center gap-2 justify-center"
              title="Django"
            >
              <SiDjango className="text-green-700" /> Django
            </motion.li>
            <motion.li
              variants={item}
              className="flex items-center gap-2 justify-center"
              title="Flask"
            >
              <SiFlask /> Flask
            </motion.li>
            <motion.li
              variants={item}
              className="flex items-center gap-2 justify-center"
              title="PostgreSQL"
            >
              <SiPostgresql className="text-blue-800" /> PostgreSQL
            </motion.li>
            <motion.li
              variants={item}
              className="flex items-center gap-2 justify-center"
              title="Tailwind CSS"
            >
              <SiTailwindcss className="text-sky-400" /> Tailwind CSS
            </motion.li>
          </ul>
        </motion.div>

        {/* Tools */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h4 className="text-xl font-bold mb-4 border-b-2 pb-2 border-primary_text_color text-center">
            Tools
          </h4>
          <ul className="space-y-3 text-center">
            <motion.li
              variants={item}
              className="flex items-center gap-2 justify-center"
              title="Git"
            >
              <FaGitAlt className="text-orange-500" /> Git
            </motion.li>
            <motion.li
              variants={item}
              className="flex items-center gap-2 justify-center"
              title="Docker"
            >
              <FaDocker className="text-blue-400" /> Docker
            </motion.li>
            <motion.li
              variants={item}
              className="flex items-center gap-2 justify-center"
              title="Postman"
            >
              <SiPostman className="text-orange-600" /> Postman
            </motion.li>
            <motion.li
              variants={item}
              className="flex items-center gap-2 justify-center"
              title="VS Code"
            >
              <TbBrandVscode className="text-blue-600" /> VS Code
            </motion.li>
            <motion.li
              variants={item}
              className="flex items-center gap-2 justify-center"
              title="Figma"
            >
              <FaFigma className="text-pink-500" /> Figma
            </motion.li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
