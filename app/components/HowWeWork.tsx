const gears = [
  {
    name: "Navigate",
    description:
      "We get under the skin of the problem. What are you actually trying to solve? What does success look like? We ask the questions others skip.",
  },
  {
    name: "Build",
    description:
      "We move fast. Functional prototypes early, feedback loops short, production-quality code always the destination.",
  },
  {
    name: "Ship",
    description:
      "We don't disappear at the finish line. We make sure what we build actually lands — documented, stable, and ready for your team to own.",
  },
];

export default function HowWeWork() {
  return (
    <section id="how-we-work" className="bg-navy py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-brand-purple font-semibold text-sm uppercase tracking-widest mb-4">
            Our Approach
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">How We Work</h2>
          <p className="text-lavender text-lg max-w-2xl mx-auto leading-relaxed">
            Every engagement is different — and we think that&apos;s how it should be. Some clients need
            us embedded in their team, others need us to work independently. We&apos;re equally comfortable
            either way.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {gears.map((gear, i) => {
            const isLight = i % 2 === 0;
            return (
              <div
                key={gear.name}
                style={{
                  backgroundImage: `url('/${isLight ? "hero-wave-light.png" : "hero-wave-dark.png"}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                className="rounded-2xl p-8 border border-white/10 relative overflow-hidden"
              >
                <div className={`font-bold text-8xl absolute -top-4 -right-2 select-none ${isLight ? "text-[#0D0B1E]/10" : "text-white/10"}`}>
                  {i + 1}
                </div>
                <h3 className={`text-2xl font-bold mb-4 ${isLight ? "text-[#0D0B1E]" : "text-white"}`}>
                  {gear.name}
                </h3>
                <p className={`leading-relaxed ${isLight ? "text-[#26215C]" : "text-[#AFA9EC]"}`}>
                  {gear.description}
                </p>
              </div>
            );
          })}
        </div>

        <p className="text-center text-lavender text-lg max-w-3xl mx-auto">
          And when a project needs more resource, we can draw on our network of trusted specialist
          consultants and partner firms to scale the team — without you needing to go back to market.
        </p>
      </div>
    </section>
  );
}
