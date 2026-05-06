"use client";
import { useState } from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";

const accordionItems = [
  {
    label: "Key Landmarks",
    items: [
      { location: "Mahakaleshwar Jyotirlinga", distance: "2.8 km" },
      { location: "Dewas Gate Bus Stand", distance: "1.5 km" },
      { location: "Nana Kheda Bus Stand", distance: "1 km" }
    ],
  },
  {
    label: "Tourist Attractions",
    items: [
      { location: "Mahakaleshwar Jyotirlinga", distance: "2.8 km" },
      { location: "Dewas Gate Bus Stand", distance: "1.5 km" },
      { location: "Nana Kheda Bus Stand", distance: "1 km" }
    ],
  },
  {
    label: "Other Landmarks",
    items: [
      { location: "Mahakaleshwar Jyotirlinga", distance: "2.8 km" },
      { location: "Dewas Gate Bus Stand", distance: "1.5 km" },
      { location: "Nana Kheda Bus Stand", distance: "1 km" }
    ],
  },
];

export default function WhereToGo() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="where-to-go" className="py-10 scroll-mt-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title mb-2">Where to go</h2>
        <p className="text-[13px] text-black mb-6 flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> Entire villa in Mueang Chiang Mai</p>

        <div className="flex flex-col lg:flex-row gap-8 border border-[#737373] rounded-xl p-2">
          {/* Accordion */}
          <div className="w-full lg:w-80 shrink-0">
            <p className="text-xl font-medium text-black mb-4 mt-2 mx-2">Around this Property :</p>
            <div className="space-y-2">
              {accordionItems.map((item, i) => (
                <div key={i} className="overflow-hidden border-t border-[#e5e5e5] mx-2">
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    className="w-full flex items-center justify-between py-3 text-left bg-white transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <div className="bg-black rounded-full w-1 h-1" />
                      <span className="text-sm font-medium text-black">{item.label}</span>
                    </div>
                    <svg
                      className={`w-4 h-4 text-black transition-transform ${open === i ? "rotate-180" : ""}`}
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {open === i && (
                    <div className="pb-3">
                      <ul className="mt-2 mx-4 space-y-4">
                        {item.items.map((place, i) => (
                          <li key={i} className="flex items-center gap-2 text-xs text-black">
                            {place.location}<br />{place.distance}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Map */}
          <div className="flex-1 relative min-h-128 rounded-xl overflow-hidden border border-gray-200">
            <iframe
              src="https://maps.google.com/maps?q=22.5481474,88.3991694&z=15&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              // referrerPolicy="no-referrer-when-downgrade"
              title="JW Marriott Hotel Kolkata"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
