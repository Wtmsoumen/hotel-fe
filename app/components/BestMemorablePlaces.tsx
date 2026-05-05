"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useCallback } from "react";

const photos = [
  { src: "https://picsum.photos/seed/dubai1/400/600", alt: "Burj Khalifa", location: "Dubai, UAE" },
  { src: "https://picsum.photos/seed/halong/400/600", alt: "Ha Long Bay", location: "Vietnam" },
  { src: "https://picsum.photos/seed/watpho/400/600", alt: "Wat Phra Kaew", location: "Bangkok, Thailand" },
  { src: "https://picsum.photos/seed/sydney1/400/600", alt: "Sydney Opera House", location: "Australia" },
  { src: "https://picsum.photos/seed/india2/400/600", alt: "Golden Temple", location: "Amritsar, India" },
  { src: "https://picsum.photos/seed/japan3/400/600", alt: "Mount Fuji", location: "Japan" },
  { src: "https://picsum.photos/seed/peru1/400/600", alt: "Machu Picchu", location: "Peru" },
];

export default function OurGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const isHovering = useRef(false);
  const count = photos.length;

  const goTo = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setActiveIndex(((index % count) + count) % count);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating, count]
  );

  const startAutoPlay = useCallback(() => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    autoPlayRef.current = setInterval(() => {
      if (!isHovering.current) setActiveIndex((p) => (p + 1) % count);
    }, 3500);
  }, [count]);

  useEffect(() => {
    startAutoPlay();
    return () => { if (autoPlayRef.current) clearInterval(autoPlayRef.current); };
  }, [startAutoPlay]);

  // Calculate visible cards: center ± 2
  const getCardStyle = (i: number) => {
    // Compute offset from active (shortest path around the ring)
    let offset = i - activeIndex;
    if (offset > count / 2) offset -= count;
    if (offset < -count / 2) offset += count;

    const absOffset = Math.abs(offset);
    const visible = absOffset <= 2;

    if (!visible) return { display: "none" };

    const sign = offset === 0 ? 0 : offset > 0 ? 1 : -1;

    // Position
    const spreadMap = [0, 165, 295];
    const spreadX = sign * (spreadMap[absOffset] ?? 295);

    // Scale: center=1, ±1=0.72, ±2=0.50
    const scales = [1, 0.72, 0.50];
    const scale = scales[absOffset] ?? 0.4;

    // Z-index: center on top
    const zIndex = 10 - absOffset;

    // Vertical shift: side cards rise slightly
    const translateY = absOffset === 0 ? 0 : absOffset === 1 ? -20 : -40;

    // Rotation: slight perspective tilt
    const rotateY = offset * -12;

    // Opacity
    const opacity = absOffset === 2 ? 1 : 1;

    // Brightness
    const brightness = absOffset === 0 ? 1 : absOffset === 1 ? 0.6 : 0.35;

    return {
      display: "block",
      position: "absolute" as const,
      left: "50%",
      top: "50%",
      transform: `
        translateX(calc(-50% + ${spreadX}px))
        translateY(calc(-50% + ${translateY}px))
        scale(${scale})
        perspective(1000px)
        rotateY(${rotateY}deg)
      `,
      zIndex,
      opacity,
      filter: `brightness(${brightness})`,
      transition: "all 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      cursor: absOffset === 0 ? "default" : "pointer",
    };
  };

  return (
    <section
      className="relative py-10 overflow-hidden"
      style={{ background: "#ffffff", minHeight: "100vh" }}
      onMouseEnter={() => { isHovering.current = true; }}
      onMouseLeave={() => { isHovering.current = false; }}
    >
      {/* Subtle radial glow behind center */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 50% 60%, rgba(180,130,60,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Header */}
      <div className="text-center flex flex-col items-center">
        <span className="section-tag">Our Gallery</span>
        <h2 className="section-title pb-6">Best Memorable Place</h2>
        <div className="border-b border-[#D8A95B] w-20" />
      </div>

      {/* Carousel Stage */}
      <div
        className="relative mx-auto"
        style={{ height: 600, maxWidth: 1200 }}
      >
        {/* Cards */}
        {photos.map((photo, i) => {
          const style = getCardStyle(i);
          let offset = i - activeIndex;
          if (offset > count / 2) offset -= count;
          if (offset < -count / 2) offset += count;
          const absOffset = Math.abs(offset);
          const isCenter = absOffset === 0;

          if (style.display === "none") return null;

          return (
            <div
              key={i}
              style={style}
              onClick={() => !isCenter && goTo(i)}
            >
              <div
                className="relative overflow-hidden"
                style={{
                  width: 300,
                  height: 480,
                  borderRadius: 24,
                  boxShadow: isCenter
                    ? "0 30px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(201,168,76,0.25)"
                    : "0 15px 40px rgba(0,0,0,0.5)",
                }}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                  sizes="300px"
                />

                {/* Bottom gradient + info (center only) */}
                {/* <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.1) 45%, transparent 70%)",
                  }}
                /> */}

                {/* {isCenter && (
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div
                      className="flex items-center gap-1.5 mb-2"
                      style={{ opacity: 0.85 }}
                    >
                      <svg className="w-3 h-3" style={{ color: "#c9a84c" }} fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                      </svg>
                      <span className="text-xs font-medium" style={{ color: "#c9a84c" }}>
                        {photo.location}
                      </span>
                    </div>
                    <p className="text-white font-semibold text-lg leading-tight">{photo.alt}</p>
                  </div>
                )} */}
              </div>
            </div>
          );
        })}

        {/* Left Arrow */}
        <button
          onClick={() => goTo(activeIndex - 1)}
          className="absolute left-[17.5%] top-1/2 -translate-y-1/2 z-50 flex items-center justify-center transition-all duration-200"
          style={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            background: "#D8A95B",
            border: "1px solid #D8A95B",
            color: "white",
            backdropFilter: "blur(8px)",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background = "#D8A95B";
            (e.currentTarget as HTMLButtonElement).style.borderColor = "#D8A95B";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background = "#D8A95B";
            (e.currentTarget as HTMLButtonElement).style.borderColor = "#D8A95B";
          }}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => goTo(activeIndex + 1)}
          className="absolute right-[17.5%] top-1/2 -translate-y-1/2 z-50 flex items-center justify-center transition-all duration-200"
          style={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            background: "#D8A95B",
            border: "1px solid #D8A95B",
            color: "white",
            backdropFilter: "blur(8px)",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background = "#D8A95B";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background = "#D8A95B";
          }}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Dot indicators */}
      {/* <div className="flex justify-center gap-2 mt-10 relative z-10">
        {photos.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className="transition-all duration-300 rounded-full"
            style={{
              width: i === activeIndex ? 28 : 8,
              height: 8,
              background: i === activeIndex ? "#c9a84c" : "rgba(255,255,255,0.2)",
            }}
          />
        ))}
      </div> */}
    </section>
  );
}