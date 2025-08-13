const Resume = () => {
  return (
    <section
      id="resume"
      className="w-full bg-secondary container-x flex justify-center items-center py-8 sm:py-12 px-4"
    >
      <div className="max-w-7xl w-full bg-white rounded-2xl shadow-lg p-4 sm:p-6 md:p-8">
        {/* Section Header */}
        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-primary_text_color mb-8 sm:mb-10 text-center">
          My Resume
        </h3>

        <div className="flex flex-col md:flex-row justify-between gap-8 sm:gap-10">
          {/* Education */}
          <div className="flex-1">
            <h2 className="text-base sm:text-lg md:text-xl font-bold mb-4 border-b-2 pb-2 border-primary_text_color">
              Education
            </h2>
            <ul className="space-y-4">
              <li className="border border-gray-300 p-3 sm:p-4 rounded-lg hover:shadow-md transition-shadow duration-200">
                <p className="text-sm sm:text-base md:text-lg font-medium">
                  Jomo Kenyatta University of Agriculture and Technology
                </p>
                <p className="text-xs sm:text-sm md:text-base italic">
                  Bachelor of Business Information Technology
                </p>
                <p className="text-xs sm:text-sm text-gray-600">2015 - 2020</p>
              </li>
            </ul>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px bg-gray-300" />

          {/* Experience */}
          <div className="flex-1">
            <h2 className="text-base sm:text-lg md:text-xl font-bold mb-4 border-b-2 pb-2 border-primary_text_color">
              Experience
            </h2>
            <ul className="space-y-5 sm:space-y-6">
              {/* Job 1 */}
              <li className="border border-gray-300 p-3 sm:p-4 rounded-lg hover:shadow-md transition-shadow duration-200">
                <p className="font-bold text-xs sm:text-sm md:text-base">
                  Jan 2024 - Present
                </p>
                <p className="text-sm sm:text-base">Freelance Web Developer</p>
                <p className="text-xs sm:text-sm italic text-gray-600">
                  Designed and developed websites for various clients.
                </p>
                <ul className="list-disc list-inside text-xs sm:text-sm mt-2 space-y-1">
                  <li>
                    Developed responsive web applications using React.js and
                    Tailwind CSS.
                  </li>
                  <li>
                    Collaborated with clients to gather requirements and deliver
                    user-friendly solutions.
                  </li>
                  <li>
                    Implemented best practices for performance optimization and
                    accessibility.
                  </li>
                </ul>
              </li>

              {/* Job 2 */}
              <li className="border border-gray-300 p-3 sm:p-4 rounded-lg hover:shadow-md transition-shadow duration-200">
                <p className="font-bold text-xs sm:text-sm md:text-base">
                  June 2024 - August 2024
                </p>
                <p className="text-sm sm:text-base">
                  Front-End Development Intern at HNG Internship program
                </p>
                <p className="text-xs sm:text-sm italic text-gray-600">
                  During my Front-End Development internship at the HNG
                  Internship Program, I gained valuable experience in developing
                  user-friendly web applications through collaboration and
                  hands-on work.
                </p>
                <ul className="list-disc list-inside text-xs sm:text-sm mt-2 space-y-1">
                  <li>
                    Developed responsive web interfaces using HTML, CSS, and
                    JavaScript.
                  </li>
                  <li>
                    Enhanced my skills in React.js, Tailwind CSS, and problem
                    solving skills.
                  </li>
                </ul>
              </li>

              {/* Job 3 */}
              <li className="border border-gray-300 p-3 sm:p-4 rounded-lg hover:shadow-md transition-shadow duration-200">
                <p className="font-bold text-xs sm:text-sm md:text-base">
                  Oct 2021 - Oct 2023
                </p>
                <p className="text-sm sm:text-base">SkaeHub Technologies</p>
                <p className="text-xs sm:text-sm italic text-gray-600">
                  Full-stack Developer
                </p>
                <ul className="list-disc list-inside text-xs sm:text-sm mt-2 space-y-1">
                  <li>
                    Built a Booking API for clients to book appointments using
                    Django.
                  </li>
                  <li>
                    Designed and implemented database structure (Postgres) for
                    new products and implemented unit tests for APIs.
                  </li>
                  <li>Monitored and troubleshooted deployed applications.</li>
                  <li>Built RESTful APIs for internal web applications.</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
