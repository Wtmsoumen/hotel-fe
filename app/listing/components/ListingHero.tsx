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
        style={{ backgroundImage: "url('/images/listing1.webp')" }}
      />
      <div className="absolute inset-0 bg-linear-to-t to-[#001422E5] via-[#00427462] from-[#00427400]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center flex-1 pt-20 sm:pt-32 pb-0 max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center mb-12 sm:mb-23">
          <h1 className="text-white font-bold text-4xl sm:text-6xl lg:text-[72px] uppercase leading-tight mb-4">
            Premium Experiences
          </h1>
          <p className="text-white text-base sm:text-lg max-w-2xl">
            Discover extraordinary stays curated for every kind of traveller
          </p>
        </div>

        {/* Search Card */}
        <div className="bg-white rounded-3xl shadow-2xl lg:absolute lg:bottom-[-4em] lg:left-0 lg:right-0 mx-auto w-full lg:w-[94.25%] overflow-visible">
          {/* Tabs */}
          <div className="flex lg:flex-row overflow-x-auto scrollbar-hide rounded-full lg:w-fit w-[96%] px-4 sm:px-5 shadow-lg mt-[-24px] relative z-10 bg-white mx-auto border border-gray-100">
            {tabs.map((tab, i) => (
              <button
                key={tab}
                onClick={() => setActiveTab(i)}
                className={`shrink-0 px-4 sm:px-5 py-3.5 text-[10px] sm:text-xs font-semibold transition-all whitespace-nowrap ${activeTab === i
                  ? "text-[#D8A95B] border-b-2 border-[#D8A95B]"
                  : "text-gray-500 hover:text-[#D8A95B]"
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Search Fields */}
          <div className="p-6 lg:p-5 flex flex-col lg:flex-row items-center gap-6 lg:gap-4">
            <div className="flex flex-col lg:flex-row items-center gap-6 w-full">
              <p className="w-full lg:w-[15%] text-lg lg:text-[20px] font-bold text-black text-center lg:text-left leading-tight">Find your next Stay</p>
              {/* Destination */}
              <div className="w-full lg:w-[85%] flex items-center gap-3 border border-gray-100 bg-gray-50/50 rounded-full px-6 py-4 lg:py-4.5 focus-within:border-[#D8A95B] focus-within:bg-white transition-all shadow-sm">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search for hotels, destinations..."
                  className="w-full text-sm sm:text-base text-gray-700 outline-none placeholder-gray-400 bg-transparent"
                />
              </div>
            </div>

            {/* Search Button */}
            <button className="btn-amber w-full lg:w-14 lg:h-14 py-4 lg:py-0 rounded-full flex items-center justify-center shrink-0 shadow-lg hover:shadow-[#D8A95B]/20 transition-all">
              <svg className="hidden lg:block w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span className="lg:hidden font-semibold">Search Now</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
