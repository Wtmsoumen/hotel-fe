export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex flex-col">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/banner1.png')" }}
      />
      {/* Gradient overlay */}
      <div
        className="absolute inset-0 bg-linear-to-t to-[#00142299] via-[#00427462] from-[#00427400]"
      />

      {/* Left side social strip */}
      {/* <div className="absolute left-4 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4 z-10">
        <div className="w-px h-16 bg-white/20" />
        {["f", "in", "t", "ig"].map((s) => (
          <span key={s} className="text-white/40 text-xs font-bold hover:text-[#D8A95B] cursor-pointer transition-colors">
            {s}
          </span>
        ))}
        <div className="w-px h-16 bg-white/20" />
      </div> */}

      {/* Main content */}
      <div className="relative z-10 flex flex-col justify-center flex-1 pt-28 pb-16 sm:pb-24 lg:pb-8 max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-white font-bold leading-[1.1] uppercase flex flex-col items-center">
            <span className="block text-3xl sm:text-5xl lg:text-[56px] font-normal">
              Discover The most
            </span>
            <span className="block text-4xl sm:text-7xl lg:text-[84px]">
              Engaging Place
            </span>
          </h1>
          <p className="text-white text-lg sm:text-[22px] leading-relaxed mb-10 sm:mb-20">
            Search deals on hotels, homes, and much more...
          </p>
        </div>

        {/* Search bar */}
        <div className="lg:absolute lg:bottom-[-3em] lg:left-[5%] lg:right-[5%] max-w-6xl sm:mx-auto bg-white rounded-3xl lg:rounded-full shadow-lg p-5 lg:p-4 lg:pl-10 flex flex-col lg:flex-row items-center gap-4 lg:gap-6">
          <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6 w-full">
            {/* Where */}
            <div className="w-full lg:w-[30%]">
              <label className="block text-[14px] font-normal text-black tracking-wider ml-1 mb-1.5">
                Where are you going?
              </label>
              <div className="flex items-center gap-2 border border-gray-200 rounded-full px-3 py-2.5 focus-within:border-[#D8A95B] transition-colors">
                <svg className="w-4 h-4 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search destination..."
                  className="w-full text-sm text-gray-700 outline-none placeholder-gray-400 bg-transparent"
                />
              </div>
            </div>

            {/* Check In */}
            <div className="w-full lg:w-[22%]">
              <label className="block text-[14px] font-normal text-black tracking-wider ml-1 mb-1.5">
                Check In
              </label>
              <div className="flex items-center gap-2 border border-gray-200 rounded-full px-3 py-2.5 focus-within:border-[#D8A95B] transition-colors">
                <svg className="w-4 h-4 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <input type="date" className="w-full text-sm text-gray-600 outline-none bg-transparent" />
              </div>
            </div>

            {/* Check Out */}
            <div className="w-full lg:w-[22%]">
              <label className="block text-[14px] font-normal text-black tracking-wider ml-1 mb-1.5">
                Check Out
              </label>
              <div className="flex items-center gap-2 border border-gray-200 rounded-full px-3 py-2.5 focus-within:border-[#D8A95B] transition-colors">
                <svg className="w-4 h-4 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <input type="date" className="w-full text-sm text-gray-600 outline-none bg-transparent" />
              </div>
            </div>

            {/* Guests */}
            <div className="w-full lg:w-[30%]">
              <label className="block text-[14px] font-normal text-black tracking-wider ml-1 mb-1.5">
                Guests
              </label>
              <div className="flex items-center gap-2 border border-gray-200 rounded-full px-3 py-2.5 focus-within:border-[#D8A95B] transition-colors">
                <div className="flex items-center gap-2 w-full lg:w-[45%]">
                  <svg className="w-4 h-4 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <select className="w-full text-sm text-gray-600 outline-none bg-transparent">
                    <option value="0">Adults</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4+">4+</option>
                  </select>
                </div>
                <div className="flex items-center gap-2 border-l border-gray-200 pl-2 w-full lg:w-[55%]">
                  <svg className="w-4 h-4 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <select className="w-full text-sm text-gray-600 outline-none bg-transparent">
                    <option value="0">Children</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4+">4+</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Search button */}
          <div className="flex justify-center lg:justify-end w-full lg:w-auto">
            <button className="flex items-center justify-center gap-2 btn-amber w-full lg:w-15 h-12 lg:h-15 rounded-full text-sm font-semibold">
              <svg className="w-5.5 h-5.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span className="lg:hidden">Search Hotels</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
