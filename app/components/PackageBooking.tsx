import { Phone, PhoneCall } from "lucide-react";
import Link from "next/link";

export default function PackageBooking() {
  return (
    <section className="pt-20 lg:pt-25">
      <div className="relative flex flex-col lg:block">
        {/* Booking Form */}
        <div className="relative lg:absolute lg:left-[8%] lg:-top-22 z-20 bg-[#FFF8ED] p-8 sm:p-12 w-full lg:w-[35%] shadow-xl order-2 lg:order-none">
          <span className="section-tag">Connect with us</span>
          <h2 className="section-title mb-6">Package Booking</h2>

          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your First Name*"
                className="w-full border border-gray-200 rounded px-4 py-3 text-sm outline-none focus:border-[#D8A95B] transition-colors bg-white"
              />
              <input
                type="text"
                placeholder="Your Last Name*"
                className="w-full border border-gray-200 rounded px-4 py-3 text-sm outline-none focus:border-[#D8A95B] transition-colors bg-white"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Email Address*"
                className="w-full border border-gray-200 rounded px-4 py-3 text-sm outline-none focus:border-[#D8A95B] transition-colors bg-white"
              />
              <input
                type="tel"
                placeholder="Phone Number*"
                className="w-full border border-gray-200 rounded px-4 py-3 text-sm outline-none focus:border-[#D8A95B] transition-colors bg-white"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="date"
                className="w-full border border-gray-200 rounded px-4 py-3 text-sm outline-none focus:border-[#D8A95B] transition-colors text-gray-600 bg-white"
              />
              <input
                type="date"
                className="w-full border border-gray-200 rounded px-4 py-3 text-sm outline-none focus:border-[#D8A95B] transition-colors text-gray-600 bg-white"
              />
            </div>

            <textarea
              placeholder="Your Message"
              className="w-full h-32 border border-gray-200 rounded px-4 py-3 text-sm outline-none focus:border-[#D8A95B] transition-colors text-gray-600 bg-white resize-none"
            ></textarea>

            <button
              type="submit"
              className="w-full btn-amber py-4 rounded-full text-sm font-semibold mt-2 transition-all hover:shadow-lg"
            >
              Submit Booking Request
            </button>
          </form>
        </div>

        {/* Check Availability */}
        <div className="w-full flex justify-center lg:justify-end min-h-[500px] lg:h-[600px] order-1 lg:order-none">
          <div
            className="relative p-8 sm:p-12 lg:p-20 flex flex-col items-center justify-center h-full w-full lg:w-[85%]"
            style={{
              backgroundImage: "url('/images/pbBgimg.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0" style={{ background: "rgba(0, 0, 0, 0.88)" }} />

            <div className="flex flex-col lg:items-end justify-center w-full relative z-10">
              <div className="w-full lg:w-[55%] lg:pl-10">
                <span className="section-tag">Hotel Booking</span>
                <h2 className="section-title mb-6 text-white!">Check Availability</h2>

                <p className="text-white/80 text-sm sm:text-base font-light mb-8 flex flex-col gap-6">
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id feugiat est. Suspendisse ultricies sapien vel accumsan aliquam.
                  </span>
                  <span>
                    Integer dictum vel orci in aliquet. Proin a elementum quam. Aliquam tincidunt vestibulum blandit. Sed at lectus ornare urna dictum aliquam. Donec quis rutrum mauris.
                  </span>
                </p>

                <div className="flex items-center gap-4 mb-10">
                  <div className="h-px bg-[#D8A95B] flex-1" />
                  <div className="h-px bg-[#D8A95B] w-12" />
                </div>

                <div className="flex flex-col sm:flex-row gap-6 mt-6">
                  <div className="p-3 rounded-full bg-[#D8A95B]/10 w-fit h-fit">
                    <PhoneCall strokeWidth={1.5} className="w-8 h-8 text-[#D8A95B]" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-white/60 text-xs font-semibold uppercase tracking-wider">
                      BOOKING NOW :
                    </p>
                    <div className="flex flex-col gap-1">
                      <Link href="tel:+01234567890" className="text-white font-medium text-xl sm:text-2xl hover:text-[#D8A95B] transition-colors">
                        +01 234 567 890
                      </Link>
                      <Link href="tel:+01234567890" className="text-white font-medium text-xl sm:text-2xl hover:text-[#D8A95B] transition-colors">
                        +01 234 567 891
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
