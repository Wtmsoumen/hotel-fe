import Image from "next/image";
import ExploretheBeautyoftheWorld from "@/public/images/ExploretheBeautyoftheWorld.png";

export default function ExploreBeauty() {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12">
          {/* Image mosaic */}
          <div className="relative w-full lg:w-[52%]">
            <Image src={ExploretheBeautyoftheWorld} alt={"Explore Beauty"} width={1920} height={1080} className="w-full h-auto rounded-2xl" />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center gap-6 w-full lg:w-[48%]">
            <div className="flex flex-col gap-4">
              <span className="section-tag mb-0">About Hotel Booking</span>
              <h2 className="section-title leading-tight text-3xl sm:text-4xl lg:text-[48px] font-medium">
                Explore the Beauty of the World
              </h2>
              <p className="text-black text-sm sm:text-base leading-relaxed font-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed ipsum ac ipsum dictum elementum in ac mauris. Quisque eleifend lectus purus, vel malesuada nisl euismod egestas. Vivamus eget nisl aliquam, feugiat velit in, vehicula lacus.
              </p>
            </div>
            <button className="btn-amber w-full sm:w-fit inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full text-sm font-medium">
              Explore More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
