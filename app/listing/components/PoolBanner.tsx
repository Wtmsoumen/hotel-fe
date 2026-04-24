import Image from "next/image";
import hotelVidThum from "@/public/images/hotelVidThum.png"
import { Play } from "lucide-react";

export default function PoolBanner() {
  return (
    <section className="relative h-[560px] sm:h-[650px] w-full overflow-hidden">
      <Image
        src={hotelVidThum}
        alt="Luxury Pool"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <button className="border border-white bg-[#FFFFFF4F] hover:bg-[#D8A95B] hover:scale-105 transition-all duration-300 rounded-full p-8">
          <Play className="w-8 h-8 text-white" fill="#ffffff" />
        </button>
      </div>
    </section>
  );
}
