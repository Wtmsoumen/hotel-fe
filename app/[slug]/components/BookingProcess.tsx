import arrowThreeDash from "../../../public/images/arrowThreeDash.svg"
import search from "../../../public/images/search.svg"
import expartColor from "../../../public/images/expartColor.svg"
import chat from "../../../public/images/chat.svg"
import trip from "../../../public/images/trip.svg"
import moveRound from "../../../public/images/moveRound.svg"
import Image from "next/image"

const steps = [
  {
    label: "Make an Enquiry",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.",
    icon: search,
  },
  {
    label: "Speak to an Expert",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.",
    icon: expartColor,
  },
  {
    label: "Receive a Quote",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.",
    icon: chat,
  },
  {
    label: "Book Your Trip",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.",
    icon: trip,
  },
];

export default function BookingProcess() {
  return (
    <section className="py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="section-tag">Booking Process</span>
          <h2 className="section-title mb-3">Our Booking Process</h2>
          <div className="flex justify-center gap-2">
            <div className="border-b border-[#D8A95B] w-20" />
            <div className="border-b border-[#D8A95B] w-4" />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start justify-center gap-0">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col sm:flex-row items-center flex-1">
              {/* Step card */}
              <div className="flex flex-col items-center text-center px-4 max-w-[200px]">
                {/* Circle icon */}
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${i === 0 ? "bg-[#D8A95B]" : "border-2 border-[#D8A95B]"}`}>
                  <svg className={`w-7 h-7 ${i === 0 ? "text-white" : "text-[#D8A95B]"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d={step.icon} />
                  </svg>
                </div>
                <p className="text-sm font-semibold text-black mb-2">{step.label}</p>
                <p className="text-xs text-gray-400 leading-relaxed">{step.desc}</p>
              </div>

              {/* Arrow connector */}
              {i < steps.length - 1 && (
                <div className="hidden sm:flex items-center justify-center mx-2 mt-[-48px]">
                  <Image src={arrowThreeDash} alt="arrowThreeDash" width={24} height={24} />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <button className="btn-amber px-8 py-4 rounded-full text-base font-medium! uppercase w-fit">
            Enquire Now
          </button>
        </div>
      </div>
    </section>
  );
}
