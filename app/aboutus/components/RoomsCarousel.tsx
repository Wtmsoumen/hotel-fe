import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function RoomsCarousel() {

    const NextArrow = ({ onClick }: any) => (
        <div
            className="shadow-md absolute right-[30%] top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center z-20 cursor-pointer bg-white/90 text-white p-2 rounded-full border border-solid border-gray-100"
            onClick={onClick}
        >
            <ChevronRight className="text-[#d8a95b]" />
        </div>
    );

    const PrevArrow = ({ onClick }: any) => (
        <div
            className="shadow-md absolute left-[30%] top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center z-20 cursor-pointer bg-white/90 text-white p-2 rounded-full border border-solid border-gray-100"
            onClick={onClick}
        >
            <ChevronLeft className="text-[#d8a95b]" />
        </div>
    );

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,

        autoplay: false,
        autoplaySpeed: 2000,
        pauseOnHover: true,

        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };


    // ─── Data ─────────────────────────────────────────────────────────────────────
    const roomSlides = [
        {
            id: 1,
            title: "Grand Deluxe Room",
            desc: "Aenean ornare nibh, imperdiet quis euismod velit, pretium a libero.",
            image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
            bg: "from-amber-900/80 to-stone-900/60"
        },
        {
            id: 2,
            title: "Premium Suite",
            desc: "Spacious suite with panoramic views and luxury amenities.",
            image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
            bg: "from-slate-900/80 to-stone-800/60"
        },
        {
            id: 3,
            title: "Executive Studio",
            desc: "Perfect for business travellers seeking comfort and connectivity.",
            image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
            bg: "from-stone-900/80 to-amber-900/60"
        },
        {
            id: 4,
            title: "Executive Studio",
            desc: "Perfect for business travellers seeking comfort and connectivity.",
            image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
            bg: "from-stone-900/80 to-amber-900/60"
        },
    ];

    return (
        <section className="py-10 relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
                <h2 className="section-title leading-tight text-3xl sm:text-4xl lg:text-[48px] font-medium">
                    Luxury Rooms & Suites
                </h2>
                <p className="text-black text-sm leading-relaxed font-light">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lobortis mauris purus.
                </p>
            </div>

            <div className="w-[80%] h-95 bg-white shadow-[0_6px_46.1px_#0000001A] absolute right-[10%] left-[10%] bottom-[5%] rounded-2xl" />

            <div className="slider-container mt-15 mb-5">
                <div
                    style={{ width: `100%` }}
                    className="mx-auto overflow-hidden"
                >
                    <Slider {...settings}>
                        {roomSlides.map((v, i) => (
                            <div key={i} className="px-4 py-2 relative group">
                                <Image
                                    src={v?.image}
                                    alt={`room-${i}`}
                                    width={500}
                                    height={500}
                                    className="w-full h-[300px] object-cover rounded-xl"
                                />
                                <div className="group-hover:flex flex-col hidden justify-end absolute bottom-5 right-0 bg-[#D8A95B]/85 z-20 w-[90%] h-35 rounded-2xl p-6">
                                    <h2 className="text-white! font-normal! section-title leading-tight text-xl! pb-2">
                                        Luxury Rooms & Suites
                                    </h2>
                                    <p className="text-white text-xs! font-normal! leading-relaxed">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lobortis mauris purus.
                                    </p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
}