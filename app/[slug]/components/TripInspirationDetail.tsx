"use client";
import { useState } from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";

const destinations = [
  { name: "Australia", country: "Oceania", properties: 12, price: 99900, currency: "a$", image: "https://picsum.photos/seed/trip-aus/500/350" },
  { name: "Dubai", country: "UAE", properties: 8, price: 20050, currency: "$", image: "https://picsum.photos/seed/trip-dub/500/350" },
  { name: "Bali", country: "Indonesia", properties: 15, price: 80000, currency: "$", image: "https://picsum.photos/seed/trip-bali/500/350" },
];

export default function TripInspirationDetail() {
  const [active, setActive] = useState(0);

  return (
    <section id="trip-inspiration" className="py-10 scroll-mt-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-8">
          <h2 className="section-title">Trip Inspiration</h2>
          <p className="text-black text-xs mt-2">Welcome to North India: the ultimate travel destination, a vast land full of fascinating contrasts. From the snow-covered peaks of the Himalayan ranges to the beaches of Kerala; jungles teeming with elephants, leopards, and the Royal Bengal tiger; to its eclectic, kaleidoscopic cities.
            <br />
            <br />
            Let us craft your bespoke travel itinerary and make your journey truly unforgettable. Start your North India adventure now!</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((dest, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm group card-hover">
              <div className="relative h-52 overflow-hidden">
                <Image src={dest.image} alt={dest.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="text-white font-semibold text-base">{dest.name}</h4>
                  <p className="text-white/70 text-xs">{dest.properties} Properties</p>
                </div>
              </div>
              <div className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-gray-500 text-xs">
                  <MapPin className="w-3.5 h-3.5 text-[#D8A95B]" />
                  {dest.country}
                </div>
                <div className="text-right">
                  <p className="text-[11px] text-gray-400">from</p>
                  <p className="text-sm font-semibold text-[#D8A95B]">{dest.currency}{dest.price.toLocaleString()}<span className="text-gray-400 font-normal text-xs">/person</span></p>
                </div>
                <button className="btn-amber px-3 py-1.5 rounded-full text-xs font-semibold">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {destinations.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-2 rounded-full transition-all ${i === active ? "w-6 bg-[#D8A95B]" : "w-2 bg-gray-300"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
