import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[600px] md:h-[680px] overflow-hidden">
      <Image
        src="/Mavren-Hero-Banner-1920x600.png"
        alt="Mavren"
        fill
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-navy/65" />
      <div className="relative z-10 h-full flex flex-col justify-center max-w-7xl mx-auto px-6 pt-16">
        <div className="max-w-2xl">
          <p className="text-brand-purple font-semibold text-sm uppercase tracking-widest mb-4">
            Navigate Ambiguity, Ship Clarity.
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            We don&apos;t just consult —<br />we build.
          </h1>
          <p className="text-light-lavender/90 text-lg md:text-xl leading-relaxed mb-4">
            From data pipelines to full-stack applications — Mavren brings 18 years of hands-on
            engineering experience to every engagement. We move fast, build functional prototypes
            quickly, and take them all the way to production.
          </p>
          <p className="text-lavender italic mb-8">
            Available for day-rate contracts · Outside IR35
          </p>
          <a
            href="#contact"
            className="inline-block bg-brand-purple text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-brand-purple/80 transition-colors"
          >
            Start a conversation
          </a>
        </div>
      </div>
    </section>
  );
}
