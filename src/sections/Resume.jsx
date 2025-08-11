const Resume = () => {
  return (
    <section
      id="resume"
      className="w-full min-h-screen bg-secondary container-x flex justify-center items-center"
    >
      <div className="max-w-7xl w-full bg-white rounded-2xl shadow-lg p-4 md:p-8">
        {/* Section Header */}
        <h3 className="text-2xl md:text-3xl font-semibold text-primary_text_color mb-10 text-center">
          My Resume
        </h3>

        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Education */}
          <div className="flex-1">
            <h2 className="text-lg md:text-xl font-bold mb-4 border-b-2 pb-2 border-primary_text_color">
              Education
            </h2>
            <ul className="space-y-4">
              <li className="border border-gray-300 p-4 rounded-lg hover:shadow-md transition-shadow duration-200">
                <p className="text-base md:text-lg font-medium">
                  Jomo Kenyatta University of Agriculture and Technology
                </p>
                <p className="text-sm md:text-base italic">
                  Bachelor of Business Information Technology
                </p>
                <p className="text-xs md:text-sm font-normal text-gray-600">
                  2015 - 2020
                </p>
              </li>
            </ul>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px bg-gray-300" />

          {/* Experience */}
          <div className="flex-1">
            <h2 className="text-lg md:text-xl font-bold mb-4 border-b-2 pb-2 border-primary_text_color">
              Experience
            </h2>
            <ul className="space-y-6">
              <li className="border border-gray-300 p-4 rounded-lg hover:shadow-md transition-shadow duration-200">
                <p className="font-bold text-sm md:text-base">
                  Jan 2024 - Present
                </p>
                <p className="text-sm md:text-base">Freelance Web Developer</p>
                <p className="text-xs md:text-sm italic text-gray-600">
                  Designed and developed websites for various clients.
                </p>
              </li>
              <li className="border border-gray-300 p-4 rounded-lg hover:shadow-md transition-shadow duration-200">
                <p className="font-bold text-sm md:text-base">
                  Oct 2021 - Oct 2023
                </p>
                <p className="text-sm md:text-base">SkaeHub Technologies</p>
                <p className="text-xs md:text-sm italic text-gray-600">
                  Full-stack Developer
                </p>
              </li>
              <li className="border border-gray-300 p-4 rounded-lg hover:shadow-md transition-shadow duration-200">
                <p className="font-bold text-sm md:text-base">
                  Oct 2021 - Oct 2023
                </p>
                <p className="text-sm md:text-base">SkaeHub Technologies</p>
                <p className="text-xs md:text-sm italic text-gray-600">
                  Full-stack Developer
                </p>
              </li>
             
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
