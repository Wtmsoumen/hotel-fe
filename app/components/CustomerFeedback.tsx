"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Travel Blogger",
    avatar: "https://picsum.photos/seed/st-av1/100/100",
    rating: 5,
    text: "It was a completely amazing experience! The hotel booking process was incredibly smooth and the property exceeded all our expectations. The team at Stayent went above and beyond to make sure every detail was perfect. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Business Traveller",
    avatar: "https://picsum.photos/seed/st-av2/100/100",
    rating: 5,
    text: "Absolutely fantastic service from start to finish. The curated hotel selection made it so easy to find the perfect accommodation for my business trip. The attention to detail and personalized service from Stayent is unmatched in the industry.",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Honeymoon Couple",
    avatar: "https://picsum.photos/seed/st-av3/100/100",
    rating: 5,
    text: "Our honeymoon was absolutely perfect thanks to Stayent! Every hotel they recommended was stunning and the experiences were unforgettable. We felt like royalty throughout our entire journey. Will definitely use their services again.",
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    role: "Honeymoon Couple",
    avatar: "https://picsum.photos/seed/st-av3/100/100",
    rating: 5,
    text: "Our honeymoon was absolutely perfect thanks to Stayent! Every hotel they recommended was stunning and the experiences were unforgettable. We felt like royalty throughout our entire journey. Will definitely use their services again.",
  },
  {
    id: 5,
    name: "Emily Rodriguez",
    role: "Honeymoon Couple",
    avatar: "https://picsum.photos/seed/st-av3/100/100",
    rating: 5,
    text: "Our honeymoon was absolutely perfect thanks to Stayent! Every hotel they recommended was stunning and the experiences were unforgettable. We felt like royalty throughout our entire journey. Will definitely use their services again.",
  },
  {
    id: 6,
    name: "Emily Rodriguez",
    role: "Honeymoon Couple",
    avatar: "https://picsum.photos/seed/st-av3/100/100",
    rating: 5,
    text: "Our honeymoon was absolutely perfect thanks to Stayent! Every hotel they recommended was stunning and the experiences were unforgettable. We felt like royalty throughout our entire journey. Will definitely use their services again.",
  },
  {
    id: 7,
    name: "Emily Rodriguez",
    role: "Honeymoon Couple",
    avatar: "https://picsum.photos/seed/st-av3/100/100",
    rating: 5,
    text: "Our honeymoon was absolutely perfect thanks to Stayent! Every hotel they recommended was stunning and the experiences were unforgettable. We felt like royalty throughout our entire journey. Will definitely use their services again.",
  },
];

export default function CustomerFeedback() {
  const [active, setActive] = useState(0);
  const cur = testimonials[active];

  return (
    <section className="py-10 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="section-tag">Popular Choices</span>
            <h2 className="section-title">Customer Feedback</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Reviewer list */}
          <div className="lg:col-span-2 flex flex-row lg:flex-col gap-3 h-auto lg:h-70 pr-0 lg:pr-4 overflow-x-auto lg:overflow-y-auto custom-scrollbar pb-4 lg:pb-0">
            {testimonials.map((t, i) => (
              <button
                key={t.id}
                onClick={() => setActive(i)}
                className={`flex items-center gap-3 p-3 sm:p-4 rounded-2xl transition-all text-left min-w-[200px] sm:min-w-[250px] lg:w-full ${active === i
                  ? "bg-white shadow-lg border border-[#132A50]"
                  : "bg-white border border-[#D9D9D9] hover:shadow-md"
                  }`}
              >
                <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden shrink-0">
                  <Image src={t.avatar} alt={t.name} fill className="object-cover" />
                </div>
                <div className="block">
                  <p className="font-bold text-[#000000] text-xs sm:text-sm whitespace-nowrap">{t.name}</p>
                  <p className="text-gray-400 text-[10px] sm:text-xs whitespace-nowrap">{t.role}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Active testimonial */}
          <div className="lg:col-span-3 bg-white rounded-2xl p-8 shadow-md border border-gray-100 relative overflow-hidden">
            {/* Big quote */}
            <div className="absolute top-4 right-6 text-[#D8A95B] opacity-10">
              <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>

            <div className="flex gap-0.5 mb-4">
              {Array.from({ length: cur.rating }).map((_, i) => (
                <svg key={i} className="w-5 h-5 text-[#D8A95B]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            <p className="text-gray-600 text-sm leading-relaxed italic mb-6">&ldquo;{cur.text}&rdquo;</p>

            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden">
                <Image src={cur.avatar} alt={cur.name} fill className="object-cover" />
              </div>
              <div>
                <p className="font-bold text-[#000000]">{cur.name}</p>
                <p className="text-[#D8A95B] text-xs">{cur.role}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
