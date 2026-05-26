const services = [
  {
    title: "Data Engineering & Cloud Platforms",
    description:
      "We design and build robust data pipelines, warehouses and transformation layers — whether you're migrating to the cloud or scaling what you already have. Snowflake, AWS, Azure and beyond.",
  },
  {
    title: "Agile Delivery & Scrum",
    description:
      "We bring structure to complex delivery. From running sprint ceremonies to coaching teams and owning the backlog — we keep projects moving and stakeholders aligned.",
  },
  {
    title: "Rapid Prototyping & Proof of Concept",
    description:
      "Got an idea but need to see it working before committing? We turn ambiguous briefs into functional prototypes fast — so you can validate, iterate and make decisions with confidence.",
  },
  {
    title: "Technical Business Analysis",
    description:
      "We bridge the gap between business and technology. From requirements gathering and stakeholder workshops through to detailed technical specifications — we make sure everyone is building the right thing.",
  },
  {
    title: "Software Engineering",
    description:
      "From greenfield applications to legacy modernisation — we design and build production-quality software across the full stack. Clean code, solid architecture, delivered.",
  },
  {
    title: "Business Intelligence & Data Analytics",
    description:
      "We turn raw data into insight that drives decisions. Tableau, Spotfire, Alteryx — we design, build and optimise BI solutions that your business will actually use.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-dark-purple py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-brand-purple font-semibold text-sm uppercase tracking-widest mb-4">
            What We Do
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Services</h2>
          <p className="text-lavender text-lg max-w-2xl mx-auto">
            We work across the full technology stack — from cloud data platforms to bespoke software.
            Here&apos;s where we spend most of our time.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const isLight = i % 2 === 0;
            return (
              <div
                key={service.title}
                style={{
                  backgroundImage: `url('/${isLight ? "hero-wave-light.png" : "hero-wave-dark.png"}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                className="rounded-2xl p-8 border border-white/10 hover:border-white/25 transition-colors group overflow-hidden"
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-5 transition-colors ${isLight ? "bg-[#534AB7]/15 group-hover:bg-[#534AB7]/25" : "bg-white/10 group-hover:bg-white/20"}`}>
                  <div className={`w-4 h-4 rounded-sm ${isLight ? "bg-[#534AB7]" : "bg-white"}`} />
                </div>
                <h3 className={`text-xl font-bold mb-3 ${isLight ? "text-[#0D0B1E]" : "text-white"}`}>
                  {service.title}
                </h3>
                <p className={`leading-relaxed text-sm ${isLight ? "text-[#26215C]" : "text-[#AFA9EC]"}`}>
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
