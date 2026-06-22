import { Search } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1px", height: "5000px" }}>
            {/* Hero Image */}
            <img src="/Medicine-availability.png" alt="Png" className="h-[450px] w-[1234px] m-8 absolute top-[100px] left-[103px] rounded-[10px]" />

            {/* Form to search medicine */}
            <div className="absolute top-[513px] left-[231px] h-[302px] w-[978px] rounded-2xl bg-white m-8 shadow-[0_0_35px_rgba(0,0,0,0.35)]">

              <div className="absolute top-[43px] left-[207px] h-[40px] w-[564px] rounded-[10px] bg-[#f0f3f9] flex">

                <div className="relative top-[3px] left-[3px] h-[34px] w-[299px] rounded-[7px] bg-white flex items-center gap-[10px] px-6">
                  <img src="Frame.png" alt="Search" />
                  <p className="text-sm font-medium">Search by name</p>
                </div>

                <div className="flex items-center gap-[10px] px-6">
                  <img src="Scan.png" alt="Scan" />
                  <p className="text-sm">Scan presentation</p>
                </div>

              </div>

              <form className="mt-28 px-8 flex items-start gap-4">

                {/* Medicine Name */}
                <div className="flex flex-col w-[335px]">
                  <label className="text-xs font-semibold uppercase text-gray-500 mb-2">
                    Medicine Name
                  </label>

                  <div className="flex items-center border border-gray-300 rounded-lg px-3 h-[44px]">
                    <Search size={16} className="text-gray-400" />
                    <input
                      type="text"
                      placeholder="Enter a medicine name, brand, or generic"
                      className="ml-2 w-full outline-none text-sm"
                    />
                  </div>

                  <p className="text-[11px] text-gray-400 mt-2">
                    Enter a medicine name only. Do not enter symptoms,
                    diagnoses, insurance details, or prescription images.
                  </p>
                </div>

                {/* Search Area */}
                <div className="flex flex-col w-[335px]">
                  <label className="text-xs font-semibold uppercase text-gray-500 mb-2">
                    Search Area
                  </label>

                  <div className="flex items-center border border-gray-300 rounded-lg px-3 h-[44px]">
                    <img src="map.png" alt="map" />
                    <input
                      type="text"
                      placeholder="City, ZIP code, postcode, or current location"
                      className="ml-2 w-full outline-none text-sm" />
                  </div>

                  <a href="#"
                    className="mt-2 text-xs text-green-600 text-left">
                    Use my current location
                  </a>
                </div>

                {/* Search Button */}
                <div className="pt-7">
                  <button
                    type="submit"
                    className="h-[44px] px-4 rounded-lg bg-green-600 text-white flex items-center gap-2 cursor-pointer">
                    <Search size={16} />
                    Search Availability
                  </button>
                </div>

              </form>

              <div className="mt-6 pl-8 pr-16 flex items-center justify-between text-[12px] text-[#6b7280]">

                <div className="flex items-center gap-2">
                  <span>Radius:</span>

                  <div className="h-8 w-[78px] border border-gray-300 rounded-md flex items-center px-3 bg-white">
                    25 miles
                  </div>
                </div>

                <div className="flex items-center gap-10">
                  <span>Verified pharmacy network</span>
                  <span>Privacy-safe search</span>
                  <span>No exact stock quantities</span>
                </div>

              </div>

            </div>

          </div>
        </div>
      </main >
    </div >
  )
}
