"use client"
import Image from "next/image";
import UniqueToYou from "@/public/images/UniqueToYou.svg"
import SeamlessService from "@/public/images/SeamlessService.svg"
import CarefullyCurated from "@/public/images/CarefullyCuratedCollection.svg"
import LuxuryHotel from "@/public/images/LuxuryHotel.svg"
import UniqueToYouColor from "@/public/images/UniqueToYouColor.svg"
import SeamlessServiceColor from "@/public/images/SeamlessServiceColor.svg"
import CarefullyCuratedColor from "@/public/images/CarefullyCuratedCollectionColor.svg"
import LuxuryHotelColor from "@/public/images/LuxuryHotelColor.svg"
import { useState } from "react";


const steps = [
  {
    icon: UniqueToYou,
    iconColor: UniqueToYouColor,
    title: "Unique to You",
    desc: "Lorem ipsum dolor sit amet, consectetur.",
  },
  {
    icon: SeamlessService,
    iconColor: SeamlessServiceColor,
    title: "Seamless Service",
    desc: "Lorem ipsum dolor sit amet, consectetur.",
  },
  {
    icon: CarefullyCurated,
    iconColor: CarefullyCuratedColor,
    title: "Carefully Curated Collection",
    desc: "Lorem ipsum dolor sit amet, consectetur.",
  },
  {
    icon: LuxuryHotel,
    iconColor: LuxuryHotelColor,
    title: "Luxury Hotel",
    desc: "Lorem ipsum dolor sit amet, consectetur.",
  },
];

export default function HowItWorks() {
  const [hoverOnCard, setHoverOnCard] = useState("");
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="section-tag">What we do</span>
          <h2 className="section-title mb-3">How It Works</h2>
          {/* <span className="underline-amber mx-auto" /> */}
          {/* <p className="text-black mt-5 text-sm max-w-lg mx-auto leading-relaxed">
            We make every part of your travel experience extraordinary, from the first search to checkout
          </p> */}
          <div className="flex justify-center gap-2">
            <div className="border-b border-[#D8A95B] w-20" />
            <div className="border-b border-[#D8A95B] w-4" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <div key={i} className="relative group">
              <div
                className="flex flex-col gap-3 bg-white items-center text-center cursor-default py-8 px-6 rounded-2xl group-hover:shadow-lg shadow-sm transition-shadow h-[-webkit-fill-available] relative z-10"
                onMouseEnter={() => setHoverOnCard(s.title)}
                onMouseLeave={() => setHoverOnCard("")}
              >
                {/* Icon circle */}
                <Image src={hoverOnCard === s.title ? s.iconColor : s.icon} alt="Unique to you" width={72} height={72} />
                <h3 className="font-medium text-[#000000] text-lg mt-4">{s.title}</h3>
                <p className="text-black text-xs font-light leading-relaxed">{s.desc}</p>
              </div>
              <div className="absolute -bottom-4 -left-4 group-hover:w-25 group-hover:h-25 w-0 h-0 bg-[#D8A95B] rounded-tl-4xl rounded-br-4xl transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
