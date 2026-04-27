"use client";
import { useState } from "react";
import Image from "next/image";
import { Clock3, Lock, MapPin } from "lucide-react";
import { FaStar } from "react-icons/fa";
import Link from "next/link";

const destinations = [
  { name: "Australia", country: "Oceania", properties: 12, price: 99900, currency: "a$", image: "https://picsum.photos/seed/trip-aus/500/350", badge: ["2 Nights", "Breakfast"] },
  { name: "Dubai", country: "UAE", properties: 8, price: 20050, currency: "$", image: "https://picsum.photos/seed/trip-dub/500/350", badge: ["2 Nights", "Breakfast"] },
  { name: "Bali", country: "Indonesia", properties: 15, price: 80000, currency: "$", image: "https://picsum.photos/seed/trip-bali/500/350", badge: ["2 Nights", "Breakfast"] },
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
            <div key={i} className="bg-white rounded-2xl overflow-hidden group card-hover shadow-none!">
              {/* Image */}
              <div className="relative h-52 overflow-hidden rounded-b-2xl">
                <Image src={dest.image} alt={dest.name} fill className="object-cover" />
                <div className="absolute flex items-center gap-1 top-3 right-3">
                  {dest?.badge && dest.badge.map((item, i) => (
                    <span key={i} className={` ${i === 0 ? "bg-white text-black" : "bg-[#D8A95B] text-white"} text-[11px] font-normal px-2.5 py-1 rounded-full uppercase tracking-wide`}>
                      {item}
                    </span>
                  ))}
                </div>
                {/* Right to Hotel button */}
                <div className="bg-linear-to-b from-transparent via-transparent to-[#00000080] absolute inset-0" />
                <p className="absolute right-4 bottom-4 text-xs text-white">
                  **The price for 2 adults includes half board**
                </p>
              </div>

              {/* Info */}
              <div className="p-4">
                <h3 className="font-medium text-black text-sm mb-1">{dest.name}</h3>
                <div className="flex items-center gap-1 text-black text-xs mb-1">
                  <MapPin className="w-3 h-3" />
                  {dest.country}
                </div>

                <div className="flex items-center justify-between mb-2">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => <FaStar key={i} className="text-black w-3 h-3" />)}
                    <span className="text-black text-xs ml-1">{dest.properties} reviews</span>
                  </div>
                </div>

                <hr className="border-gray-100 mb-2" />

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-black text-xs line-through">${dest.price.toLocaleString()}</span>
                    <span className="text-black font-semibold text-sm ml-1.5">${dest.price.toLocaleString()}</span>
                    <span className="text-black text-xs">/person</span>
                  </div>
                  <div className="flex items-center gap-1 text-black text-xs">
                    <Link href="#" className="duration-300 text-[#D8A95B] text-xs font-normal border border-[#D8A95B] hover:bg-[#D8A95B] hover:text-white rounded-full px-3 py-1.5">
                      Book Now
                    </Link>
                  </div>
                </div>
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
