import arrowThreeDash from "../../../public/images/arrowThreeDash.svg"
import search from "../../../public/images/search.svg"
import searchColor from "../../../public/images/searchColor.svg"
import expart from "../../../public/images/expart.svg"
import expartColor from "../../../public/images/expartColor.svg"
import chat from "../../../public/images/chat.svg"
import chatColor from "../../../public/images/chatColor.svg"
import trip from "../../../public/images/trip.svg"
import tripColor from "../../../public/images/tripColor.svg"
import moveRound from "../../../public/images/moveRound.svg"
import moveRoundColor from "../../../public/images/moveRoundColor.svg"
import Image from "next/image"

const steps = [
  {
    label: "Make an Enquiry",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc erat urna.",
    icon: search,
    iconColor: searchColor,
  },
  {
    label: "Speak to an Expert",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc erat urna",
    icon: expart,
    iconColor: expartColor,
  },
  {
    label: "Receive a Quote",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc erat urna",
    icon: chat,
    iconColor: chatColor,
  },
  {
    label: "Book Your Trip",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc erat urna",
    icon: trip,
    iconColor: tripColor,
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

        <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8 md:gap-0">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col md:flex-row items-center flex-1 group w-full md:w-auto">
              {/* Step card */}
              <div className="flex flex-col items-center text-center px-4 max-w-[280px] md:max-w-[200px]">
                {/* Circle icon */}
                <div className="relative flex items-center justify-center mb-6 md:mb-0">
                  <Image src={step.icon} alt="icon" width={160} height={160} className="flex group-hover:hidden absolute w-16 h-16 md:w-20 md:h-20" />
                  <Image src={step.iconColor} alt="iconColor" width={160} height={160} className="hidden group-hover:flex absolute w-16 h-16 md:w-20 md:h-20" />
                  <Image src={moveRound} alt="moveRound" width={320} height={320} className="flex group-hover:hidden w-32 h-32 md:w-40 md:h-40 animate-spin [animation-duration:50s]" />
                  <Image src={moveRoundColor} alt="moveRoundColor" width={320} height={320} className="hidden group-hover:flex w-32 h-32 md:w-40 md:h-40 animate-spin [animation-duration:50s]" />
                </div>
                <div className="mt-4 md:mt-0">
                  <p className="text-lg md:text-base font-semibold text-black mb-2">{step.label}</p>
                  <p className="text-xs text-gray-500 font-light leading-relaxed px-2">{step.desc}</p>
                </div>
              </div>
              {/* Arrow connector */}
              {i < steps.length - 1 && (
                <div className="hidden lg:flex items-center justify-center mx-2 lg:-mt-20">
                  <Image src={arrowThreeDash} alt="arrowThreeDash" width={100} height={100} className="w-8 lg:w-10 h-auto opacity-40" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <button className="btn-amber px-8 py-3 rounded-full text-base font-medium! uppercase w-fit">
            Enquire Now
          </button>
        </div>
      </div>
    </section>
  );
}
