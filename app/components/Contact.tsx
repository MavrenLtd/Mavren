export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-[#EEEDFE]"
      style={{ backgroundImage: "url('/hero-wave-light.png')", backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="max-w-3xl mx-auto px-6 text-center">
        <p className="text-[#534AB7] font-semibold text-sm uppercase tracking-widest mb-4">
          Let&apos;s Talk
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#0D0B1E] mb-6">Get In Touch</h2>
        <p className="text-[#26215C] text-lg mb-3 leading-relaxed">
          We&apos;re currently available for new engagements.
        </p>
        <p className="text-[#26215C] text-lg mb-10 leading-relaxed">
          Whether you have a project in mind, a problem to solve, or just want to explore what
          working together might look like — we&apos;d love to hear from you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <a
            href="mailto:info@mavren.dev"
            className="bg-[#534AB7] text-white px-8 py-4 rounded-full font-semibold hover:opacity-80 transition-opacity"
          >
            Send us a message
          </a>
          <a
            href="https://www.linkedin.com/company/122674153"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#534AB7] text-[#534AB7] px-8 py-4 rounded-full font-semibold hover:opacity-80 transition-opacity"
          >
            Connect on LinkedIn
          </a>
        </div>
        <p className="text-[#26215C] text-sm">
          Or email us directly at{" "}
          <a
            href="mailto:info@mavren.dev"
            className="text-[#534AB7] underline underline-offset-4"
          >
            info@mavren.dev
          </a>
        </p>
      </div>
    </section>
  );
}
