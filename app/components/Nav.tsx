import Link from "next/link";

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-sm border-b border-dark-purple">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/map-nobg.png" alt="Mavren" className="w-9 h-9" />
          <span className="text-light-lavender font-semibold text-lg tracking-wide">Mavren</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link href="#about" className="text-lavender hover:text-light-lavender transition-colors text-sm">About</Link>
          <Link href="#services" className="text-lavender hover:text-light-lavender transition-colors text-sm">Services</Link>
          <Link href="#work" className="text-lavender hover:text-light-lavender transition-colors text-sm">Work</Link>
          <Link
            href="#contact"
            className="bg-[#534AB7] text-white px-5 py-2 rounded-full text-sm font-medium hover:opacity-80 transition-opacity"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </nav>
  );
}
