import Image from "next/image";
import Peaceofmind from "../../../public/images/PlanWithPeaceofMind.png"

export default function PlanYourTrip() {
  return (
    <section className="py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-sm text-black leading-relaxed mb-6">
          <h2 className="section-title mb-3">Plan your trip</h2>
          <p>
            Vivamus maximus justo nunc, vitae ornare ante egestas vitae. Duis tincidunt mi libero, eget venenatis diam faucibus a. Aenean at eros maximus, efficitur lectus in, maximus sapien. Fusce mauris urna, tristique a lorem ut, placerat ullamcorper libero.
          </p>
          <p className="mt-3">
            Nulla facilisi. Suspendisse potenti. Ut sagittis libero at scelerisque faucibus. Praesent bibendum dui at ultricies porttitor.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 mt-12 lg:mt-20">
          {/* Image collage */}
          <div className="lg:w-1/2 w-full">
            <Image src={Peaceofmind} alt="Peaceofmind" className="w-full h-auto rounded-2xl shadow-md" />
          </div>

          {/* Text */}
          <div className="flex flex-col w-full lg:w-1/2">
            <div className="text-left mb-4">
              <span className="section-tag">Discount </span>
              <h2 className="section-title mb-3">Plan with peace<br />of mind</h2>
              <div className="flex items-center justify-start gap-2">
                <div className="border-b-2 border-[#D8A95B] w-16" />
                <div className="border-b-2 border-[#D8A95B] w-4" />
                <div className="border-b-2 border-[#D8A95B] w-4" />
              </div>
            </div>
            <p className="text-sm text-black leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lobortis mauris purus, vitae ornare.
            </p>
            <button className="btn-amber px-8 py-4 rounded-full text-base font-medium! uppercase w-fit">
              Start Planning
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
