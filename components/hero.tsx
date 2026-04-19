export function Hero() {
  return (
    <div className="w-screen ">

      <div className="sticky top-0 w-screen h-[70vh] bg-[#050505]  flex items-center">

        {/* 🧱 Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">

          <div className="flex flex-col md:flex-col items-center justify-between gap-12">

            {/* ✍️ Text Section */}

            <div className="w-full md:w-1/2 text-center md:text-center sticky top-0">
              <h1 className="text-4xl md:text-6xl font-semibold text-white leading-tight">
                Stop sending 10 links.
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-blue-500 to-emerald-400">
                  Make one worth clicking.
                </span>
              </h1>

              <p className="mt-6 text-gray-400 text-base md:text-lg max-w-lg mx-auto  text-center">
                Build a clean public profile, share your links, and let people find everything about you in one place.
              </p>


            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-9 py-3 mb-10 rounded-xl bg-black text-white font-medium 
                     border border-white/20 
                     hover:bg-white hover:text-black transition-all duration-200">
                Get Started
              </button>

            </div>


          </div>
        </div>
      </div>
      <div className="w-screen flex justify-center bg-[#050505] relative pb-2 ">

        {/* 🌈 BACKGROUND GLOW (behind box) */}
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <div className="w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(255,0,128,0.25),rgba(0,150,255,0.2),rgba(0,255,180,0.15),transparent_100%)] blur-3xl" />
        </div>

        {/* 🧱 GLASS BORDER BOX */}
        <div className="w-[100%] sm:w-[800px] h-[650px] rounded-2xl bg-white/5 border backdrop-blur-md flex items-center justify-center">


          <div className="relative w-[95%] sm:w-[750px] h-[600px] rounded-2xl 
                  bg-black 
                  flex items-center justify-center">

          </div>
        </div>
      </div>

    </div>
  );
}