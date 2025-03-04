import img from '../assets/images/hero-1.png';

const About = () => {
  return (
    <section
      id="about"
      className="bg-primary text-white py-16 px-6 md:px-12 lg:px-24 "
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="text-primary_text_color leading-relaxed mb-6">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <button className="bg-secondary_text_color text-primary px-6 py-2 rounded-lg font-semibold hover:bg-btn_color transition duration-300">
              Hire Me
            </button>
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
