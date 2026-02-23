// src/pages/Temple.jsx
import Navbar  from "../components/Navbar";
import Footer  from "../components/Footer";

export default function Temple() {
  return (
    <div className="min-h-screen bg-earth-950 text-earth-100">
      <Navbar />

      {/* Hero */}
      <section
        className="relative h-72 md:h-96 flex items-end overflow-hidden"
        style={{
          backgroundImage: "url('/images/temple-hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#3d1f08",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-earth-950 via-black/40 to-transparent" />
        <div className="relative max-w-6xl mx-auto px-6 pb-10 w-full">
          <p className="font-body text-earth-400 text-xs uppercase tracking-[0.3em] mb-2">Sacred Heritage</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-earth-50">Our Village Temple</h1>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* Image */}
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-earth-800/40">
              <img
                src="/images/temple.jpg"
                alt="Sri RamaLingeswaraSwamy Temple"
                className="w-full h-80 object-cover"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />
              <div className="hidden h-80 bg-earth-900 items-center justify-center flex-col gap-3">
                <span className="text-6xl">🛕</span>
                <p className="font-body text-earth-500 text-sm">Add public/images/temple.jpg</p>
              </div>
            </div>

            {/* Info */}
            <div>
              <h2 className="font-display text-3xl font-bold text-earth-50 mb-4">
                Sri RamaLingeswaraSwamy Temple
              </h2>
              <div className="w-12 h-0.5 bg-gradient-to-r from-earth-400 to-amber-500 mb-6" />

              <p className="font-body text-earth-300 text-sm leading-relaxed mb-4">
                The Sri RamaLingeswara Swamy Temple in Madanur, situated in the Prakasam district of Andhra Pradesh,
                is an ancient sacred site dedicated to Lord Shiva and steeped in the legends of the Ramayana.
              </p>
              <p className="font-body text-earth-300 text-sm leading-relaxed mb-4">
                According to local lore, the temple marks a historical location where Lord Rama, while seeking atonement,
                fashioned a Sykatha Lingam (a Shiva Lingam made of sand) with his own hands to offer prayers to Lord Shiva.
                This unique presiding deity, believed to be the same sand-formed Lingam, continues to be a central focus
                of devotion for pilgrims.
              </p>
              <p className="font-body text-earth-300 text-sm leading-relaxed mb-8">
                Set within a tranquil and meditative environment, the temple is particularly revered for its peaceful
                atmosphere, making it a prominent destination for those seeking both divine blessing and spiritual solace in the region.
              </p>

              {/* Details */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-earth-400 mt-0.5">🕐</span>
                  <div>
                    <p className="font-body font-semibold text-earth-200 text-sm">Darshan Timings</p>
                    <p className="font-body text-earth-400 text-sm">Morning: 6:00 AM – 12:00 PM | Evening: 4:00 PM – 8:30 PM</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-earth-400 mt-0.5">📍</span>
                  <div>
                    <p className="font-body font-semibold text-earth-200 text-sm">Location</p>
                    <p className="font-body text-earth-400 text-sm">Madanur Village, Kandukur Mandal, Prakasam District, AP</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-earth-400 mt-0.5">🎪</span>
                  <div>
                    <p className="font-body font-semibold text-earth-200 text-sm">Main Festival</p>
                    <p className="font-body text-earth-400 text-sm">Maha Shivaratri — grand celebrations every year</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery row */}
      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="font-display text-2xl font-bold text-earth-50 mb-6">Temple Gallery</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="group relative overflow-hidden rounded-xl aspect-square bg-earth-900 border border-earth-800/40">
                <img
                  src={`/images/temple-${i}.jpg`}
                  alt={`Temple photo ${i}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => { e.target.style.display = "none"; e.target.nextSibling.style.display = "flex"; }}
                />
                <div className="absolute inset-0 hidden items-center justify-center bg-earth-900/80">
                  <span className="text-3xl opacity-20">🛕</span>
                </div>
              </div>
            ))}
          </div>
          <p className="font-body text-earth-600 text-xs mt-4 text-center">
            Add temple-1.jpg to temple-4.jpg in public/images/ to populate this gallery
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
