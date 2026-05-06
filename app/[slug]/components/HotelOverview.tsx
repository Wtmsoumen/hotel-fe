"use client"
import LuxuryHotelIcon from "@/public/images/LuxuryHotel.svg";
import SeamlessServiceIcon from "@/public/images/SeamlessService.svg";
import CarefullyCuratedIcon from "@/public/images/CarefullyCuratedCollection.svg";
import UniqueToYouIcon from "@/public/images/UniqueToYou.svg";

import LuxuryHotelColor from "@/public/images/LuxuryHotelColor.svg";
import SeamlessServiceColor from "@/public/images/SeamlessServiceColor.svg";
import CarefullyCuratedColor from "@/public/images/CarefullyCuratedCollectionColor.svg";
import UniqueToYouColor from "@/public/images/UniqueToYouColor.svg";
import Image from "next/image";
import { useState } from "react";

const features = [
  { icon: UniqueToYouIcon, iconHover: UniqueToYouColor, label: "Unique to You", desc: "Lorem ipsum dolor sit amet, consectetur." },
  { icon: SeamlessServiceIcon, iconHover: SeamlessServiceColor, label: "Seamless Service", desc: "Lorem ipsum dolor sit amet, consectetur." },
  { icon: CarefullyCuratedIcon, iconHover: CarefullyCuratedColor, label: "Carefully Curated Collection", desc: "Lorem ipsum dolor sit amet, consectetur." },
  { icon: LuxuryHotelIcon, iconHover: LuxuryHotelColor, label: "Luxury Hotel", desc: "Lorem ipsum dolor sit amet, consectetur." },
];

export default function HotelOverview() {

  const [hoverFeatures, setHoverFeatures] = useState("");

  return (
    <section id="overview" className="py-10 scroll-mt-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl font-medium text-black mb-4">Over View</h3>
        <div className="text-sm text-black leading-relaxed space-y-4 mb-6">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium quis magna a malesuada. Donec molestie turpis non diam viverra, et varius lacus vulputate. Maecenas facilisis condimentum nisl id consectetur. Duis dignissim nisl a libero ornare, eget laoreet tortor cursus. Cras quis dolor commodo, fringilla ex eget, tempus dui. Nulla rhoncus malesuada nisl, at accumsan lacus ultrices nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br />
            <br />
            Vivamus maximus justo nunc, vitae ornare ante egestas vitae. Duis tincidunt mi libero, eget venenatis diam faucibus a. Aenean at eros maximus, efficitur lectus in, maximus sapien. Fusce mauris urna, tristique a lorem ut, placerat ullamcorper libero.
          </p>
          <br />
          <h2 className="flex items-center gap-2 text-2xl font-medium text-black"><div className="w-1.5 h-1.5 bg-black rounded-full" /> Donec molestie turpis non diam viverra, et varius lacus vulputate.</h2>
          <p>
            Proin placerat nibh at ex aliquet dictum. Cras vehicula erat interdum sem egestas ultrices. Nunc scelerisque pellentesque augue euismod gravida. Curabitur laoreet risus sit amet felis pulvinar, sed tincidunt elit tristique. Aliquam scelerisque aliquam diam et ultricies. Sed vitae maximus libero. Cras aliquet finibus nibh non eleifend. Nunc et suscipit purus. Duis malesuada sapien nunc. Ut at pellentesque leo.
            <br />
            <br />
            Mauris leo tortor, consequat vel sem in, viverra viverra est. Nulla facilisi. Suspendisse potenti. Ut sagittis libero at scelerisque faucibus. Praesent bibendum dui at ultricies porttitor.
            <br />
            <br />
            Duis ac massa ultrices, tristique quam nec, sodales diam. Sed sit amet purus ipsum. Proin sed molestie velit. Donec nec dignissim metus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus suscipit efficitur odio vel varius.
            <br />
            <br />
            Nullam consequat cursus massa, nec hendrerit dolor suscipit sit amet. Mauris at ullamcorper arcu, nec rhoncus diam. Suspendisse eu hendrerit lorem. Sed pretium non mi et auctor. Cras vitae enim lobortis, porta dui id, facilisis sem.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
          {features.map((f) => (
            <div
              key={f.label}
              onMouseEnter={() => setHoverFeatures(f.label)}
              onMouseLeave={() => setHoverFeatures("")}
              className="bg-white border border-gray-100 rounded-2xl px-5 py-8 shadow-sm flex flex-col items-center text-center gap-3 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 relative">
                <Image src={hoverFeatures === f.label ? f.iconHover : f.icon} alt={f.label} fill className="object-contain" />
              </div>
              <p className="text-lg font-semibold text-black">{f.label}</p>
              <p className="text-[11px] text-black leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
