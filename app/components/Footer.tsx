import Image from "next/image";
import Link from "next/link";

const quickLinks = ["Home", "About Us", "Search Hotel", "Contact Us", "Blog", "FAQs"];
const otherLinks = ["Privacy Policy", "Terms & Conditions", "Refund Policy", "Cookie Policy", "Sitemap"];

export default function Footer() {
  return (
    <footer style={{ background: "#16191C" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <Link href="/" className="flex items-center gap-2.5 shrink-0">
                <Image src="/images/logo.png" alt="Logo" width={1920} height={1080} className="w-[160px] h-auto" />
              </Link>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-5">
              Discover the world&apos;s most engaging places with Stayent. We curate extraordinary travel experiences for discerning travellers worldwide.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-white text-sm">
                <svg className="w-4 h-4 text-[#D8A95B] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>info@stayent.com</span>
              </div>
              <div className="flex items-center gap-2 text-white text-sm">
                <svg className="w-4 h-4 text-[#D8A95B] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+91 234 567 880</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm mb-5 pb-2 border-b border-white/10">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l}>
                  <Link href="#" className="text-white text-sm hover:text-[#D8A95B] transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#D8A95B] shrink-0" />
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Other Links */}
          <div>
            <h4 className="text-white font-bold text-sm mb-5 pb-2 border-b border-white/10">
              Other Links
            </h4>
            <ul className="space-y-2.5">
              {otherLinks.map((l) => (
                <li key={l}>
                  <Link href="#" className="text-white text-sm hover:text-[#D8A95B] transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#D8A95B] shrink-0" />
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold text-sm mb-5 pb-2 border-b border-white/10">
              Find Our Newsletter
            </h4>
            <p className="text-white text-sm mb-4">
              Get exclusive deals and travel inspiration delivered to your inbox.
            </p>
            <div className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-600 outline-none focus:border-[#D8A95B] transition-colors"
              />
              <button className="w-full btn-amber py-2.5 rounded-xl text-sm font-semibold">
                Subscribe
              </button>
            </div>

            {/* Socials */}
            <div className="flex gap-3 mt-6">
              {[
                { icon: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z", label: "Facebook" },
                { icon: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z", label: "Twitter" },
              ].map((s) => (
                <Link
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#D8A95B] flex items-center justify-center transition-colors group"
                >
                  <svg className="w-4 h-4 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d={s.icon} />
                  </svg>
                </Link>
              ))}
              <Link href="#" aria-label="Instagram" className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#D8A95B] flex items-center justify-center transition-colors group">
                <svg className="w-4 h-4 text-gray-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="2" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs">
            © 2026 Stayent. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-gray-600">
            {["Privacy", "Terms", "Cookies"].map((l) => (
              <Link key={l} href="#" className="hover:text-[#D8A95B] transition-colors">{l}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
