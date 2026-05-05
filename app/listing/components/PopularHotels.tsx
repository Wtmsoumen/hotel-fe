import Image from "next/image";
import Link from "next/link";
import { Lock, MapPin } from "lucide-react";
import { FaStar } from "react-icons/fa";

const hotels = [
  { id: 1, name: "Comfortable Villa Green", location: "Unit 4, 2nd & Brooklyn", price: 1600, image: "https://picsum.photos/seed/pop-h1/800/500", nights: 2, reviews: 65 },
  { id: 2, name: "Comfortable Villa Green", location: "Unit 4, 2nd & Brooklyn", price: 2200, image: "https://picsum.photos/seed/pop-h2/800/500", nights: 2, reviews: 65 },
  { id: 3, name: "Comfortable Villa Green", location: "Unit 4, 2nd & Brooklyn", price: 1850, image: "https://picsum.photos/seed/pop-h3/800/500", nights: 2, reviews: 65 },
  { id: 4, name: "Comfortable Villa Green", location: "Unit 4, 2nd & Brooklyn", price: 2500, image: "https://picsum.photos/seed/pop-h4/800/500", nights: 2, reviews: 65 },
];

export default function PopularHotels() {
  return (
    <section className="py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-8 flex flex-col items-center">
          <h2 className="section-title">Popular Hotels</h2>
          <p className="text-black text-xs mt-2 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lobortis mauris purus.
          </p>
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {hotels.map((hotel) => (
            <div key={hotel.id} className="flex flex-col gap-3">
              <div className="relative rounded-2xl overflow-hidden group card-hover cursor-pointer h-64">
                <Image src={hotel.image} alt={hotel.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

                {/* Content */}
                <Link href="/login" className="group flex items-center gap-4 absolute -right-13 top-3 -translate-x-1/2 bg-white/90 hover:bg-white text-black text-[11px] font-medium pl-1.5 pr-4 py-1.5 rounded-full whitespace-nowrap transition-colors">
                  <div className="duration-300 text-[#D8A95B] text-xs font-normal bg-[#D8A95B1A] group-hover:bg-[#D8A95B] group-hover:text-white rounded-full p-2">
                    <Lock className="w-3 h-3" />
                  </div>
                  Login to View
                </Link>
                <div className="absolute bottom-0 px-5 py-3 flex flex-col justify-between">
                  <h3 className="text-white font-semibold text-sm mb-1">{hotel.name}</h3>
                </div>
              </div>
              <div className="flex justify-between items-center gap-2">
                <div className="flex flex-col items-start gap-2">
                  <div className="flex items-center gap-1 text-black text-xs">
                    <MapPin className="w-3 h-3" />
                    {hotel.location}
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => <FaStar key={i} className="text-black w-3.5 h-3.5" />)}
                    <span className="text-black text-xs ml-1">{hotel.reviews} reviews</span>
                  </div>
                </div>
                <Link href="#" className="duration-300 text-[#D8A95B] text-xs font-normal bg-[#D8A95B1A] hover:bg-[#D8A95B] hover:text-white rounded-full py-2 px-4">
                  View More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
