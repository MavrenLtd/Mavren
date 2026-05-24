import Image from "next/image";

export default function Hero() {
  return (
    <section>
      <div className="w-full pt-16">
        <Image
          src="/Mavren-Hero-Banner-1920x600.png"
          alt="Mavren — Navigate Ambiguity, Ship Clarity"
          width={1920}
          height={600}
          className="w-full h-auto"
          priority
        />
      </div>
      <div className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <p className="text-brand-purple font-semibold text-sm uppercase tracking-widest mb-4">
              Navigate Ambiguity, Ship Clarity.
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              We don&apos;t just consult —<br />we build.
            </h1>
            <p className="text-lavender text-lg md:text-xl leading-relaxed mb-4">
              From data pipelines to full-stack applications — Mavren brings 18 years of hands-on
              engineering experience to every engagement. We move fast, build functional prototypes
              quickly, and take them all the way to production.
            </p>
            <p className="text-lavender/70 italic mb-8">
              Available for day-rate contracts · Outside IR35
            </p>
            <a
              href="#contact"
              className="inline-block bg-[#7C3AED] text-white px-8 py-4 rounded-full font-semibold text-lg hover:opacity-80 transition-opacity"
            >
              Start a conversation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
