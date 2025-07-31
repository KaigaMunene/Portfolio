const Contact = () => {
  return (
    <section id="contact" className="bg-gray-100 dark:bg-gray-800 py-12 h-fit flex items-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-6">
            Get in Touch
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision. Whether you have a question
            or just want to say hi, feel free to drop me a line!
          </p>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Name : Kaiga Munene
            </label>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Email : kaigamunene@gmail.com
            </label>
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Phone : 0713995896
            </label>
          </div>
          <div>
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Address : Nairobi, Kenya.
            </label>
          </div>
        </div>

        <div></div>
      </div>
    </section>
  );
};
export default Contact;
