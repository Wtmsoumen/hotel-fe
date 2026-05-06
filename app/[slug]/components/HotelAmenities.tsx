const amenities = [
  { label: "TV", icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
  { label: "Refrigerator", icon: "M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2zm0 7h14M8 3v7" },
  { label: "Air conditioning", icon: "M9.59 4.59A2 2 0 1111 8H2m10.59 11.41A2 2 0 1010 16H2m15.73-8.27A2 2 0 1119 12H2" },
  { label: "Air conditioning", icon: "M9.59 4.59A2 2 0 1111 8H2m10.59 11.41A2 2 0 1010 16H2m15.73-8.27A2 2 0 1119 12H2" },
  { label: "WiFi", icon: "M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" },
  { label: "Heating", icon: "M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" },
  { label: "Hot Water", icon: "M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 0v4m0 14v-4m10-6h-4M6 12H2" },
  { label: "Aquaticus", icon: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" },
  { label: "Chok alt lift", icon: "M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" },
  { label: "Free Parking", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
  { label: "Free Parking", icon: "M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8" },
];

export default function HotelAmenities() {
  return (
    <section id="amenities" className="py-10 scroll-mt-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-8">
          <h2 className="section-title">Amenities</h2>
          <p className="text-black text-xs mt-2">Maecenas facilisis condimentum nisl id consectetur. Duis dignissim nisl a libero ornare, eget laoreet tortor cursus. Cras quis dolor commodo, fringilla ex eget, tempus dui. Nulla rhoncus malesuada nisl, at accumsan lacus ultrices nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {amenities.map((a, i) => (
            <div key={i} className="flex items-center gap-2.5 border border-gray-200 rounded-xl px-3 py-2.5">
              <div className="w-7 h-7 rounded-full bg-[#FFF6E8] flex items-center justify-center shrink-0">
                <svg className="w-3.5 h-3.5 text-[#D8A95B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d={a.icon} />
                </svg>
              </div>
              <span className="text-xs text-gray-700 font-medium leading-tight">{a.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
