export default function FacilitiesSection() {

    const AirportIcon = () => (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5z" />
        </svg>
    );
    const WifiIcon = () => (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M5 12.55a11 11 0 0 1 14.08 0M1.42 9a16 16 0 0 1 21.16 0M8.53 16.11a6 6 0 0 1 6.95 0M12 20h.01" />
        </svg>
    );
    const BroomIcon = () => (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M3 22l6-6M15 3l6 6-9.27 9.27a4 4 0 0 1-5.66 0l-.34-.34a4 4 0 0 1 0-5.66z" />
        </svg>
    );

    const facilities = [
        { icon: <AirportIcon />, label: "Airport\nPickup" },
        { icon: <WifiIcon />, label: "Free\nWiFi" },
        { icon: <BroomIcon />, label: "Best\nHousekeeping" },
    ];

    const facilityImages = [
        "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=400&q=80",
        "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400&q=80",
    ];

    return (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-2 gap-16 items-center">
            {/* Left image */}
            <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl h-80">
                    <img
                        src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80"
                        alt="Hotel exterior"
                        className="w-full h-full object-cover"
                    />
                </div>
                {/* Vertical label */}
                <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col items-center gap-2">
                    <div className="w-px h-16 bg-amber-400" />
                    <span className="text-amber-600 font-bold text-xs tracking-[0.3em] rotate-90 origin-center whitespace-nowrap uppercase">What We Do</span>
                    <div className="w-px h-16 bg-amber-400" />
                </div>
                {/* Grid of small images */}
                <div className="absolute -bottom-8 -right-8 grid grid-cols-2 gap-2 w-44">
                    {facilityImages.map((src, i) => (
                        <div key={i} className="rounded-xl overflow-hidden shadow-lg h-20">
                            <img src={src} alt="" className="w-full h-full object-cover" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Right content */}
            <div>
                <p className="text-amber-500 font-semibold text-xs uppercase tracking-widest mb-3">What We Do</p>
                <h2 className="text-4xl font-bold text-stone-800 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Hotel Facilities
                </h2>
                <p className="text-stone-500 text-sm leading-relaxed mb-4">
                    Vestibulum ductor nec leo vel fermentum. Quisque mauris dolor, congue nec orci a, suscipit malesuada erat. Curabitur sit amet nulla scelerisque nibh molestie egestas at vel magna.
                </p>
                <p className="text-stone-500 text-sm leading-relaxed mb-8">
                    Integer ut tortor nunc. Curabitur metus tortor, posuere eget condimentum ut, convallis eu orci. Sed it suscipit eget, integer eu tincidunt neque, non convallis nunc.
                </p>
                <div className="flex gap-8">
                    {facilities.map((f, i) => (
                        <div key={i} className="flex flex-col items-center gap-2 text-center">
                            <div className="w-14 h-14 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600 shadow-sm">
                                {f.icon}
                            </div>
                            <p className="text-xs font-semibold text-stone-700 whitespace-pre-line leading-tight">{f.label}</p>
                        </div>
                    ))}
                </div>
                <div className="mt-6 flex items-center gap-3">
                    <span className="text-3xl font-bold text-amber-500" style={{ fontFamily: "'Playfair Display', serif" }}>01</span>
                    <div className="h-px flex-1 bg-stone-200" />
                </div>
            </div>
        </section>
    );
}