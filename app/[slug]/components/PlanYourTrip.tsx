import Image from "next/image";

export default function PlanYourTrip() {
  return (
    <section className="py-12 bg-[#FFF6E8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-sm text-gray-600 leading-relaxed mb-6 max-w-2xl">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget nisl aliquam, feugiat velit in, vehicula lacus. Etiam fermentum velit ut lorem consequat, sit amet vestibulum purus tincidunt.
          </p>
          <p className="mt-3">
            Fullo facilisis Rapportant pretend of cogitos Sine Interloque tacionatus. Praesent dicin sit alter partitution.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Image collage */}
          <div className="relative w-full lg:w-[45%] h-72 sm:h-80 shrink-0">
            <div className="absolute top-0 left-0 w-[65%] h-full rounded-2xl overflow-hidden shadow-lg">
              <Image src="https://picsum.photos/seed/plan-trip-1/500/400" alt="Plan trip" fill className="object-cover" />
            </div>
            <div className="absolute top-8 right-0 w-[42%] h-[60%] rounded-2xl overflow-hidden shadow-lg border-4 border-white">
              <Image src="https://picsum.photos/seed/plan-trip-2/400/300" alt="Plan trip 2" fill className="object-cover" />
            </div>
          </div>

          {/* Text */}
          <div className="flex-1">
            <h2 className="text-3xl sm:text-4xl font-bold text-black leading-tight mb-4">
              Plan with peace<br />of mind
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie turpis non diam viverra, et varius lacus vulputate. Praesent accumsan congue mauris, non consectetur lorem consequat.
            </p>
            <button className="btn-amber px-8 py-3 rounded-full text-sm font-semibold">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
