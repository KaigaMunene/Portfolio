import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import img from "../assets/images/broken-pad.jpg";

const projects = [
  {
    id: 1,
    title: 'E-commerce Website',
    image: img,
    description:
      'A modern e-commerce site with a smooth UI and secure payments.',
    github: 'https://github.com/yourrepo',
    live: 'https://yourwebsite.com',
  },
  {
    id: 2,
    title: 'Portfolio Website',
    image: img,
    description: 'A personal portfolio showcasing projects and skills.',
    github: 'https://github.com/yourrepo',
    live: 'https://yourwebsite.com',
  },
  {
    id: 3,
    title: 'Task Manager',
    image: img,
    description: 'A task management app with drag-and-drop features.',
    github: 'https://github.com/yourrepo',
    live: 'https://yourwebsite.com',
  },
  {
    id: 4,
    title: 'Weather App',
    image: img,
    description: 'A real-time weather forecasting app.',
    github: 'https://github.com/yourrepo',
    live: 'https://yourwebsite.com',
  },
];

const ProjectsSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-secondary py-12">
      <div className="max-w-6xl w-full px-6">
        <h2 className="text-3xl font-bold text-primary_text_color mb-10 text-center">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white shadow-lg rounded-xl overflow-hidden transform transition duration-300 hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-80 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-gray-600 text-sm mt-2">
                  {project.description}
                </p>
                <div className="flex justify-between mt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-gray-800 hover:text-black transition"
                  >
                    <FaGithub />
                    GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-secondary_text_color hover:text-blue-800 transition"
                  >
                    Preview
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
