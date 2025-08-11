import img from '../assets/images/hero-1.webp';

const About = () => {
  return (
    <section id="about me" className="bg-primary text-white py-16 container-x">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        <div className="relative flex justify-center">
          <div className="border-4 border-r-0 border-t-0 border-secondary_text_color p-4">
            <img
              src={img}
              alt="Freelance Web Designer"
              className="w-full h-auto max-w-xs md:max-w-sm lg:max-w-md rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Text Content Section */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold text-primary_text_color mb-4">
            About Me
          </h2>
          <p className="text-primary_text_color leading-relaxed mb-4">
            I&apos;m a passionate Full-Stack Software developer with 2+ years of experience
            creating websites and applications that are fast, easy to use, and
            visually appealing. I work with tools like React.js, Django, and
            PostgreSQL to bring ideas to life—from simple e-commerce sites to
            custom booking systems. I love learning new technologies, solving
            challenges, and building projects that make a real impact.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <button className="border border-btn_color text-btn_color px-6 py-2 rounded-lg font-semibold hover:bg-secondary_text_color hover:text-primary hover:border-secondary_text_color transition duration-300">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
