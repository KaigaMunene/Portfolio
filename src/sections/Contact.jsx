const Contact = () => {
  return (
    <section id="contact" className="bg-white container-x py-12 sm:py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
          Got an Idea? Let&apos;s Bring It to Life!
        </h2>

        {/* Description */}
        <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          I&apos;m always excited to collaborate on new and innovative projects.
          Whether you&apos;re starting from scratch or refining an existing
          idea, let&apos;s make it happen.
        </p>

        {/* Contact Card */}
        <div className="bg-secondary rounded-2xl p-6 sm:p-8 shadow-md">
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 underline decoration-secondary_text_color">
            Contact Me
          </h3>
          <p className="text-dark mb-6 text-sm sm:text-base">
            Feel free to reach out via email or phone — I&apos;d love to hear
            from you!
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 text-sm sm:text-base font-medium">
            <a
              href="mailto:kaigamunene@gmail.com"
              className="text-black border border-zinc-950 hover:border-secondary_text_color px-5 py-2 sm:px-6 sm:py-3 rounded-full transition duration-300 text-center"
            >
              Email Me
            </a>
            <a
              href="https://wa.me/+254713995896"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-secondary_text_color hover:bg-green-700 px-5 py-2 sm:px-6 sm:py-3 rounded-full transition duration-300 text-center"
            >
              WhatsApp Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
