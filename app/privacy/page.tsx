import Nav from "../components/Nav";
import Footer from "../components/Footer";

export const metadata = {
  title: "Privacy Policy — Mavren Ltd",
};

export default function PrivacyPolicy() {
  return (
    <>
      <Nav />
      <main
        className="pt-16 min-h-screen bg-[#111111]"
        style={{ backgroundImage: "url('/hero-wave-dark.png')", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="max-w-3xl mx-auto px-6 py-24">
          <h1 className="text-4xl font-bold text-white mb-2">Privacy Policy</h1>
          <p className="text-[#9CA3AF] text-sm mb-12">Last updated: May 2026</p>

          <div className="space-y-10 text-[#A0A0A0] leading-relaxed">

            <section>
              <h2 className="text-xl font-bold text-white mb-3">1. Who We Are</h2>
              <p>Mavren Ltd is an IT consultancy registered in England and Wales (Companies House No. 17206104). Our registered address is 15 Lodge Gate, Milton Keynes, MK14 5EW.</p>
              <p className="mt-3">If you have any questions about this policy, you can contact us at: <a href="mailto:info@mavren.dev" className="text-white underline underline-offset-4">info@mavren.dev</a></p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">2. What Data We Collect</h2>
              <p className="mb-3">We may collect the following personal data when you use this website:</p>
              <ul className="list-disc list-inside space-y-2 pl-2">
                <li>Name and contact details (e.g. email address, phone number) if you get in touch via our contact form or by email</li>
                <li>Usage data such as IP address, browser type, and pages visited, collected automatically via hosting or analytics tools</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">3. How We Use Your Data</h2>
              <p className="mb-3">We use your data to:</p>
              <ul className="list-disc list-inside space-y-2 pl-2">
                <li>Respond to enquiries you send us</li>
                <li>Improve the performance and usability of this website</li>
              </ul>
              <p className="mt-3">We do not sell your data to third parties.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">4. Legal Basis for Processing</h2>
              <p className="mb-3">We process your data on the following legal bases under UK GDPR:</p>
              <ul className="list-disc list-inside space-y-2 pl-2">
                <li><span className="text-white font-medium">Legitimate interests</span> — to respond to business enquiries</li>
                <li><span className="text-white font-medium">Consent</span> — where you have voluntarily provided your information</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">5. Data Retention</h2>
              <p>We retain personal data only for as long as necessary. Enquiry data is typically kept for up to 2 years unless a longer period is required for legal or contractual reasons.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">6. Third-Party Services</h2>
              <p>This website is hosted on Vercel. Your data may pass through their infrastructure. Please refer to Vercel&apos;s Privacy Policy for details.</p>
              <p className="mt-3">If we use analytics tools in future, this policy will be updated accordingly.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">7. Your Rights</h2>
              <p className="mb-3">Under UK GDPR, you have the right to:</p>
              <ul className="list-disc list-inside space-y-2 pl-2">
                <li>Access the personal data we hold about you</li>
                <li>Request correction or deletion of your data</li>
                <li>Object to or restrict how we process your data</li>
                <li>Withdraw consent at any time</li>
              </ul>
              <p className="mt-3">To exercise any of these rights, contact us at <a href="mailto:info@mavren.dev" className="text-white underline underline-offset-4">info@mavren.dev</a></p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">8. Cookies</h2>
              <p>This website may use essential cookies to function correctly. We do not currently use tracking or advertising cookies. If this changes, this policy will be updated.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">9. Changes to This Policy</h2>
              <p>We may update this policy from time to time. The date at the top of this page will always reflect the latest version.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">10. Contact</h2>
              <div className="space-y-1">
                <p className="text-white font-medium">Mavren Ltd</p>
                <p>15 Lodge Gate, Milton Keynes, MK14 5EW</p>
                <p><a href="mailto:info@mavren.dev" className="text-white underline underline-offset-4">info@mavren.dev</a></p>
              </div>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
