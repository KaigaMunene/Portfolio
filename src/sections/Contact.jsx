const Contact = () => {
  return (
    <section id="contact" className="bg-white container-x py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
          Got an Idea? Let&apos;s Bring It to Life!
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          I&apos;m always excited to collaborate on new and innovative projects.
          Whether you&apos;re starting from scratch or refining an existing
          idea, let&apos;s make it happen.
        </p>

        <div className="bg-secondary rounded-2xl p-8 shadow-md">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4 underline decoration-secondary_text_color">
            Contact Me
          </h3>
          <p className="text-dark mb-6">
            Feel free to reach out via email or phone — I&apos;d love to hear
            from you!
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 text-sm font-medium">
            <a
              href="mailto:kaigamunene@gmail.com"
              className="text-black border border-zinc-950 hover:bg-white px-6 py-3 rounded-full transition duration-300"
            >
              Email Me
            </a>
            <a
              href="https://wa.me/254713995896"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-secondary_text_color hover:bg-green-700 px-6 py-3 rounded-full transition duration-300"
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
