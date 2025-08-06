const Resume = () => {
  return (
    <div className="mt-12 text-black container-x" >
      <h3 className="text-2xl font-semibold text-primary_text_color mb-8 text-center">
        My Resume
      </h3>

      <div className="flex flex-col md:flex-row justify-between gap-10">
        {/* Education */}
        <div className="flex-1">
          <h2 className="text-xl font-bold mb-4 border-b-2 pb-2 border-primary_text_color">
            Education
          </h2>
          <ul className="space-y-4">
            <li className="border p-4 border-gray-400 rounded-lg">
              <p className="text-lg font-medium">
                Jomo Kenyatta University of Agriculture and Technology
              </p>
              <p className="text-base italic">
                Bachelor of Business Information Technology
              </p>
              <p className="text-xs font-normal">2015 - 2020</p>
            </li>
          </ul>
        </div>

        {/* Divider Line */}
        <div className="hidden md:block w-px bg-gray-300" />

        {/* Experience */}
        <div className="flex-1">
          <h2 className="text-xl font-bold mb-4 border-b-2 pb-2 border-primary_text_color">
            Experience
          </h2>
          <ul className="space-y-6">
            <li className="border p-4 border-gray-400 rounded-lg">
              <p className="font-bold text-normal">Jan 2024 - Present</p>
              <p className="text-sm">Freelance Web Developer</p>
              <p className="text-sm italic">
                Designed and developed websites for various clients.
              </p>
            </li>
            <li className="border p-4 border-gray-400 rounded-lg">
              <p className="font-bold text-normal">Oct 2021 - Oct 2023</p>
              <p className="text-sm">SkaeHub Technologies</p>
              <p className="text-sm italic">Full-stack Developer</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Resume;
