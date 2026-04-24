"use client";
import { useState } from "react";

const tabs = ["All", " Family Stays", "Beaches & Islands", "Spa & Wellness Retreats", "Heritage & Cultural Stays", "Legendary City"];

export default function ListingHero() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="relative min-h-[75vh] flex flex-col">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/listing1.png')" }}
      />
      <div className="absolute inset-0 bg-linear-to-t to-[#001422E5] via-[#00427462] from-[#00427400]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center flex-1 pt-32 pb-0 max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center mb-23">
          <h1 className="text-white font-bold text-[56px] sm:text-[72px] uppercase leading-tight mb-1">
            Premium Experiences
          </h1>
          <p className="text-white text-base sm:text-lg">
            Discover extraordinary stays curated for every kind of traveller
          </p>
        </div>

        {/* Search Card */}
        <div className="bg-white rounded-2xl shadow-xl absolute bottom-[-4em] w-[94.25%]">
          {/* Tabs */}
          <div className="flex border-b border-gray-100 scrollbar-hide rounded-full w-fit px-5 shadow-lg mt-[-24px] relative z-10 bg-white mx-auto">
            {tabs.map((tab, i) => (
              <button
                key={tab}
                onClick={() => setActiveTab(i)}
                className={`shrink-0 px-5 py-3.5 text-xs font-medium transition-colors whitespace-nowrap ${activeTab === i
                  ? "text-[#D8A95B] border-b-2 border-[#D8A95B]"
                  : "text-gray-500 hover:text-[#D8A95B]"
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Search Fields */}
          <div className="p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full">
              <p className="w-[15%] text-[20px] font-semibold text-black mb-1.5">Find your next<br />Stay</p>
              {/* Destination */}
              <div className="w-[85%] flex items-center gap-2 border border-gray-200 rounded-full px-3 py-4 focus-within:border-[#D8A95B] transition-colors">
                <input
                  type="text"
                  placeholder="Search for hotels..."
                  className="w-full text-sm text-gray-700 outline-none placeholder-gray-400 bg-transparent"
                />
              </div>
            </div>

            {/* Search Button */}
            <button className="btn-amber w-12 h-12 rounded-full flex items-center justify-center shrink-0">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
