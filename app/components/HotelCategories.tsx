"use client";
import { useState } from "react";
import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";
import Link from "next/link";

const tabs = [
  "All",
  "Hotels & Resorts",
  "Beaches & Islands",
  "Spa & Wellness Retreats",
  "Heritage & Cultural Stays",
  "Legendary City",
];

const properties = [
  { id: 1, name: "Luxury Villa Maldives", location: "Maldives", price: 3200, image: "https://picsum.photos/seed/prem1/600/400", type: "Hotels & Resorts" },
  { id: 2, name: "Beachfront Paradise", location: "Phuket, Thailand", price: 1800, image: "https://picsum.photos/seed/prem2/600/400", type: "Beaches & Islands" },
  { id: 3, name: "Mountain Wellness Retreat", location: "Swiss Alps", price: 2400, image: "https://picsum.photos/seed/prem3/600/400", type: "Spa & Wellness Retreats" },
];
export default function HotelCategories() {
  const [activeTab, setActiveTab] = useState("All");

  const filtered = activeTab === "All" ? properties : properties.filter((p) => p.type === activeTab);

  return (
    <section className="relative py-10 bg-[#FFF6E8]">
      {/* Dark bg with image */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="section-title">Hotel Categories</h2>
            <p className="text-black text-xs mt-4 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lobortis mauris purus.
            </p>
          </div>
          <Link
            href="#"
            className="text-xs font-medium hover:underline flex items-center gap-1 shrink-0 group"
          >
            Explore More
            <ArrowRight className="w-4 h-4 text-[#D8A95B] -rotate-45 group-hover:rotate-0 transition-transform" />
          </Link>
        </div>

        {/* Tabs */}
        {/* <div className="flex gap-4 mb-10 overflow-x-auto pb-4 custom-scrollbar whitespace-nowrap">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeTab === tab
                ? "bg-[#D8A95B] text-white shadow-md"
                : "bg-white text-black hover:bg-gray-50 border border-gray-100"
                }`}
            >
              {tab}
            </button>
          ))}
        </div> */}

        {/* Property cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filtered.map((p) => (
            <div key={p.id} className="">
              <div className="relative h-88 rounded-2xl overflow-hidden mb-3">
                <Image src={p.image} alt={p.name} fill className="object-cover" />
                <div className="bg-linear-to-t to-[#00000010] from-[#00000050] z-10 w-full h-full absolute" />
                <span className="absolute z-20 top-3 right-3 bg-white text-black text-[14px] font-normal px-4 py-1 rounded-full">
                  {p.type}
                </span>
                <span className="absolute z-20 bottom-3 left-3 text-white text-[20px] font-medium">{p.name}</span>
              </div>
              <h3 className="font-medium text-[#000000] text-lg mb-1">${p.price.toLocaleString()}</h3>
              <div className="flex items-center gap-1 text-black text-xs mb-1">
                <MapPin className="w-3.5 h-3.5 text-black" />
                {p.location}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}