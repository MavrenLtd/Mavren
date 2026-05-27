import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-dark-purple py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <Image
            src="/logo-white.png"
            alt="Mavren"
            width={36}
            height={36}
            className="rounded"
          />
          <span className="text-lavender text-sm font-medium">Mavren Ltd</span>
        </div>
        <div className="text-center text-lavender text-sm leading-relaxed space-y-1">
          <p>© 2025 Mavren Ltd. All rights reserved.</p>
          <p>Registered in England and Wales. Company No. 17206104.</p>
          <p>VAT registration pending.</p>
        </div>
        <Link href="/privacy" className="text-lavender hover:text-light-lavender text-sm transition-colors">
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
}
