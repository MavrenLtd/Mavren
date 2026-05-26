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
    <section
      id="services"
      className="py-24 bg-[#F5F5F5]"
      style={{ backgroundImage: "url('/hero-wave-light.png')", backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#6B7280] font-semibold text-sm uppercase tracking-widest mb-4">
            What We Do
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-6">Our Services</h2>
          <p className="text-[#404040] text-lg max-w-2xl mx-auto">
            We work across the full technology stack — from cloud data platforms to bespoke software.
            Here&apos;s where we spend most of our time.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-[#1C1C1C] rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-colors group"
            >
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-white/15 transition-colors">
                <div className="w-4 h-4 bg-white/60 rounded-sm" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-[#A0A0A0] leading-relaxed text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
