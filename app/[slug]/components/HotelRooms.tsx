import Image from "next/image";
import Link from "next/link";
import { BedDouble, Image as ImageIcon, MapPin, Users } from "lucide-react";
import { FaStar } from "react-icons/fa";

const rooms = [
  {
    id: 1,
    type: "Deluxe Room",
    location: "Unit 4, 2nd & Brooklyn",
    oldPrice: 2400,
    price: 1600,
    size: "32 m²",
    beds: 1,
    capacity: 2,
    image: "https://picsum.photos/seed/room-dlx/600/400",
    // badge: "Best Choice",
  },
  {
    id: 2,
    type: "Standard Room",
    location: "Unit 4, 2nd & Brooklyn",
    oldPrice: 1800,
    price: 1200,
    size: "24 m²",
    beds: 1,
    capacity: 2,
    image: "https://picsum.photos/seed/room-std/600/400",
  },
  {
    id: 3,
    type: "Superior Room",
    location: "Unit 4, 2nd & Brooklyn",
    oldPrice: 3200,
    price: 2200,
    size: "48 m²",
    beds: 2,
    capacity: 4,
    image: "https://picsum.photos/seed/room-sup/600/400",
  },
];

function SizeIcon() {
  return (
    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
    </svg>
  );
}

export default function HotelRooms() {
  return (
    <section id="rooms" className="py-10 scroll-mt-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-8">
          <h2 className="section-title">Rooms</h2>
          <p className="text-black text-xs mt-2">Maecenas facilisis condimentum nisl id consectetur. Duis dignissim nisl a libero ornare, eget laoreet tortor cursus. Cras quis dolor commodo, fringilla ex eget, tempus dui. Nulla rhoncus malesuada nisl, at accumsan lacus ultrices nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rooms.map((room) => (
            <div key={room.id} className="bg-white rounded-2xl overflow-hidden group card-hover shadow-none!">
              {/* Image */}
              <div className="relative h-52 overflow-hidden rounded-b-2xl">
                <Image src={room.image} alt={room.type} fill className="object-cover" />
                {/* Right to Hotel button */}
                <button className="group flex items-center gap-2 absolute right-16 bottom-3 translate-x-1/2 bg-white/90 hover:bg-white text-black text-[11px] font-medium pl-1.5 pr-4 py-1.5 rounded-full whitespace-nowrap transition-colors">
                  <ImageIcon className="w-4 h-4 text-[#D8A95B]" strokeWidth={2} />
                  +5 Photos
                </button>
              </div>

              {/* Info */}
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-1 text-black text-xs mb-2">
                    <h3 className="font-medium text-black text-sm mb-1">{room.type}</h3>
                    <div className="flex gap-1 items-center">
                      <MapPin className="w-3 h-3" />
                      {room.location}
                    </div>
                  </div>
                  {/* <Link href="#" className="duration-300 text-[#D8A95B] text-xs font-normal bg-[#D8A95B1A] hover:bg-[#D8A95B] hover:text-white rounded-full px-4 py-2">
                    View More
                  </Link> */}
                </div>



                <hr className="border-dashed border-[#00000020] mb-2" />

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[#3A3939] font-light text-xs">
                    <SizeIcon />
                    {room.size}
                    <span>|</span>
                    <BedDouble className="w-3.5 h-3.5" />
                    {room.beds} Bed
                    <span>|</span>
                    <Users className="w-3.5 h-3.5" />
                    {room.capacity} People
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
