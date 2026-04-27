"use client";
import Image from "next/image";

interface Props {
  images: string[];
  pricePerNight: number;
  rating: number;
  reviewCount: number;
}

export default function HotelGalleryBooking({ images, pricePerNight, rating, reviewCount }: Props) {
  const nights = 3;
  const serviceFee = 2645;
  const total = pricePerNight * nights + serviceFee;

  return (
    <section className="pt-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Gallery */}
          <div className="flex flex-col sm:flex-row gap-3 w-full h-auto sm:h-[400px] lg:h-[450px]">
            {/* Main image */}
            <div className="relative w-full sm:w-[70%] h-[250px] sm:h-full rounded-2xl overflow-hidden shadow-sm">
              <Image src={images[0]} alt="Hotel main" fill className="object-cover" priority />
            </div>
            {/* Thumbnails 2x2 or 4 grid */}
            <div className="grid grid-cols-4 sm:flex sm:flex-col gap-2 w-full sm:w-[30%] h-auto sm:h-full">
              {images.slice(1, 5).map((src, i) => (
                <div key={i} className="relative w-full aspect-square sm:aspect-auto sm:h-full rounded-xl overflow-hidden shadow-sm">
                  <Image src={src} alt={`Hotel view ${i + 2}`} fill className="object-cover hover:scale-110 transition-transform duration-500" />
                </div>
              ))}
            </div>
          </div>

          {/* Booking Widget */}
          <div className="w-full lg:w-80 shrink-0">
            <div className="bg-white rounded-2xl shadow-lg border border-[#413A3D] p-5 sticky top-24">
              {/* Date Inputs */}
              <div className="border border-[#808080] rounded-[10px] mb-4">
                <div className="grid grid-cols-2 gap-3">
                  <div className="border-r border-[#808080] p-2.5">
                    <label className="block text-[11px] font-normal text-black uppercase tracking-wider">Check In</label>
                    <input
                      type="date"
                      defaultValue="2024-01-26"
                      className="w-full border border-none text-sm text-black outline-none focus:border-[#D8A95B] transition-colors"
                    />
                  </div>
                  <div className="p-2.5">
                    <label className="block text-[11px] font-normal text-black uppercase tracking-wider">Check Out</label>
                    <input
                      type="date"
                      defaultValue="2024-01-28"
                      className="w-full border border-none text-sm text-black outline-none focus:border-[#D8A95B] transition-colors"
                    />
                  </div>
                </div>

                {/* Guests */}
                <div className="p-2.5 border-t border-[#808080]">
                  <label className="block text-[11px] font-normal text-black uppercase tracking-wider">Guests</label>
                  <select className="w-full border border-none py-2 text-sm text-black outline-none focus:border-[#D8A95B] transition-colors">
                    {["01 Guests", "02 Guests", "03 Guests", "04 Guests"].map((g) => (
                      <option key={g}>{g}</option>
                    ))}
                  </select>
                </div>
              </div>

              <button className="w-full btn-amber py-3 rounded-full text-sm font-medium! mb-3">
                Book Now
              </button>
              <p className="text-center text-black text-xs mb-4">You won&apos;t be charged yet</p>

              {/* Price Breakdown */}
              <div className="space-y-2 pt-4">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-black font-normal">${pricePerNight.toLocaleString()} × {nights} nights</span>
                  <span className="text-black font-normal">${(pricePerNight * nights).toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-black font-normal">Travel Service Fee</span>
                  <span className="text-black font-normal">${serviceFee.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm font-medium border-t-2 border-[#00000030] pt-3 mt-3">
                  <span className="text-black">Total Before Taxes</span>
                  <span className="text-black">${total.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
