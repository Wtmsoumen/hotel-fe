"use client";
import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

const faqs = [
  { q: "Lorem ipsum dolor sit amet?", a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam." },
  { q: "Lorem ipsum dolor sit amet?", a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam." },
  { q: "Lorem ipsum dolor sit amet?", a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam." },
  { q: "Lorem ipsum dolor sit amet?", a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam." },
];

export default function ListingFAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left: Image */}
          <div className="flex flex-col gap-3">
            <h2 className="section-title mb-2">Everything you need to know right now</h2>
            <div className="relative h-80 sm:h-96 lg:h-[350px] rounded-2xl overflow-hidden">
              <Image
                src="https://picsum.photos/seed/faq-hotel/700/600"
                alt="FAQ"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <span className="text-white font-bold text-6xl sm:text-7xl tracking-widest opacity-90">FAQ</span>
              </div>
            </div>
          </div>

          {/* Right: Accordion */}
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white border-b-2 border-gray-100 overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left"
                >
                  <span className="text-lg font-medium text-black">{faq.q}</span>
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ml-4 transition-transform ${open === i ? "rotate-45" : ""}`}>
                    <X className="w-3.5 h-3.5" />
                  </span>
                </button>
                {open === i && (
                  <div className="px-5 pb-4 text-sm text-black font-light leading-relaxed">
                    <p className="pt-3">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
