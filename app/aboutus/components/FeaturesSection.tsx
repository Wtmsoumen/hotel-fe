export default function FeaturesSection() {
    const features = [
        { icon: "🏨", title: "Lots of Choices", desc: "Nam id lacinia nibh. Sed et finibus purus. Aenean varius, se vel convallis aliquam." },
        { icon: "📦", title: "Best Packages", desc: "Nam id lacinia nibh. Sed et finibus purus. Aenean varius, se vel convallis aliquam.", highlight: true },
        { icon: "📅", title: "Easy Booking", desc: "Nam id lacinia nibh. Sed et finibus purus. Aenean varius, se vel convallis aliquam." },
    ];

    return (
        <section className="bg-stone-50 py-10">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-10 items-start">
                <div className="flex flex-col gap-2">
                    <span className="section-tag mb-0">What we give</span>
                    <h2 className="section-title leading-tight text-3xl sm:text-4xl lg:text-[48px] font-medium">
                        Best Features For You
                    </h2>
                    <p className="text-black text-sm leading-relaxed font-light">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae cursus lacus. Donec vitae tincidunt tellus.
                    </p>
                </div>
                {features.map((f) => (
                    <div
                        key={f.title}
                        className={`rounded-2xl p-4 transition-all duration-300 hover:bg-white hover:shadow-sm h-[-webkit-fill-available]`}
                    >
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4`}>
                            {f.icon}
                        </div>
                        <h3 className={`font-medium text-lg mb-2 text-black`}>{f.title}</h3>
                        <p className={`text-sm leading-relaxed text-[#1A1A1A]`}>{f.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}