import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const cities = [
  { name: "New Delhi", hotels: "85 Hotels", image: "https://picsum.photos/seed/newdelhi/400/400" },
  { name: "Mumbai", hotels: "120 Hotels", image: "https://picsum.photos/seed/mumbai/400/400" },
  { name: "Goa", hotels: "64 Hotels", image: "https://picsum.photos/seed/goa/400/400" },
  { name: "Bangalore", hotels: "93 Hotels", image: "https://picsum.photos/seed/bangalore/400/400" },
  { name: "Jaipur", hotels: "52 Hotels", image: "https://picsum.photos/seed/jaipur/400/400" },
];

export default function ExploreIndia() {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="section-title">Explore in India</h2>
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

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {cities.map((city) => (
            <Link
              href="#"
              key={city.name}
              className="group flex flex-col items-center hover-card rounded-2xl overflow-hidden"
            >
              <div className="relative w-full rounded-2xl overflow-hidden" style={{ height: "160px" }}>
                <Image
                  src={city.image}
                  alt={city.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b2a]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="pt-3 pb-2 text-center">
                <h3 className="font-semibold text-gray-900 text-sm group-hover:text-[#f0a500] transition-colors">
                  {city.name}
                </h3>
                <p className="text-black text-xs mt-0.5">Explore</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
