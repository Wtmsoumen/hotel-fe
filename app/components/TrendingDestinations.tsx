import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const destinations = [
  { name: "Paris", country: "France", hotels: "120 Hotels", image: "https://picsum.photos/seed/st-paris/500/400" },
  { name: "Switzerland", country: "Europe", hotels: "95 Hotels", image: "https://picsum.photos/seed/st-swiss/500/400" },
  { name: "Greece", country: "Europe", hotels: "78 Hotels", image: "https://picsum.photos/seed/st-greece/500/400" },
  { name: "Vietnam", country: "Asia", hotels: "64 Hotels", image: "https://picsum.photos/seed/st-vietnam/500/400" },
  { name: "Singapore", country: "Asia", hotels: "88 Hotels", image: "https://picsum.photos/seed/st-singapore/500/400" },
  { name: "Thailand", country: "Asia", hotels: "102 Hotels", image: "https://picsum.photos/seed/st-thailand/500/400" },
];

export default function TrendingDestinations() {
  return (
    <section className="py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 flex flex-col items-center">
          <span className="section-tag">Popular Choices</span>
          <h2 className="section-title pb-6">Trending Destination</h2>
          <div className="border-b border-[#D8A95B] w-20" />
        </div>

        <div className="flex flex-wrap gap-4 sm:gap-5">
          {destinations.map((dest, index) => (
            <Link
              href="#"
              key={index}
              className={`relative rounded-2xl overflow-hidden block group card-hover h-[200px] 
                ${index === 0 || index === destinations.length - 1 
                  ? "w-full md:w-[calc(40%-10px)] lg:w-[calc(40%-12px)]" 
                  : "w-full sm:w-[calc(50%-10px)] md:w-[calc(30%-10px)] lg:w-[calc(28.5%-12px)]"
                } flex-grow`}
            >
              <Image
                src={dest.image}
                alt={dest.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#000000]/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white font-bold text-sm">{dest.name}</h3>
                <div className="flex items-center justify-between mt-0.5">
                  <span className="text-gray-300 text-xs flex items-center gap-1">Explore More <ArrowRight className="w-4 h-4 text-[#D8A95B] -rotate-45 group-hover:rotate-0 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
