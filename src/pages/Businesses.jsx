// src/pages/Businesses.jsx
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const BUSINESSES = [
  { emoji: "🌾", category: "Agriculture", name: "Paddy Farmers Cooperative", desc: "Local farmers growing paddy, groundnut, and chilli. Supplying to markets across Prakasam district." },
  { emoji: "🛕", category: "Services",    name: "Temple Flower Vendors",      desc: "Fresh jasmine, marigold, and rose garlands — available daily at the temple entrance from early morning." },
  { emoji: "🧵", category: "Craft",       name: "Traditional Weavers",        desc: "Handloom weaving passed down through generations. Producing sarees and fabrics with traditional motifs." },
  { emoji: "🏪", category: "Retail",      name: "Village General Stores",     desc: "Your daily needs — groceries, provisions, and household essentials right in the heart of Madanur." },
  { emoji: "🍱", category: "Food",        name: "Local Tiffin Centers",       desc: "Authentic Andhra breakfasts — idly, dosa, pongal, and upma — served fresh every morning." },
  { emoji: "🏗️", category: "Construction", name: "Building Materials",        desc: "Local suppliers of bricks, cement, and construction materials supporting village development." },
];

export default function Businesses() {
  return (
    <div className="min-h-screen bg-earth-50 text-gray-900">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-10 px-6 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <p className="font-body text-earth-500 text-xs uppercase tracking-[0.3em] mb-3">Local Economy</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Businesses &amp; Livelihoods</h1>
          <div className="w-16 h-0.5 bg-earth-500 mb-6" />
          <p className="font-body text-gray-600 text-base max-w-2xl leading-relaxed">
            Madanur's economy is built on the hard work of its farmers, craftspeople, and small business owners.
            Here's a glimpse into the livelihoods that power our community.
          </p>
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
            <h3 className="font-display text-2xl font-bold text-gray-900 mb-3">Have a business in Madanur?</h3>
            <p className="font-body text-gray-600 text-sm mb-2">
              Contact the admin to get your business listed on this page.
            </p>
            <p className="font-body text-gray-400 text-xs">
              We want to support every local business in our community.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
