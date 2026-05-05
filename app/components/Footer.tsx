"use client";

import { Send } from "lucide-react";
import Image from "next/image";
import stayentLogoYellowWhite from "../../public/images/stayentLogoYellowWhite.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/aboutus" },
  { label: "Search Your Hotel", href: "/listing" },
  { label: "Contact Us", href: "/contactus" }
];
const otherLinks = ["Terms of Use", "Privacy Policy", "FAQ", "Blog"];

export default function Footer() {

  const pathname = usePathname();

  return (
    <>
      {pathname === "/login" || pathname === "/register" ? null : (
        <footer style={{ background: "#16191C" }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

              {/* Brand */}
              <div>
                <div className="flex items-center gap-2.5 mb-4">
                  <Link href="/" className="flex items-center gap-2.5 shrink-0">
                    <Image src={stayentLogoYellowWhite} alt="Logo" width={1920} height={1080} className="w-[160px] h-auto" />
                  </Link>
                </div>
                <div className="mb-6 flex flex-col">
                  <div className="text-[#D8A95B] text-xs leading-relaxed">
                    Total Free :
                  </div>
                  <Link href="tel:+01234567890" className="text-white text-sm leading-relaxed">
                    +01 234 567 890
                  </Link>
                  <Link href="tel:+01234567890" className="text-white text-sm leading-relaxed">
                    +01 234 567 890
                  </Link>
                </div>
                <div className="flex flex-col">
                  <div className="text-[#D8A95B] text-xs leading-relaxed">
                    Live Support :
                  </div>
                  <Link href="mailto:info@www.hotelbooking.com" className="text-white text-sm leading-relaxed">
                    info@www.hotelbooking.com
                  </Link>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-white font-medium text-xl mb-5 pb-2">
                  Quick Links
                </h4>
                <ul className="space-y-2.5">
                  {quickLinks.map((l, i) => (
                    <li key={i}>
                      <Link href={l.href} className="text-white text-sm group hover:text-[#D8A95B] transition-colors flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full group-hover:bg-[#D8A95B] bg-white shrink-0" />
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Other Links */}
              <div>
                <h4 className="text-white font-medium text-xl mb-5 pb-2">
                  Other Links
                </h4>
                <ul className="space-y-2.5">
                  {otherLinks.map((l) => (
                    <li key={l}>
                      <Link href="#" className="text-white text-sm group hover:text-[#D8A95B] transition-colors flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full group-hover:bg-[#D8A95B] bg-white shrink-0" />
                        {l}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Newsletter */}
              <div>
                <h4 className="text-white font-medium text-xl mb-5 pb-2">
                  Subscribe Newsletter
                </h4>
                <div className="flex items-center gap-2 relative">
                  <input
                    type="email"
                    placeholder="Your email..."
                    className="w-full border border-white rounded-full px-4 py-3 text-sm text-white placeholder-gray-600 outline-none focus:border-[#D8A95B] transition-colors"
                  />
                  <button className="w-fit h-fit btn-amber p-2.5 rounded-full text-sm font-semibold absolute right-1">
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom */}
            <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-white text-xs">
                Copyright © 2026 <span className="text-[#D8A95B]">Stayent</span>. All rights reserved
              </p>
              {/* Socials */}
              <div className="flex gap-3">
                {[
                  { icon: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z", label: "Facebook" },
                  { icon: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z", label: "Twitter" },
                ].map((s) => (
                  <Link
                    key={s.label}
                    href="#"
                    aria-label={s.label}
                    className="w-8 h-8 rounded-full bg-white hover:bg-[#D8A95B] flex items-center justify-center transition-colors group"
                  >
                    <svg className="w-4 h-4 text-black group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d={s.icon} />
                    </svg>
                  </Link>
                ))}
                <Link href="#" aria-label="Instagram" className="w-8 h-8 rounded-full bg-white hover:bg-[#D8A95B] flex items-center justify-center transition-colors group">
                  <svg className="w-4 h-4 text-black group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="2" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                  </svg>
                </Link>
                <Link href="#" aria-label="Instagram" className="w-8 h-8 rounded-full bg-white hover:bg-[#D8A95B] flex items-center justify-center transition-colors group">
                  <svg className="w-4 h-4 text-black group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
                    <rect x="2" y="9" width="4" height="12" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                    <circle cx="4" cy="4" r="2" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </footer>)}
    </>
  );
}
