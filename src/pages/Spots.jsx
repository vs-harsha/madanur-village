// src/pages/Spots.jsx
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { spotsHeroImage, spotImages } from "../assets/images";

export default function Spots() {
  return (
    <div className="min-h-screen bg-earth-50 text-gray-900">
      <Navbar />

      {/* Hero */}
      <section
        className="relative h-72 md:h-96 flex items-end overflow-hidden"
        style={{
          backgroundImage: `url('${spotsHeroImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#2d4a1e",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="relative max-w-6xl mx-auto px-6 pb-10 w-full">
          <p className="font-body text-amber-300 text-xs uppercase tracking-[0.3em] mb-2">Natural Beauty</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white">Beautiful Spots</h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 px-6 bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-body text-earth-500 text-xs uppercase tracking-[0.25em] mb-3">Explore</p>
          <h2 className="font-display text-3xl font-bold text-gray-900 mb-4">Places to See in Madanur</h2>
          <div className="w-12 h-0.5 bg-earth-500 mx-auto mb-5" />
          <p className="font-body text-gray-600 text-base leading-relaxed">
            From the serene temple stepwell to golden paddy fields, Madanur holds quiet beauty in every corner.
            Explore the spots that make our village unforgettable.
          </p>
        </div>
      </section>

      {/* Spots grid */}
      <section className="py-16 px-6 bg-earth-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {spotImages.map(({ src, label, desc }, i) => (
              <div
                key={i}
                className="group bg-white border border-gray-200 hover:border-earth-300 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                {/* Photo */}
                <div className="relative h-52 overflow-hidden bg-earth-100">
                  <img
                    src={src}
                    alt={label}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "flex";
                    }}
                  />
                  <div className="absolute inset-0 hidden flex-col items-center justify-center gap-2 bg-earth-100">
                    <span className="text-5xl opacity-30">🌿</span>
                    <p className="font-body text-earth-400 text-xs text-center px-4">
                      Add public/images/spot-{i + 1}.jpg
                    </p>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="font-display text-lg font-bold text-gray-900 mb-2">{label}</h3>
                  <div className="w-8 h-0.5 bg-earth-500 mb-3" />
                  <p className="font-body text-gray-600 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-xl mx-auto text-center bg-earth-50 border border-earth-200 rounded-2xl p-10">
          <div className="text-4xl mb-4">📸</div>
          <h3 className="font-display text-2xl font-bold text-gray-900 mb-3">
            Know a hidden gem?
          </h3>
          <p className="font-body text-gray-600 text-sm">
            Help us capture every beautiful corner of Madanur. Contact the admin to add a spot to this page.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
