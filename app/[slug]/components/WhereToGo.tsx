"use client";
import { useState } from "react";
import Image from "next/image";

const accordionItems = [
  {
    label: "Key Landmarks",
    items: ["Stayent Hotel – 0.1 km", "Namaste Guest House – 1.3 km", "Sathorn Hotel – 2.2 km"],
  },
  {
    label: "Tourist Attractions",
    items: ["Old Town Market – 0.5 km", "Sky Bridge – 1.8 km", "River Walk – 2.5 km"],
  },
  {
    label: "Other Landmarks",
    items: ["Bus Station – 0.7 km", "Airport Link – 4.2 km", "Convention Centre – 3.1 km"],
  },
];

export default function WhereToGo() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="where-to-go" className="py-10 scroll-mt-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-lg font-semibold text-black mb-1">Where to go</h3>
        <p className="text-xs text-gray-500 mb-6">Entire villa in Mueang Chiang Mai</p>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Accordion */}
          <div className="w-full lg:w-80 shrink-0">
            <p className="text-sm font-semibold text-black mb-4">Around this Property :</p>
            <div className="space-y-2">
              {accordionItems.map((item, i) => (
                <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    className="w-full flex items-center justify-between px-4 py-3 text-left bg-white hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D8A95B]" />
                      <span className="text-sm font-medium text-black">{item.label}</span>
                    </div>
                    <svg
                      className={`w-4 h-4 text-gray-400 transition-transform ${open === i ? "rotate-180" : ""}`}
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {open === i && (
                    <div className="px-4 pb-3 bg-gray-50 border-t border-gray-100">
                      <ul className="mt-2 space-y-1.5">
                        {item.items.map((place) => (
                          <li key={place} className="flex items-center gap-2 text-xs text-gray-600">
                            <span className="w-1 h-1 rounded-full bg-[#D8A95B] shrink-0" />
                            {place}
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
          <div className="flex-1 relative min-h-64 rounded-2xl overflow-hidden border border-gray-200">
            <Image
              src="https://picsum.photos/seed/hotel-map/900/500"
              alt="Map"
              fill
              className="object-cover"
            />
            {/* Map pin overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white rounded-full shadow-lg p-2">
                <svg className="w-5 h-5 text-[#D8A95B]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
