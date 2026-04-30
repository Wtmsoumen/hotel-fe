import contactBanner from "../../../public/images/contactBanner.png"
import Image from "next/image";

export default function HeroSection() {

    return (
        <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden">
            <Image src={contactBanner} alt="abouutBanner" width={1920} height={1080} className="absolute inset-0 bg-cover bg-center w-full h-full" />
            <div className="absolute inset-0 bg-linear-to-t to-[#001422E5] via-[#00427462] from-[#00427400]" />
            <div className="relative z-10 text-center">
                <h1 className="text-white font-bold text-4xl sm:text-6xl lg:text-[72px] uppercase leading-tight mb-4">
                    Contact Us
                </h1>
            </div>
        </section>
    );
}
