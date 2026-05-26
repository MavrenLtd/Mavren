import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-[#F5F5F5]"
      style={{ backgroundImage: "url('/hero-wave-light.png')", backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-[#6B7280] font-semibold text-sm uppercase tracking-widest mb-4">
            About Mavren
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-8">
            Built differently.<br />By design.
          </h2>
          <div className="space-y-5 text-[#404040] text-lg leading-relaxed">
            <p>
              We started Mavren because we believed there was a better way to deliver technology
              consulting — less PowerPoint, more working software.
            </p>
            <p>
              At the heart of the team is over 18 years of hands-on engineering and consulting
              experience. We&apos;ve built data platforms from scratch, architected cloud solutions for
              enterprise clients, led agile teams through complex deliveries, and written plenty of
              production code along the way. We&apos;ve worked across finance, business intelligence, and
              software — in start-ups, scale-ups, and large organisations alike.
            </p>
            <p>
              What makes us different is that we stay hands-on. We don&apos;t hand off to a junior team
              once the architecture is agreed — we&apos;re in the code, in the data, in the detail. We
              move fast, prototype early, and don&apos;t consider something done until it&apos;s actually
              shipping.
            </p>
            <p>
              When a project calls for more hands, we have a trusted network of specialist
              consultants and partner firms we work with regularly — so we can scale up quickly
              without ever compromising on quality.
            </p>
            <p className="text-[#111111] font-semibold">
              Whether you need a single embedded engineer or a small delivery team, we&apos;ll make it
              work.
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <Image
            src="/Mavren-Logo-Stacked-WavyBg-720x720.png"
            alt="Mavren"
            width={420}
            height={420}
            className="rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}
