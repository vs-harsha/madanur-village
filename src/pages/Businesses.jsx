// src/pages/Businesses.jsx
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLanguage } from "../context/LanguageContext";
import { t } from "../assets/translations";

const BUSINESS_EMOJIS = ["🌾", "🛕", "🧵", "🏪", "🍱", "🏗️"];
const BUSINESS_DESCS = [
  "Local farmers growing paddy, groundnut, and chilli. Supplying to markets across Prakasam district.",
  "Fresh jasmine, marigold, and rose garlands — available daily at the temple entrance from early morning.",
  "Handloom weaving passed down through generations. Producing sarees and fabrics with traditional motifs.",
  "Your daily needs — groceries, provisions, and household essentials right in the heart of Madanur.",
  "Authentic Andhra breakfasts — idly, dosa, pongal, and upma — served fresh every morning.",
  "Local suppliers of bricks, cement, and construction materials supporting village development.",
];

export default function Businesses() {
  const { lang } = useLanguage();
  const T = t[lang];

  const BUSINESSES = [0, 1, 2, 3, 4, 5].map((i) => ({
    emoji:    BUSINESS_EMOJIS[i],
    name:     T[`business_${i}_name`],
    category: T[`business_${i}_cat`],
    desc:     BUSINESS_DESCS[i],
  }));

  return (
    <div className="min-h-screen bg-earth-50 text-gray-900">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-10 px-6 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <p className="font-body text-earth-500 text-xs uppercase tracking-[0.3em] mb-3">{T.businesses_badge}</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-gray-900 mb-4">{T.businesses_title}</h1>
          <div className="w-16 h-0.5 bg-earth-500 mb-6" />
          <p className="font-body text-gray-600 text-base max-w-2xl leading-relaxed">{T.businesses_body}</p>
        </div>
      </section>

      {/* Business grid */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BUSINESSES.map(({ emoji, category, name, desc }) => (
              <div key={name} className="group bg-white border border-gray-200 hover:border-earth-300 rounded-2xl p-7 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-4xl">{emoji}</span>
                  <span className="font-body text-xs text-earth-600 bg-earth-50 border border-earth-200 px-3 py-1 rounded-full">
                    {category}
                  </span>
                </div>
                <h3 className="font-display text-lg font-bold text-gray-900 mb-3">{name}</h3>
                <div className="w-10 h-0.5 bg-earth-500 mb-3" />
                <p className="font-body text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          {/* CTA to add business */}
          <div className="mt-16 text-center bg-earth-50 border border-earth-200 rounded-2xl p-10">
            <div className="text-4xl mb-4">🏪</div>
            <h3 className="font-display text-2xl font-bold text-gray-900 mb-3">{T.businesses_cta_title}</h3>
            <p className="font-body text-gray-600 text-sm mb-2">{T.businesses_cta_body}</p>
            <p className="font-body text-gray-400 text-xs">{T.businesses_cta_sub}</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
