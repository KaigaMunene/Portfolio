import PropTypes from 'prop-types';

const ProjectCard = ({ title, category, description, github, live, image }) => {
  return (
    <div className="min-w-[300px] sm:min-w-[350px] md:min-w-[400px] bg-white rounded-xl shadow-md p-4 flex flex-col justify-between hover:shadow-lg transition duration-300">
      {image && (
        <div className="w-full h-72 rounded-lg mb-4 overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      )}

      <p className="text-sm text-purple-600 font-medium">{category}</p>
      <h3 className="text-xl font-semibold text-gray-800 mt-1">{title}</h3>
      <p className="text-sm text-gray-600 mt-2 flex-1">{description}</p>

      <div className="mt-4 flex justify-between items-center">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-900 border text-white text-sm px-4 py-2 rounded-lg hover:bg-secondary hover:text-black transition"
        >
          GitHub
        </a>
        <a
          href={live}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-secondary_text_color border text-white text-sm px-4 py-2 rounded-lg hover:bg-transparent hover:text-black transition"
        >
          Live Preview
        </a>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  live: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default ProjectCard;
