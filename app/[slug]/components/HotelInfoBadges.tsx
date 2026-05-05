"use client"
import { Check } from "lucide-react";
import { FaStar } from "react-icons/fa";

interface Props { name: string; rating: number; reviewCount: number }

export default function HotelInfoBadges({ name, rating, reviewCount }: Props) {


  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 mt-6 sm:mt-8 lg:mt-10 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
      {/* Name + Stars */}
      <div className="flex-1">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-black mb-4">{name}</h2>
        <div className="flex items-center gap-3 mb-6">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className={`w-4 h-4 ${i < Math.floor(rating) ? "text-[#D8A95B]" : "text-gray-200"}`} />
            ))}
          </div>
          <span className="text-sm font-medium text-gray-600">{rating} <span className="text-gray-400">({reviewCount} Reviews)</span></span>
        </div>

        {/* Badges container */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center py-6 border-y border-gray-200 gap-4 sm:gap-8">
          {/* Superhost */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#FFF6E8] flex items-center justify-center shrink-0">
              <Check className="w-5 h-5 text-[#D8A95B]" />
            </div>
            <div>
              <p className="text-sm font-semibold text-black">Latiga is a Superhost</p>
              <p className="text-xs text-gray-500">Experienced, highly rated Host.</p>
            </div>
          </div>

          {/* Free cancellation */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#FFF6E8] flex items-center justify-center shrink-0">
              <Check className="w-5 h-5 text-[#D8A95B]" />
            </div>
            <div>
              <p className="text-sm font-semibold text-black">Free cancellation</p>
              <p className="text-xs text-gray-500">Full refund within 48 hours.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side Cards */}
      <div className="flex flex-row sm:flex-row gap-4 w-full lg:w-auto">
        <div className="flex-1 lg:flex-none border border-gray-200 rounded-2xl w-full lg:w-44 h-44 overflow-hidden relative shadow-sm">
          <iframe
            src="https://maps.google.com/maps?q=22.5481474,88.3991694&z=15&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="JW Marriott Hotel Kolkata"
          />
          <button className="absolute bottom-3 w-[90%] left-[5%] bg-white/90 backdrop-blur-sm shadow-md rounded-full py-2.5 text-xs font-semibold text-black hover:bg-white transition-all">
            View Map
          </button>
        </div>

        <div className="flex-1 lg:flex-none border border-gray-200 rounded-2xl p-4 w-full lg:w-44 h-44 flex flex-col justify-between shadow-sm bg-white">
          <div className="flex flex-col items-start gap-3">
            <div className="bg-[#16191C] text-white rounded-xl w-14 h-14 flex items-center justify-center shadow-lg">
              <span className="text-xl font-bold">4.2</span>
            </div>
            <div>
              <p className="text-sm font-bold text-black">Very Good</p>
              <p className="text-[11px] text-gray-500">Based on 909 Ratings</p>
            </div>
          </div>
          <button className="w-full bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-full py-2.5 text-xs font-semibold text-black transition-all">
            All Reviews
          </button>
        </div>
      </div>
    </div>
  );
}
