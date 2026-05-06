export default function GallerySection() {
    const images = [
        { url: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=600&q=80", label: "Tropical Paradise", tall: true },
        { url: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=600&q=80", label: "Golden Temple", tall: false },
        { url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80", label: "Opera House", tall: false },
        { url: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&q=80", label: "Ancient Monument", tall: true },
        { url: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=600&q=80", label: "Beachfront Villa", tall: false },
    ];

    return (
        <section className="bg-stone-50 py-10">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <p className="text-amber-500 font-semibold text-xs uppercase tracking-widest mb-2">Our Gallery</p>
                    <h2 className="text-4xl font-bold text-stone-800" style={{ fontFamily: "'Playfair Display', serif" }}>
                        Best Memorable Place
                    </h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-48">
                    {images.slice(0, 4).map((img, i) => (
                        <div
                            key={i}
                            className={`relative rounded-2xl overflow-hidden group cursor-pointer ${i === 0 || i === 3 ? "row-span-2" : ""}`}
                            style={{ height: i === 0 || i === 3 ? "400px" : "190px" }}
                        >
                            <img src={img.url} alt={img.label} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/40 transition-all duration-300 flex items-end p-4">
                                <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm">{img.label}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
