import Image from "next/image";
import SomersetDowntown from "../../../public/images/SomersetDowntown.png"

interface Props { name: string; image: string }

export default function HotelHero({ name, image }: Props) {
  return (
    <section className="relative h-[55vh] min-h-[340px] flex items-end">
      <Image src={SomersetDowntown} alt={name} fill className="object-cover" priority />
      <div className="absolute inset-0 bg-linear-to-t from-black/30 via-black/30 to-black/70" />
      <div className="relative z-10 w-full h-full text-center pt-20 flex items-center justify-center">
        <h1 className="text-white font-bold text-[56px] sm:text-[72px] uppercase leading-tight mb-1">
          {name}
        </h1>
      </div>
    </section>
  );
}
