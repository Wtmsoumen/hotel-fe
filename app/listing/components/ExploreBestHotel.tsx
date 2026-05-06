"use client";
import { useRef } from "react";
import Image from "next/image";
import { Lock, MapPin } from "lucide-react";
import { FaStar } from "react-icons/fa";
import Link from "next/link";
import dualDashArrow from "@/public/images/dualDashArrow.svg"

const hotels = [
  { id: 1, name: "Comfortable Villa Green", location: "Unit 4, 2nd & Brooklyn", price: 1600, image: "https://picsum.photos/seed/exp-h1/400/300" },
  { id: 2, name: "Comfortable Villa Green", location: "Unit 4, 2nd & Brooklyn", price: 2200, image: "https://picsum.photos/seed/exp-h2/400/300" },
  { id: 3, name: "Comfortable Villa Green", location: "Unit 4, 2nd & Brooklyn", price: 1850, image: "https://picsum.photos/seed/exp-h3/400/300" },
  { id: 4, name: "Comfortable Villa Green", location: "Unit 4, 2nd & Brooklyn", price: 2500, image: "https://picsum.photos/seed/exp-h4/400/300" },
  { id: 5, name: "Comfortable Villa Green", location: "Unit 4, 2nd & Brooklyn", price: 1750, image: "https://picsum.photos/seed/exp-h5/400/300" },
];

export default function ExploreBestHotel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === "left" ? -320 : 320, behavior: "smooth" });
  };

  return (
    <section className="py-10">
      <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8 bg-[#FFF6E8] rounded-2xl">
        {/* Header */}
        <div className="flex items-start justify-between mb-8">
          <div>
            <h2 className="section-title">Explore Best Hotel</h2>
            <p className="text-black text-xs mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, lorem ipsum more</p>
          </div>
          <div className="flex gap-2 shrink-0 mt-1">
            <button
              onClick={() => scroll("left")}
              className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#D8A95B] hover:border-[#D8A95B] hover:text-white transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-9 h-9 rounded-full bg-[#D8A95B] flex items-center justify-center text-white hover:bg-[#c99848] transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Scrollable Cards */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto pb-2 scroll-smooth custom-scrollbar"
          style={{ scrollbarWidth: "none" }}
        >
          {hotels.map((hotel) => (
            <div
              key={hotel.id}
              className="shrink-0 w-64 bg-white group card-hover mt-4 first:ml-2"
            >
              <div className="relative h-70">
                <Image src={hotel.image} alt={hotel.name} fill className="rounded-2xl object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent group-hover:scale-105 transition-transform duration-500 rounded-2xl" />
                <Link href="/login" className="group flex items-center gap-4 absolute -right-13 top-3 -translate-x-1/2 border border-white text-white group-hover:bg-[#d8a85b6e] text-[11px] font-medium pl-1.5 pr-4 py-1.5 rounded-full whitespace-nowrap transition-colors">
                  <div className="duration-300 text-white text-xs font-normal bg-[#D8A95B1A] group-hover:bg-[#D8A95B] group-hover:text-white rounded-full p-2">
                    <Lock className="w-3 h-3" />
                  </div>
                  Login to View
                </Link>
                <div className="flex items-start justify-between absolute bottom-0 left-0 right-0 px-3 py-4 bg-[#CDC6C666] backdrop-blur-sm m-2 rounded-2xl">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-1 text-white/70 text-[11px] mt-0.5">
                      <MapPin className="w-3 h-3" />
                      {hotel.location}
                    </div>
                    <h3 className="text-white font-medium text-[14px] leading-tight">{hotel.name}</h3>
                  </div>
                  <Link href="#" className="bg-black hover:bg-[#D8A95B] rounded-full p-3 w-fit transition-all duration-200 cursor-pointer">
                    <Image src={dualDashArrow} alt="dualDashArrow" width={12} height={12} />
                  </Link>
                </div>
              </div>
              {/* <div className="p-3">
                <div className="flex items-center justify-between">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => <FaStar key={i} className="text-[#D8A95B] w-2.5 h-2.5" />)}
                  </div>
                  <span className="text-[#D8A95B] font-semibold text-xs">${hotel.price.toLocaleString()}/person</span>
                </div>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
