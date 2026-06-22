import { Search } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center  font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1px", height: "1280px" }}>
            {/* Hero Image */}
            <img src="/Medicine-availability.png" alt="Png" className="h-[450px] w-[1234px] m-8 absolute top-[100px] left-[103px] rounded-[10px]" />

            {/* Form to search medicine */}
            <div className="absolute top-[513px] left-[231px] h-[302px] w-[978px] rounded-2xl bg-white m-8 shadow-[0_0_35px_rgba(0,0,0,0.35)]">

              <div className="absolute top-[43px] left-[207px] h-[40px] w-[564px] rounded-[10px] bg-[#f0f3f9] flex">

                <div className="relative top-[3px] left-[3px] h-[34px] w-[299px] rounded-[7px] bg-white flex items-center gap-[10px] px-6">
                  <img src="Frame.png" alt="Search" />
                  <input type="text" className="text-sm font-medium outline-none" placeholder="Search by name"></input>
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

            {/* Third box */}

            <div>

              <div style={{ width: "534px", height: "574px", position: "absolute", top: "881px", left: "158px", borderRadius: "32px" }}>
                <img src="MEDIA-SIDE.png" alt="Media side" />
              </div>
              <div className="flex flex-col gap-1" style={{ width: "534px", height: "585.73px", position: "absolute", top: "887.35px", left: "748px" }}>
                <button className="text-sm" style={{ height: "26px", width: "168px", border: "1px solid #B2E8D8", borderRadius: "999px", backgroundColor: "#E6F7F2", color: "#077A5C" }}>Free account features</button>
                <h1 className="text-3xl font-bold">Search now</h1>
                <h1 className="text-3xl font-bold text-[#0A9B74]">Save what matters.</h1>
                <span className="text-sm">A free account turns one-off searches into a personal availability workspace — with full control over your history, saved medicines, and privacy preferences.</span>

                <div className="flex flex-col gap-2">
                  <div className="flex justify-center gap-2 text-sm mt-4">
                    <img src="tick.png" alt="tick" style={{ height: "20px", width: "20px", borderRadius: "6px", marginTop: "2px" }} />
                    <span><span className="font-bold">Recent searches —</span> return to medicines you checked without retyping, with full history control and easy deletion.</span>
                  </div>

                  <div className="flex justify-center gap-2 text-sm mt-4">
                    <img src="tick.png" alt="tick" style={{ height: "20px", width: "20px", borderRadius: "6px", marginTop: "2px" }} />
                    <span><span className="font-bold">Saved medicines —</span>follow recurring medicines with custom labels like "Dad's medication."</span>
                  </div>

                  <div className="flex justify-center gap-2 text-sm mt-4">
                    <img src="tick.png" alt="tick" style={{ height: "20px", width: "20px", borderRadius: "6px", marginTop: "2px" }} />
                    <span><span className="font-bold">Availability alerts —</span> get notified when confidence improves or a pharmacy confirms availability.</span>
                  </div>

                  <div className="flex justify-center gap-2 text-sm mt-4">
                    <img src="tick.png" alt="tick" style={{ height: "20px", width: "20px", borderRadius: "6px", marginTop: "2px" }} />
                    <span><span className="font-bold">Privace dashboards —</span> view, delete, export, and pause history — always under your control.</span>
                  </div>

                  <div className="flex justify-center gap-2 text-sm mt-4">
                    <img src="tick.png" alt="tick" style={{ height: "20px", width: "20px", borderRadius: "6px", marginTop: "2px" }} />
                    <span><span className="font-bold">Caregiver mode —</span> organize saved medicines for family members using nickname labels.</span>
                  </div>

                </div>
                <div className="flex">
                  <button style={{ width: "187.5px", height: "43.6px", position: "absolute", top: "486.85px", left: "-2px", borderRadius: "999px", backgroundColor: "#0A9B74", color: "white" }}>Create free account</button>
                  <button style={{ height: "46px", width: "202px", position: "absolute", top: "485.67px", left: "197.5px", border: "1px solid #B0BDD6", borderRadius: "999px", fontWeight: "600" }}>Learn about privacy</button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </main >

      {/* stats bar */}
      <img src="stats-bar.png" alt="Stats" style={{ width: "100vw", height: "108.2px", border: "0.8px 0px solid #1A56DB1A", position: "absolute", top: "1477.35px", left: "0px" }} />

      {/* audience routing */}

      <div style={{ width: "100vw", paddingTop: "60px", backgroundColor: "#F4F7FC", padding: "25px" }} className="flex flex-col items-center">
        <div className="w-[160px] h-[36px] rounded-full border border-[#1A56DB2E] bg-[#E8F0FE] flex items-center justify-center">
          <span className="text-sm text-[#1A56DB]">
            Built for every role
          </span>
        </div>
        <div className="w-335px flex flex-col items-center mt-4">
          <h1 className="text-3xl font-bold">One platform.</h1>
          <h1 className="text-3xl font-bold text-[#0A9B74]">Every stakeholder.</h1>
          <p style={{ width: "515.33px", fontSize: "small", textAlign: "center", marginTop: "10px" }}>From patients checking a single pharmacy to governments monitoring national supply — ZoikoMeds routes every audience to the right tool.</p>
        </div>

        <div style={{ display: "flex", gap: "10px", marginTop: "35px" }}>
          <div style={{ width: "213.60px", height: "219px", borderRadius: "22px", border: "1px solid #B2E8D8" }}>
            <img src="card1.png" alt="Patients & caregiver" />
          </div>
          <div style={{ width: "213.60px", height: "219px", borderRadius: "22px", border: "1px solid #1A56DB1A" }}>
            <img src="card2.png" alt="Pharmacies" />
          </div>
          <div style={{ width: "213.60px", height: "219px", borderRadius: "22px", border: "1px solid #1A56DB1A" }}>
            <img src="card3.png" alt="Health Systems & telehealth" />
          </div>
          <div style={{ width: "213.60px", height: "219px", borderRadius: "22px", border: "1px solid #1A56DB1A" }}>
            <img src="card4.png" alt="Government and manufacturers" />
          </div>
          <div style={{ width: "213.60px", height: "219px", borderRadius: "22px", border: "1px solid #1A56DB1A" }}>
            <img src="card5.png" alt="Developer & partners" />
          </div>
        </div>
      </div>


      {/* platform moat */}

      <div style={{ backgroundColor: "#0D1E3D", margin: "0 auto", padding: "0 24px", width: "100%" }}>
        <div style={{ paddingTop: "60px", padding: "25px" }} className="flex flex-col">

          <div className="flex justify-between px-35 py-10">
            <div className="flex flex-col gap-2">
              <div className="w-[220px] h-[25px] rounded-full border border-[#FFFFFF26] bg-[#FFFFFF26] flex items-center justify-center">
                <span className="text-sm text-white">
                  Built for every role
                </span>
              </div>
              <h1 className="text-3xl font-bold text-white">Three engines.</h1>
              <h1 className="text-3xl font-bold text-[#3DE8BB]">One availability layer.</h1>
            </div>
            <div style={{ width: "323px" }}>
              <span className="text-sm text-white/50">Every search, alert, and enterprise signal runs
                on a purpose-built infrastructure stack — not generic database
                queries. MediBase™, ZoikoAvail™, and ZoikoSignal™ are named,
                governed, and commercialised infrastructure assets.</span>
            </div>
          </div>

          <div className="px-35 flex gap-4">
            <div style={{ height: "331px", width: "362.66px", borderRadius: "32px", border: "1px solid #1A56DB4D" }}>
              <img src="platcard1.png" alt="plat card 1" />
            </div>
            <div style={{ height: "331px", width: "362.66px", borderRadius: "32px", border: "1px solid #0A9B744D" }}>
              <img src="platcard2.png" alt="plat card 2" />
            </div>
            <div style={{ height: "331px", width: "362.66px", borderRadius: "32px", border: "1px solid #8250DC4D" }}>
              <img src="platcard3.png" alt="Plat card 3" />
            </div>
          </div>

        </div>
      </div>

      {/* Enterprise */}

      <div style={{ width: "100vw", paddingTop: "60px", backgroundColor: "white", padding: "25px" }} className="flex flex-col items-center">
        <div className="w-[160px] h-[36px] rounded-full border border-[#B2E8D8] bg-[#E6F7F2] flex items-center justify-center">
          <span className="text-sm text-[#077A5C]">
            Enterprise Solutions
          </span>
        </div>
        <div className="w-335px flex flex-col items-center mt-4">
          <h1 className="text-3xl font-bold">Intelligence-grade data</h1>
          <h1 className="text-3xl font-bold text-[#0A9B74]"><span className="text-black">for</span> institutional buyers.</h1>
          <p style={{ width: "515.33px", fontSize: "small", textAlign: "center", marginTop: "10px" }}>ZoikoMeds converts anonymized search behavior into verified shortage
            intelligence — available as governed data products and API integrations
            for health systems, governments, pharma, and developers.</p>
        </div>

        <div style={{ display: "flex", gap: "10px", marginTop: "35px", flexWrap: "wrap", alignItems: "center", justifyContent: "center" }}>
          <div style={{ width: "554px", height: "192.7px", borderRadius: "32px", border: "1px solid #B2E8D8" }}>
            <img src="ecard.png" alt="ZoikoSignal™ Shortage Intelligence" />
          </div>
          <div style={{ width: "554px", height: "192.7px", borderRadius: "32px", border: "1px solid #1A56DB1A" }}>
            <img src="ecard2.png" alt="ZoikoAvail™ API" />
          </div>
          <div style={{ width: "554px", height: "192.7px", borderRadius: "32px", border: "1px solid #1A56DB1A" }}>
            <img src="ecard3.png" alt="MediBase™ Data Services" />
          </div>
          <div style={{ width: "554px", height: "192.7px", borderRadius: "32px", border: "1px solid #1A56DB1A" }}>
            <img src="ecard4.png" alt="Verified Pharmacy Network" />
          </div>
        </div>
        <img src="ecardbanner.png" alt="banner" style={{ height: "137px", marginTop: "15px" }} />
      </div>

      {/* Trust & compliance */}

      <div style={{ width: "100vw", paddingTop: "60px", backgroundColor: "#F4F7FC", padding: "25px" }} className="flex flex-col items-center">
        <div className="w-[160px] h-[36px] rounded-full border border-[#B2E8D8] bg-[#E6F7F2] flex items-center justify-center">
          <span className="text-xs text-[#077A5C]">
            TRUST & COMPLIANCE
          </span>
        </div>
        <div className="w-335px flex flex-col items-center mt-4">
          <h1 className="text-3xl font-bold">Built for verified trust</h1>
          <h1 className="text-3xl font-bold text-[#0A9B74]"><span className="text-black">and</span> regulated environments.</h1>
          <p style={{ width: "515.33px", fontSize: "small", textAlign: "center", marginTop: "10px" }}>Every boundary is explicit, every data decision is user-controlled,
            and every architecture decision starts from privacy-by-design principles.</p>
        </div>

        <div style={{ display: "flex", gap: "10px", marginTop: "35px", flexWrap: "wrap", alignItems: "center", justifyContent: "center" }}>
          <div style={{ width: "368px", height: "225px", borderRadius: "22px", border: "1px solid #B2E8D8" }}>
            <img src="trust1.png" alt="Privacy by design" />
          </div>
          <div style={{ width: "364px", height: "225px", borderRadius: "22px", border: "1px solid #1A56DB1A" }}>
            <img src="trust2.png" alt="Verified pharmacies only" />
          </div>
          <div style={{ width: "364px", height: "225px", borderRadius: "22px", border: "1px solid #1A56DB1A" }}>
            <img src="trust3.png" alt="Strict role boundaries" />
          </div>
          <div style={{ width: "364px", height: "225px", borderRadius: "22px", border: "1px solid #1A56DB1A" }}>
            <img src="trust4.png" alt="Confidence signals only" />
          </div>
          <div style={{ width: "366px", height: "225px", borderRadius: "22px", border: "1px solid #1A56DB1A" }}>
            <img src="trust5.png" alt="Controlled medicine safeguards" />
          </div>
          <div style={{ width: "364px", height: "225px", borderRadius: "22px", border: "1px solid #1A56DB1A" }}>
            <img src="trust6.png" alt="Enterprise security posture" />
          </div>
        </div>
        <img src="ecardbanner.png" alt="banner" style={{ height: "137px", marginTop: "15px" }} />
      </div>

      {/* GLOBAL + FINAL CTA */}

      <div style={{ width: "100vw", paddingTop: "60px", backgroundColor: "white", padding: "25px" }} className="flex flex-col items-center">
        <div className="w-[160px] h-[36px] rounded-full border border-[#1A56DB2E] bg-[#E8F0FE] flex items-center justify-center">
          <span className="text-xs font-medium text-[#1A56DB]">
            GLOBAL EXPANSION
          </span>
        </div>
        <div className="w-335px flex flex-col items-center mt-4">
          <h1 className="text-3xl font-bold">Scalling market by market,</h1>
          <h1 className="text-3xl font-bold text-[#0A9B74]"><span className="text-black">jurisdiction by</span> jurisdiction.</h1>
          <p style={{ width: "515.33px", fontSize: "small", textAlign: "center", marginTop: "10px" }}>USA first, UK second — each market activated only after pharmacy network density,
            regulatory clearance, and infrastructure readiness are confirmed.</p>
        </div>

        <div style={{ display: "flex", gap: "10px", marginTop: "35px" }}>
          <div style={{ width: "366.60px", height: "73px", borderRadius: "22px", border: "1px solid #B2E8D8" }}>
            <img src="market1.png" alt="🇺🇸 United States Beta launch · Active" />
          </div>
          <div style={{ width: "366.60px", height: "73px", borderRadius: "22px", border: "1px solid #1A56DB1A" }}>
            <img src="market2.png" alt="🇬🇧 United Kingdom Launching next" />
          </div>
          <div style={{ width: "366.60px", height: "73px", borderRadius: "22px", border: "1px solid #1A56DB1A" }}>
            <img src="market3.png" alt="🌍 45+ Markets Readiness review underway" />
          </div>
        </div>

        <div style={{ height: "280.45px", width: "1124px", borderRadius: "32px", background: "linear-gradient(to right, #0D1E3D, #1A4A7A)", marginTop: "15px", padding: "50px" }} className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold text-white">Search now, save what matters, or <span className="text-[#3DE8BB]">connect your organization.</span></h1>
          <p className="text-xs text-white/50 w-[366px]">
            Availability intelligence for patients, pharmacies, health systems,
            and governments — from a single verified source of truth.
          </p>
          <div className="mt-10 flex gap-2">
            <button className="flex items-center gap-2 text-white bg-[#0A9B74] px-5 p-2 text-sm" style={{ borderRadius: "999px" }}>
              <Search size={20} />
              <span>Check a medicine now</span>
            </button>
            <button className="flex items-center gap-2 text-white px-5 p-2 text-sm" style={{ border: "1px solid #ffffff", borderRadius: "999px" }}>
              <span>Create free account</span>
            </button>
            <button className="flex items-center gap-2 text-white px-5 p-2 text-sm" style={{ border: "1px solid #ffffff", borderRadius: "999px" }}>
              <span>Enterprise sales</span>
            </button>
          </div>
        </div>
      </div>

    </div >
  )
}