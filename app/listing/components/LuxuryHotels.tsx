import Image from "next/image";
import Link from "next/link";
import { MapPin, Clock3, Lock } from "lucide-react";
import { FaStar } from "react-icons/fa";

const hotels = [
  { id: 1, name: "Comfortable Villa Green", location: "Unit 4, 2nd & Brooklyn", oldPrice: 2400, price: 1600, image: "https://picsum.photos/seed/lux-h1/600/400", nights: 2, reviews: 65 },
  { id: 2, name: "Comfortable Villa Green", location: "Unit 4, 2nd & Brooklyn", oldPrice: 2800, price: 1900, image: "https://picsum.photos/seed/lux-h2/600/400", nights: 3, reviews: 48, badge: "Getaway Deal" },
  { id: 3, name: "Comfortable Villa Green", location: "Unit 4, 2nd & Brooklyn", oldPrice: 2200, price: 1500, image: "https://picsum.photos/seed/lux-h3/600/400", nights: 2, reviews: 93 },
  { id: 4, name: "Comfortable Villa Green", location: "Unit 4, 2nd & Brooklyn", oldPrice: 3000, price: 2100, image: "https://picsum.photos/seed/lux-h4/600/400", nights: 4, reviews: 112 },
  { id: 5, name: "Comfortable Villa Green", location: "Unit 4, 2nd & Brooklyn", oldPrice: 2600, price: 1800, image: "https://picsum.photos/seed/lux-h5/600/400", nights: 3, reviews: 77 },
  { id: 6, name: "Comfortable Villa Green", location: "Unit 4, 2nd & Brooklyn", oldPrice: 1900, price: 1300, image: "https://picsum.photos/seed/lux-h6/600/400", nights: 2, reviews: 54 },
];

export default function LuxuryHotels() {
  return (
    <section className="pt-24 pb-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="section-title">Luxury Hotel</h2>
          <p className="text-black text-xs mt-2 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lobortis mauris purus.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {hotels.map((hotel) => (
            <div key={hotel.id} className="bg-white rounded-2xl overflow-hidden shadow-sm group card-hover">
              {/* Image */}
              <div className="relative h-52 overflow-hidden rounded-b-2xl">
                <Image src={hotel.image} alt={hotel.name} fill className="object-cover" />
                {hotel.badge && (
                  <span className="absolute top-3 left-3 bg-[#D8A95B] text-white text-[11px] font-normal px-2.5 py-1 rounded-md uppercase tracking-wide">
                    {hotel.badge}
                  </span>
                )}
                {/* Right to Hotel button */}
                <Link href="/login" className="group flex items-center gap-4 absolute left-22.5 bottom-3 -translate-x-1/2 bg-white/90 hover:bg-white text-black text-[11px] font-medium pl-1.5 pr-4 py-1.5 rounded-full whitespace-nowrap transition-colors">
                  <div className="duration-300 text-[#D8A95B] text-xs font-normal bg-[#D8A95B1A] group-hover:bg-[#D8A95B] group-hover:text-white rounded-full p-2">
                    <Lock className="w-3 h-3" />
                  </div>
                  Login to View
                </Link>
              </div>

              {/* Info */}
              <div className="p-4">
                <h3 className="font-medium text-black text-sm mb-1">{hotel.name}</h3>
                <div className="flex items-center gap-1 text-black text-xs mb-2">
                  <MapPin className="w-3 h-3" />
                  {hotel.location}
                </div>

                <div className="flex items-center justify-between mb-2">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => <FaStar key={i} className="text-black w-3 h-3" />)}
                    <span className="text-black text-xs ml-1">{hotel.reviews} reviews</span>
                  </div>
                  <Link href="#" className="duration-300 text-[#D8A95B] text-xs font-normal bg-[#D8A95B1A] hover:bg-[#D8A95B] hover:text-white rounded-full px-4 py-2">
                    View More
                  </Link>
                </div>

                <hr className="border-gray-100 mb-2" />

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-black text-xs line-through">${hotel.oldPrice.toLocaleString()}</span>
                    <span className="text-black font-semibold text-sm ml-1.5">${hotel.price.toLocaleString()}</span>
                    <span className="text-black text-xs">/person</span>
                  </div>
                  <div className="flex items-center gap-1 text-black text-xs">
                    <Clock3 className="w-3 h-3" />
                    {String(hotel.nights).padStart(2, "0")} Nights
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
