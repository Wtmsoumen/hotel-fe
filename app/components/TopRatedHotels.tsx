import { ArrowRight, Clock3, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import dummy1 from "../../public/images/dummy1.png"
import dummy2 from "../../public/images/dummy2.png"
import dummy3 from "../../public/images/dummy3.png"

const hotels = [
  {
    id: 1,
    name: "Comfortable Villa Green",
    location: "Maldives, South Asia",
    rating: 5,
    reviews: 128,
    price: 1600,
    image: dummy1,
    badge: "Best Choice",
  },
  {
    id: 2,
    name: "Comfortable Villa Ocean",
    location: "Bali, Indonesia",
    rating: 5,
    reviews: 214,
    price: 2200,
    image: dummy2,
    badge: "Top Rated",
  },
  {
    id: 3,
    name: "Comfortable Villa Forest",
    location: "Swiss Alps, Switzerland",
    rating: 4,
    reviews: 95,
    price: 1850,
    image: dummy3,
    badge: "Popular",
  },
];

function Stars({ count, total = 5 }: { count: number; total?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: total }).map((_, i) => (
        <svg
          key={i}
          className={`w-3.5 h-3.5 ${i < count ? "text-[#D8A95B]" : "text-gray-200"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function TopRatedHotels() {
  return (
    <section className="py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-4">
          <div>
            <h2 className="section-title">Top Rated Hotel</h2>
            <p className="text-black text-xs mt-2 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, lorem ipsum more
            </p>
          </div>
          <Link
            href="#"
            className="text-xs font-medium hover:underline flex items-center gap-1 shrink-0 group"
          >
            Explore More
            <ArrowRight className="w-4 h-4 text-[#D8A95B] -rotate-45 group-hover:rotate-0 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {hotels.map((hotel) => (
            <div key={hotel.id} className="bg-white rounded-2xl overflow-hidden group">
              {/* Image */}
              <div className="relative h-52 rounded-b-2xl overflow-hidden">
                <Image
                  src={hotel.image}
                  alt={hotel.name}
                  fill
                  className="object-cover"
                />
                <span className="group-hover:block hidden absolute top-3 left-3 bg-[#D8A95B] text-white text-[12px] font-medium px-3 py-1 rounded-md uppercase tracking-wide">
                  {hotel.badge}
                </span>
                <span className="absolute bottom-3 left-3 bg-white text-black text-[12px] font-normal px-3 py-1.5 rounded-full tracking-wide">
                  ${hotel.price.toLocaleString()}/person
                </span>
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="font-medium text-[#000000] text-sm mb-1">{hotel.name}</h3>
                <div className="flex items-center gap-1 text-black text-xs mb-1">
                  <MapPin className="w-3.5 h-3.5 text-black" />
                  {hotel.location}
                </div>
                <hr className="border-gray-200 my-2" />
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-0.5">
                    {["", "", "", "", ""].map((i: any) => <FaStar key={i} className="text-[#161A1D]" />)}
                    <span className="text-[#3F3E3E] text-[14px] font-normal ml-2 mt-1">65 reviews</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock3 className="w-4 h-4 text-[#3F3E3E]" />
                    <span className="text-[#3F3E3E] text-[14px] font-light mt-0.5">02 Nights</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-10">
          {[0, 1, 2].map((i) => (
            <button key={i} className={`h-2 rounded-full transition-all ${i === 0 ? "w-6 bg-[#D8A95B]" : "w-2 bg-gray-300"}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
