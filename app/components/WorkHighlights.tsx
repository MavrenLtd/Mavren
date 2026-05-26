const highlights = [
  {
    tag: "Current · Rapid Prototyping · Software Engineering",
    title: "Live Feature Development for a Retail Technology Software Vendor",
    teaser:
      "Currently engaged as a subject matter expert and lead developer for an emerging planogram and retail planning software provider. Working at pace to build extensions and new capabilities that push their platform beyond its existing boundaries.",
    closing:
      "This is rapid prototyping at its most high-stakes — and it's winning contracts.",
  },
  {
    tag: "Financial Services · Data Engineering · Team Leadership · Agile",
    title: "Building a Data & Analytics Function From the Ground Up",
    teaser:
      "Joined a leading financial services organisation with a single isolated analyst and no analytics function. Scaled the team to four, introduced Scrum, merged in the data engineering capability, migrated from Oracle to Snowflake, and moved reporting from Excel to Tableau.",
    closing: "One person. No structure. Full analytics function on the other side.",
  },
  {
    tag: "Market Research · Data Engineering · Software Engineering",
    title: "Bridging the Gap: Spotfire & Snowflake Integration",
    teaser:
      "In the early days of Snowflake's adoption, native connectors between Spotfire and Snowflake simply didn't exist. A specialist market research client needed to analyse large-scale medical questionnaire data — but had no way to surface that data meaningfully in their analytics platform.",
    closing:
      "A working analytics capability where none had existed — built on infrastructure ahead of what the platforms offered natively.",
  },
];

export default function WorkHighlights() {
  return (
    <section
      id="work"
      className="py-24 bg-[#111111]"
      style={{ backgroundImage: "url('/hero-wave-dark.png')", backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#9CA3AF] font-semibold text-sm uppercase tracking-widest mb-4">
            Case Studies
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Work Highlights</h2>
          <p className="text-[#A0A0A0] text-lg max-w-2xl mx-auto">
            A selection of the work that shaped Mavren. Our director brings over 18 years of
            hands-on experience — here are some of the projects that define how we work.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="bg-[#1C1C1C] rounded-2xl p-8 border border-white/10 flex flex-col"
            >
              <p className="text-[#9CA3AF] text-xs font-semibold uppercase tracking-widest mb-4">
                {item.tag}
              </p>
              <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-[#A0A0A0] leading-relaxed text-sm mb-6 flex-1">{item.teaser}</p>
              <p className="text-[#E5E5E5] font-semibold italic text-sm border-t border-white/10 pt-5">
                {item.closing}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
