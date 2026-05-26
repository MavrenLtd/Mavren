import Image from "next/image";

const gears = [
  {
    name: "Map",
    icon: "map-nobg.png",
    description:
      "We get under the skin of the problem. What are you actually trying to solve? What does success look like? We ask the questions others skip.",
  },
  {
    name: "Code",
    icon: "code-nobg.png",
    description:
      "We move fast. Functional prototypes early, feedback loops short, production-quality code always the destination.",
  },
  {
    name: "Ship",
    icon: "ship-nobg.png",
    description:
      "We don't disappear at the finish line. We make sure what we build actually lands — documented, stable, and ready for your team to own.",
  },
];

export default function HowWeWork() {
  return (
    <section
      id="how-we-work"
      className="py-24 bg-[#111111]"
      style={{ backgroundImage: "url('/hero-wave-dark.png')", backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#9CA3AF] font-semibold text-sm uppercase tracking-widest mb-4">
            Our Approach
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">How We Work</h2>
          <p className="text-[#A0A0A0] text-lg max-w-2xl mx-auto leading-relaxed">
            Every engagement is different — and we think that&apos;s how it should be. Some clients need
            us embedded in their team, others need us to work independently. We&apos;re equally comfortable
            either way.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {gears.map((gear) => (
            <div
              key={gear.name}
              className="bg-[#1C1C1C] rounded-2xl p-8 border border-white/10 relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 w-16 h-16 opacity-50">
                <Image src={`/${gear.icon}`} alt={gear.name} width={64} height={64} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{gear.name}</h3>
              <p className="text-[#A0A0A0] leading-relaxed">{gear.description}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-[#A0A0A0] text-lg max-w-3xl mx-auto">
          And when a project needs more resource, we can draw on our network of trusted specialist
          consultants and partner firms to scale the team — without you needing to go back to market.
        </p>
      </div>
    </section>
  );
}
