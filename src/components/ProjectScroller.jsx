import { useRef } from 'react';
import ProjectCard from './ProjectCard';
import { GoArrowLeft } from 'react-icons/go';
import { GoArrowRight } from 'react-icons/go';
const data = [
  {
    title: 'AI Strategy Guide',
    category: 'E-book',
    description: 'Help your organization achieve its goals with this AI guide.',
    github: 'https://github.com/your-ai-project',
    live: 'https://your-ai-project-live.com',
    image: 'https://source.unsplash.com/featured/?ai,business',
  },
  {
    title: 'Microsoft Cloud Blog',
    category: 'Blog',
    description: 'Stay up to date on the latest Microsoft Cloud news.',
    github: 'https://github.com/cloud-blog',
    live: 'https://cloud-blog.com',
    image: 'https://source.unsplash.com/featured/?webinar,office',
  },
  {
    title: 'AI Transformation Webinar',
    category: 'Webinar',
    description: 'Build a future-ready business with Microsoft Copilot.',
    github: 'https://github.com/webinar-ai',
    live: 'https://webinar-ai.com',
    image: 'https://source.unsplash.com/featured/?webinar,office',
  },
  {
    title: 'Cybersecurity Progress',
    category: 'Blog',
    description: 'Explore our progress with Secure Future Initiative (SFI).',
    github: 'https://github.com/sfi-progress',
    live: 'https://sfi-progress.com',
    image: 'https://source.unsplash.com/featured/?cybersecurity,cloud',
  },
];

const ProjectScroller = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (container) {
      container.scrollBy({
        left: direction === 'left' ? -400 : 400,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-12 bg-secondary relative">
      <div className="max-w-screen-lg mx-auto px-4 sm:px-6 flex flex-col justify-between">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Projects</h2>

        <div className="relative">
          {/* Scrollable container */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-6 pb-4 scroll-smooth scrollbar-hide"
            style={{ scrollBehavior: 'smooth' }}
          >
            {data.map((item, idx) => (
              <ProjectCard key={idx} {...item} />
            ))}
          </div>
        </div>
        <div className="mt-8 space-x-1">
          {/* Left arrow */}
          <button
            onClick={() => scroll('left')}
            className=" z-10 -left-6 top-1/2 transform -translate-y-1/2 bg-white border border-gray-200 rounded-full p-2 shadow hover:border-primary_text_color text-gray-400 hover:text-primary_text_color"
          >
            <GoArrowLeft className="w-5 h-5" />
          </button>

          {/* Right arrow */}
          <button
            onClick={() => scroll('right')}
            className="z-10 -right-6 top-1/2 transform -translate-y-1/2 bg-white border border-gray-300 rounded-full p-2 shadow hover:border-primary_text_color transition duration-200 text-gray-400 hover:text-primary_text_color"
          >
            <GoArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectScroller;
