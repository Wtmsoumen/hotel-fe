"use client"
import { Check } from "lucide-react";
import { FaStar } from "react-icons/fa";

interface Props { name: string; rating: number; reviewCount: number }

export default function HotelInfoBadges({ name, rating, reviewCount }: Props) {


  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-6 -mt-8.5 flex items-end justify-between">
      {/* Name + Stars */}
      <div className="">
        <h2 className="text-4xl font-medium text-black mb-4">{name}</h2>
        <div className="flex items-center gap-2 mb-5">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className={`w-3.5 h-3.5 ${i < Math.floor(rating) ? "text-black" : "text-gray-200"}`} />
            ))}
          </div>
          <span className="text-sm text-gray-500">{rating} ({reviewCount} Reviews)</span>
        </div>
        {/* Badges */}
        <div className="flex items-center py-7 border-y border-[#00000050]">
          <div className="flex flex-wrap gap-4">
            {/* Superhost */}
            <div className="flex items-center gap-2.5 rounded-xl px-4 py-3">
              <div className="w-8 h-8 rounded-full bg-[#FFF6E8] flex items-center justify-center">
                <Check className="w-4 h-4 text-[#D8A95B]" />
              </div>
              <div>
                <p className="text-xs font-semibold text-black">Latiga is a Superhost</p>
                <p className="text-[11px] text-black">Superhosts are experienced, highly rated Hosts.</p>
              </div>
            </div>
          </div>

          {/* Free cancellation */}
          <div className="flex items-center gap-2.5 rounded-xl px-4 py-3">
            <div className="w-8 h-8 rounded-full bg-[#FFF6E8] flex items-center justify-center">
              <Check className="w-4 h-4 text-[#D8A95B]" />
            </div>
            <div>
              <p className="text-xs font-semibold text-black">Free cancellation for 48 hours</p>
              <p className="text-[11px] text-black">Get a full refund if you change your mind.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-2">
        <div className="border border-[#00000030] rounded-2xl w-40 h-40 overflow-hidden relative">
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

          {/* Button */}
          <button className="absolute bottom-2 w-[90%] left-[5%] bg-white shadow-sm border-b border-[#00000030] rounded-full py-2 text-[12px] font-normal text-black hover:bg-gray-50 transition-colors">
            All Reviews
          </button>
        </div>
        <div className="border border-[#00000030] rounded-2xl p-2 w-40 h-40 flex flex-col justify-between">
          <div className="flex flex-col items-start gap-1">
            <div className="bg-black text-white rounded-lg w-16 h-16 flex items-center justify-center">
              <span className="text-lg font-bold">4.2</span>
            </div>

            {/* Label */}
            <div>
              <p className="text-sm font-medium text-black leading-tight">Very Good</p>
              <p className="text-[10px] text-black leading-tight">Based on 909 Ratings</p>
            </div>
          </div>

          {/* Button */}
          <button className="w-full bg-white shadow-sm border-b border-[#00000030] rounded-full py-2 text-[12px] font-normal text-black hover:bg-gray-50 transition-colors">
            All Reviews
          </button>
        </div>
      </div>
    </div>
  );
}
