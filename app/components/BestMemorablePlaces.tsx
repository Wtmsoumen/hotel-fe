import Image from "next/image";

const photos = [
  { src: "https://picsum.photos/seed/mem1/600/400", alt: "Ha Long Bay", span: "col-span-2 row-span-2" },
  { src: "https://picsum.photos/seed/mem2/400/300", alt: "Golden Temple", span: "" },
  { src: "https://picsum.photos/seed/mem3/400/300", alt: "Wat Pho", span: "" },
  { src: "https://picsum.photos/seed/mem4/400/300", alt: "Santorini", span: "" },
  { src: "https://picsum.photos/seed/mem5/400/300", alt: "Mount Fuji", span: "" },
  { src: "https://picsum.photos/seed/mem6/600/400", alt: "Machu Picchu", span: "col-span-2" },
];

export default function BestMemorablePlaces() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-[#f0a500] text-xs font-semibold uppercase tracking-widest mb-2">
            Gallery
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 section-heading inline-block">
            Best Memorable Place
          </h2>
          <p className="text-black text-sm mt-6 max-w-lg mx-auto">
            Breathtaking moments captured from the world&apos;s most iconic locations
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 auto-rows-48 gap-4" style={{ gridAutoRows: "200px" }}>
          {photos.map((photo, i) => (
            <div
              key={i}
              className={`relative rounded-2xl overflow-hidden hover-card group ${photo.span}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-[#0d1b2a]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-[#0d1b2a]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white text-sm font-medium">{photo.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
