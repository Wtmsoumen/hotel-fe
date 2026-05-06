"use client";
import { useEffect, useState } from "react";

const tabs = [
  { label: "Overview", id: "overview" },
  { label: "Rooms", id: "rooms" },
  { label: "Amenities", id: "amenities" },
  { label: "Trip Inspiration", id: "trip-inspiration" },
  { label: "Where to Go", id: "where-to-go" },
];

export default function HotelTabs() {
  const [active, setActive] = useState("overview");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    tabs.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setActive(id);
  };

  return (
    <div className="sticky top-[100px] z-40 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex overflow-x-auto gap-1" style={{ scrollbarWidth: "none" }}>
          {tabs.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`uppercase shrink-0 px-5 py-4 text-sm font-normal border-b-2 transition-colors whitespace-nowrap ${active === id
                ? "border-[#D8A95B] text-[#D8A95B]"
                : "border-transparent text-black hover:text-[#D8A95B]"
                }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
