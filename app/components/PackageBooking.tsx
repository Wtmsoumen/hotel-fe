import { Phone, PhoneCall } from "lucide-react";
import Link from "next/link";

export default function PackageBooking() {
  return (
    <section className="pt-25">
      <div className="relative">
        {/* Booking Form */}
        <div className="absolute left-[8%] -top-22 z-15 bg-[#FFF8ED] p-8 sm:p-12 w-1/3">
          <span className="section-tag">Connect with us</span>
          <h2 className="section-title mb-4">Package Booking</h2>

          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                {/* <label className="block text-xs font-semibold text-black mb-1.5">First Name</label> */}
                <input
                  type="text"
                  placeholder="Your First Name*"
                  className="w-full border border-gray-200 rounded px-4 py-2.5 text-sm outline-none focus:border-[#D8A95B] transition-colors"
                />
              </div>
              <div>
                {/* <label className="block text-xs font-semibold text-black mb-1.5">Last Name</label> */}
                <input
                  type="text"
                  placeholder="Your Last Name*"
                  className="w-full border border-gray-200 rounded px-4 py-2.5 text-sm outline-none focus:border-[#D8A95B] transition-colors"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                {/* <label className="block text-xs font-semibold text-black mb-1.5">Email Address</label> */}
                <input
                  type="email"
                  placeholder="Email Address*"
                  className="w-full border border-gray-200 rounded px-4 py-2.5 text-sm outline-none focus:border-[#D8A95B] transition-colors"
                />
              </div>

              <div>
                {/* <label className="block text-xs font-semibold text-black mb-1.5">Phone Number</label> */}
                <input
                  type="tel"
                  placeholder="Phone Number*"
                  className="w-full border border-gray-200 rounded px-4 py-2.5 text-sm outline-none focus:border-[#D8A95B] transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                {/* <label className="block text-xs font-semibold text-black mb-1.5">Check-in Date</label> */}
                <input
                  type="date"
                  placeholder="Date Arrival"
                  className="w-full border border-gray-200 rounded px-4 py-2.5 text-sm outline-none focus:border-[#D8A95B] transition-colors text-gray-600"
                />
              </div>
              <div>
                {/* <label className="block text-xs font-semibold text-black mb-1.5">Check-out Date</label> */}
                <input
                  type="date"
                  placeholder="Date Departure"
                  className="w-full border border-gray-200 rounded px-4 py-2.5 text-sm outline-none focus:border-[#D8A95B] transition-colors text-gray-600"
                />
              </div>
            </div>

            <div>
              <textarea placeholder="Your Message" className="w-full max-h-25 h-25 border border-gray-200 rounded px-4 py-2.5 text-sm outline-none focus:border-[#D8A95B] transition-colors text-gray-600"></textarea>
            </div>

            <button
              type="submit"
              className="w-full btn-amber py-3 rounded text-sm font-semibold mt-2"
            >
              Submit Booking Request
            </button>
          </form>
        </div>

        {/* Check Availability */}
        <div className="w-full flex justify-end h-140">
          <div
            className="relative p-8 sm:p-12 flex flex-col items-center justify-center h-full w-[80%]"
            style={{
              backgroundImage: "url('/images/pbBgimg.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0" style={{ background: "rgba(0, 0, 0, 0.88)" }} />

            <div className="flex items-end justify-end w-full">
              <div className="relative z-10 w-[60%] pl-4 sm:pl-6 lg:pl-[10%]">
                <span className="section-tag">Hotel Booking</span>
                <h2 className="section-title mb-4 text-white!">Check Availability</h2>

                <p className="text-white/80 text-sm font-light mb-4 w-3/4 flex flex-col gap-7">
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id feugiat est. Suspendisse ultricies sapien vel accumsan aliquam.
                  </span>
                  <span>
                    Integer dictum vel orci in aliquet. Proin a elementum quam. Aliquam tincidunt vestibulum blandit. Sed at lectus ornare urna dictum aliquam. Donec quis rutrum mauris.
                  </span>
                  <span className="flex items-center gap-3.5">
                    <span className="w-full rounded-full border border-[#D8A95B]" />
                    <span className="w-[15%] border border-[#D8A95B]" />
                  </span>
                </p>
                <div className="flex flex-row gap-4 mt-6">
                  <PhoneCall strokeWidth={1} className="w-10 h-10 text-[#D8A95B] mt-2" />
                  <div className="flex flex-col gap-2">
                    <p className="text-white/80 text-sm font-light">
                      BOOKING NOW :
                    </p>
                    <Link href={"tel:+01 234 567 890"} className="text-white font-normal text-2xl">
                      +01 234 567 890
                    </Link>
                    <Link href={"tel:+01 234 567 890"} className="text-white font-normal text-2xl">
                      +01 234 567 890
                    </Link>
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
