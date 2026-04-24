const steps = [
  {
    label: "Make an Enquiry",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.",
    icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
  },
  {
    label: "Speak to an Expert",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.",
    icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
  },
  {
    label: "Receive a Quote",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.",
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
  {
    label: "Book Your Trip",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.",
    icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
  },
];

export default function BookingProcess() {
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="section-title">Our Booking Process</h2>
        </div>

        <div className="flex flex-col sm:flex-row items-start justify-center gap-0">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col sm:flex-row items-center flex-1">
              {/* Step card */}
              <div className="flex flex-col items-center text-center px-4 max-w-[200px]">
                {/* Circle icon */}
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${i === 0 ? "bg-[#D8A95B]" : "border-2 border-[#D8A95B]"}`}>
                  <svg className={`w-7 h-7 ${i === 0 ? "text-white" : "text-[#D8A95B]"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d={step.icon} />
                  </svg>
                </div>
                <p className="text-sm font-semibold text-black mb-2">{step.label}</p>
                <p className="text-xs text-gray-400 leading-relaxed">{step.desc}</p>
              </div>

              {/* Arrow connector */}
              {i < steps.length - 1 && (
                <div className="hidden sm:flex items-center justify-center mx-2 mt-[-48px]">
                  <svg className="w-8 h-8 text-[#D8A95B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <button className="btn-amber px-10 py-3 rounded-full text-sm font-semibold">
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
}
