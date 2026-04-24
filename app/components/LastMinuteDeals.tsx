import { ArrowRight, Clock3, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

const deals = [
  { id: 1, name: "Comfortable Villa Ocean View", location: "Bali, Indonesia", original: 3800, sale: 2999, nights: 3, image: "https://picsum.photos/seed/st-deal1/600/400" },
  { id: 2, name: "Comfortable Villa Mountain", location: "Himalaya, Nepal", original: 2800, sale: 1800, nights: 2, image: "https://picsum.photos/seed/st-deal2/600/400" },
  { id: 3, name: "Comfortable Villa Beachfront", location: "Phuket, Thailand", original: 4200, sale: 3200, nights: 4, image: "https://picsum.photos/seed/st-deal3/600/400" },
];

export default function LastMinuteDeals() {
  return (
    <section className="py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="section-title">Last Minute Deals</h2>
            <p className="text-black text-xs mt-2 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lobortis mauris purus.
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
          {deals.map((d) => (
            <div key={d.id} className="bg-white rounded-2xl overflow-hidden card-hover p-2 group">
              <div className="relative h-60">
                <Image src={d.image} alt={d.name} fill className="object-cover rounded-2xl" />
              </div>
              <div className="p-5">
                <h3 className="font-medium text-[#000000] text-sm mb-1">{d.name}</h3>
                <div className="flex items-center gap-1 text-black text-xs mb-1 font-light">
                  <MapPin className="w-3.5 h-3.5 text-black" />
                  {d.location}
                </div>
                <hr className="border-gray-200 my-2" />
                <div className="flex items-center justify-between">
                  <div className="flex items-start flex-col gap-1 text-black text-xs mb-1 font-light">
                    Starting Price : <span className="text-[20px] text-[#D8A95B] font-medium">${d.sale}<span className="text-black text-[12px] font-normal">/person</span></span>
                  </div>
                  <div className="flex items-center gap-1 text-black text-sm font-medium">
                    View Deal
                    <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform" />
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
