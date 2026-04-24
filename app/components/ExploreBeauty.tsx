import Image from "next/image";
import ExploretheBeautyoftheWorld from "@/public/images/ExploretheBeautyoftheWorld.png";

export default function ExploreBeauty() {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-12">
          {/* Image mosaic */}
          <div className="relative w-[52%]">
            <Image src={ExploretheBeautyoftheWorld} alt={"Explore Beauty"} width={1920} height={1080} className="w-auto h-auto" />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-evenly gap-3 h-[-webkit-fill-available] w-[48%]">
            <div className="flex flex-col gap-4">
              <span className="section-tag mb-0!">About Hotel Booking</span>
              <h2 className="section-title leading-tight text-[48px]! font-medium!">
                Explore the Beauty of the World
              </h2>
              <p className="text-black text-sm leading-relaxed font-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed ipsum ac ipsum dictum elementum in ac mauris. Quisque eleifend lectus purus, vel malesuada nisl euismod egestas. Vivamus eget nisl aliquam, feugiat velit in, vehicula lacus.
              </p>
            </div>
            <button className="btn-amber w-fit inline-flex items-center gap-2 px-8 py-3 rounded-full text-sm font-medium!">
              Explore More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
