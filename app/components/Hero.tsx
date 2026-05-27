export default function Hero() {
  return (
    <section>
      <div
        className="w-full pt-16 flex items-center justify-center"
        style={{
          backgroundImage: "url('/purple-bg2.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "380px",
        }}
      >
        <div className="flex items-center gap-8">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-white.png" alt="Mavren" className="w-24 h-24" />
          <div className="text-white">
            <p className="text-6xl font-bold tracking-wide leading-none">Mavren</p>
            <p className="text-base tracking-[0.3em] uppercase text-white/80 mt-2">Map. Code. Ship.</p>
          </div>
        </div>
      </div>
      <div
        className="py-20 bg-[#111111]"
        style={{ backgroundImage: "url('/hero-wave-dark.png')", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lavender font-semibold text-sm uppercase tracking-widest mb-4">
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
              className="inline-block bg-[#534AB7] text-white px-8 py-4 rounded-full font-semibold text-lg hover:opacity-80 transition-opacity"
            >
              Start a conversation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
