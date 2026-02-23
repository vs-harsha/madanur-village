// src/pages/Temple.jsx
import Navbar  from "../components/Navbar";
import Footer  from "../components/Footer";
import { templeHeroImage, templeMainImage, templeGalleryImages } from "../assets/images";
import { useLanguage } from "../context/LanguageContext";
import { t } from "../assets/translations";

export default function Temple() {
  const { lang } = useLanguage();
  const T = t[lang];

  return (
    <div className="min-h-screen bg-earth-50 text-gray-900">
      <Navbar />

      {/* Hero */}
      <section
        className="relative h-72 md:h-96 flex items-end overflow-hidden"
        style={{
          backgroundImage: `url('${templeHeroImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#3d1f08",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="relative max-w-6xl mx-auto px-6 pb-10 w-full">
          <p className="font-body text-amber-300 text-xs uppercase tracking-[0.3em] mb-2">{T.temple_badge}</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white">{T.temple_hero_title}</h1>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* Image */}
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200">
              <img
                src={templeMainImage}
                alt="Sri RamaLingeswaraSwamy Temple"
                className="w-full h-80 object-cover"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />
              <div className="hidden h-80 bg-earth-100 items-center justify-center flex-col gap-3">
                <span className="text-6xl">🛕</span>
                <p className="font-body text-gray-400 text-sm">Add public/images/temple.jpg</p>
              </div>
            </div>

            {/* Info */}
            <div>
              <h2 className="font-display text-3xl font-bold text-gray-900 mb-4">{T.temple_name}</h2>
              <div className="w-12 h-0.5 bg-earth-500 mb-6" />

              <p className="font-body text-gray-600 text-sm leading-relaxed mb-4">{T.temple_p1}</p>
              <p className="font-body text-gray-600 text-sm leading-relaxed mb-4">{T.temple_p2}</p>
              <p className="font-body text-gray-600 text-sm leading-relaxed mb-8">{T.temple_p3}</p>

              {/* Details */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-earth-500 mt-0.5">🕐</span>
                  <div>
                    <p className="font-body font-semibold text-gray-800 text-sm">{T.temple_timings_label}</p>
                    <p className="font-body text-gray-500 text-sm">{T.temple_timings_value}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-earth-500 mt-0.5">📍</span>
                  <div>
                    <p className="font-body font-semibold text-gray-800 text-sm">{T.temple_location_label}</p>
                    <p className="font-body text-gray-500 text-sm">{T.temple_location_value}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-earth-500 mt-0.5">🎪</span>
                  <div>
                    <p className="font-body font-semibold text-gray-800 text-sm">{T.temple_festival_label}</p>
                    <p className="font-body text-gray-500 text-sm">{T.temple_festival_value}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery row */}
      <section className="pb-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="font-display text-2xl font-bold text-gray-900 mb-6">{T.temple_gallery_title}</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {templeGalleryImages.map(({ src, label }, i) => (
              <div key={i} className="group relative overflow-hidden rounded-xl aspect-square bg-earth-100 border border-earth-200">
                <img
                  src={src}
                  alt={label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => { e.target.style.display = "none"; e.target.nextSibling.style.display = "flex"; }}
                />
                <div className="absolute inset-0 hidden items-center justify-center bg-earth-100">
                  <span className="text-3xl opacity-30">🛕</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="font-body text-white text-xs font-semibold">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
