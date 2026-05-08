"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/", active: true },
  { label: "About Us", href: "/aboutus" },
  { label: "Search Your Hotel", href: "/listing" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contactus" },
];

export default function Navbar() {

  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // change after 50px scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {pathname === "/login" || pathname === "/register" || pathname.startsWith("/dashboard") ? null : (
        <header className={`fixed top-0 left-0 right-0 z-100 transition-all duration-300 ${scrolled ? "bg-[#16191C]" : "bg-transparent"}`}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-0.5 sm:py-2 lg:py-4">
            <div className="flex items-center justify-between h-[68px]">

              {/* Logo */}
              <Link href="/" className="flex items-center gap-2.5 shrink-0">
                <Image src="/images/logo.webp" alt="Logo" width={1920} height={1080} className="w-[180px] h-auto" />
              </Link>

              {/* Desktop nav */}
              <nav className="hidden lg:flex items-center gap-7">
                {navLinks.map((l) => (
                  <Link
                    key={l.label}
                    href={l.href}
                    className={`text-sm font-medium transition-colors ${pathname === l.href
                      ? "text-[#D8A95B] border-b border-[#D8A95B] pb-0.5"
                      : "text-white hover:text-[#D8A95B]"
                      }`}
                  >
                    {l.label}
                  </Link>
                ))}
                {/* Auth buttons */}
                <div className="hidden lg:flex items-center gap-3 ml-12">
                  <Link href="/login" className="px-5 py-2 text-sm font-normal text-black bg-white border border-white rounded-full hover:border-[#D8A95B] hover:bg-[#D8A95B] hover:text-[#ffffff] transition-colors">
                    Login
                  </Link>
                  <Link href="/register" className="px-5 py-2 text-sm font-normal text-white rounded-full bg-transparent border border-white hover:bg-white hover:text-black transition-colors">
                    Register
                  </Link>
                </div>
              </nav>


              {/* Mobile toggle */}
              <button className="lg:hidden text-white p-1" onClick={() => setOpen(!open)} aria-label="Menu">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {open
                    ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
                </svg>
              </button>
            </div>

            {/* Mobile menu */}
            <div className={`lg:hidden fixed inset-0 bg-[#16191C] z-50 transition-transform duration-300 transform ${open ? "translate-x-0" : "translate-x-full"}`}>
              <div className="flex flex-col h-full p-6">
                <div className="flex items-center justify-between mb-8">
                  <Link href="/" className="flex items-center gap-2.5 shrink-0" onClick={() => setOpen(false)}>
                    <Image src="/images/logo.webp" alt="Logo" width={1920} height={1080} className="w-[150px] h-auto" />
                  </Link>
                  <button className="text-white p-1" onClick={() => setOpen(false)} aria-label="Close Menu">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <nav className="flex flex-col gap-6">
                  {navLinks.map((l) => (
                    <Link
                      key={l.label}
                      href={l.href}
                      className={`text-xl font-medium transition-colors ${l.active ? "text-[#D8A95B]" : "text-white"}`}
                      onClick={() => setOpen(false)}
                    >
                      {l.label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto flex flex-col gap-4 pb-10">
                  <Link href="/login" className="w-full py-4 text-base text-white border border-white/30 rounded-full text-center" onClick={() => setOpen(false)}>Login</Link>
                  <Link href="/register" className="w-full py-4 text-base text-white rounded-full btn-amber text-center" onClick={() => setOpen(false)}>Register</Link>
                </div>
              </div>
            </div>
          </div>
        </header>)}
    </>
  );
}
