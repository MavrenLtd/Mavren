type Product = {
  title: string;
  badge: string;
  tagline: string;
  body: string;
  smallPrint?: string;
  footer: string;
  linkLabel?: string;
  linkHref?: string;
};

const products: Product[] = [
  {
    title: "MavrenTrade",
    badge: "In development",
    tagline: "Run your trade business from your phone.",
    body:
      "MavrenTrade is a mobile app for UK sole traders and small teams (gardeners, plumbers, electricians and more) to keep clients, jobs, quotes and invoices in one place. It works offline on site and syncs automatically when you're back online. Quotes and invoices can be emailed to clients straight from the app as PDFs, with replies going to the business's own email address.",
    smallPrint: "Built in the UK, with data hosted in the UK and EU.",
    footer: "Coming to iOS and Android in 2027.",
    linkLabel: "Register interest",
    linkHref: "mailto:info@mavren.dev?subject=MavrenTrade%20interest",
  },
  {
    title: "CutMap",
    badge: "In planning",
    tagline: "Navigate the UK canal network, even with no signal.",
    body:
      "CutMap is a navigation and mapping app for UK canal boaters. It brings official waterway data (routes, locks, bridges and winding holes) together with community-sourced amenities like water points, fuel stops and canalside pubs, plus satellite and towpath-level views. Maps and canal data are saved to your device, so it keeps working in the middle of nowhere.",
    smallPrint: "No account needed to browse. Sign in to save your journeys and help keep the map up to date.",
    footer: "For web, iOS and Android.",
    linkLabel: "Register interest",
    linkHref: "mailto:info@mavren.dev?subject=CutMap%20interest",
  },
  {
    title: "Mavren Hub",
    badge: "In development",
    tagline: "Run the business side of your business in one place.",
    body:
      "Mavren Hub is a web-based tool for small businesses and consultancies: shared and personal task boards, time logging synced with your calendar, invoices built straight from the time you've logged, expense and VAT tracking, and a pipeline for taking new ideas from first sketch to validated plan. We built it to run Mavren, and we're now opening it up to other businesses.",
    footer: "Works in your web browser.",
    linkLabel: "Register interest",
    linkHref: "mailto:info@mavren.dev?subject=Mavren%20Hub%20interest",
  },
];

export default function Products() {
  return (
    <section
      id="products"
      className="py-24 bg-[#F5F5F5]"
      style={{ backgroundImage: "url('/hero-wave-light.png')", backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-6">Our products</h2>
          <p className="text-[#404040] text-lg max-w-2xl mx-auto">
            As well as client work, we build our own software.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.title}
              className="bg-[#1C1C1C] rounded-2xl p-8 border border-white/10 flex flex-col"
            >
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <h3 className="text-xl font-bold text-white">{product.title}</h3>
                <span className="border border-white/20 text-[#9CA3AF] text-xs font-semibold uppercase tracking-widest rounded-full px-3 py-1">
                  {product.badge}
                </span>
              </div>
              <p className="text-[#E5E5E5] font-semibold mb-4">{product.tagline}</p>
              <p className="text-[#A0A0A0] leading-relaxed text-sm mb-4">{product.body}</p>
              {product.smallPrint && (
                <p className="text-[#9CA3AF] text-xs mb-6">{product.smallPrint}</p>
              )}
              <div className="mt-auto border-t border-white/10 pt-5 flex flex-col gap-4">
                <p className="text-[#E5E5E5] font-semibold italic text-sm">{product.footer}</p>
                {product.linkHref && (
                  <a
                    href={product.linkHref}
                    className="bg-[#534AB7] text-white px-5 py-2 rounded-full text-sm font-medium hover:opacity-80 transition-opacity text-center"
                  >
                    {product.linkLabel}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
