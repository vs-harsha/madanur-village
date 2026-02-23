// src/pages/Festivals.jsx
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const FESTIVALS = [
  {
    emoji: "🔱",
    name: "Maha Shivaratri",
    month: "February / March",
    desc: "The grandest celebration of the year at Sri RamaLingeswaraSwamy Temple. Thousands of devotees gather for all-night prayers, abhishekam, and processions through the village streets.",
    highlight: "All-night vigil & lamp procession",
  },
  {
    emoji: "🌾",
    name: "Sankranti",
    month: "January",
    desc: "The harvest festival of Andhra Pradesh celebrated with great joy — decorated cattle, colourful rangoli, kite flying, and the warmth of family gatherings over traditional sweets.",
    highlight: "Cattle parade & kite flying",
  },
  {
    emoji: "🎭",
    name: "Ugadi",
    month: "March / April",
    desc: "Telugu New Year celebrated with Panchangam readings, traditional Ugadi pachadi, and cultural programs that bring the whole village together in joy and festivity.",
    highlight: "Ugadi pachadi & cultural programs",
  },
  {
    emoji: "🪔",
    name: "Deepawali",
    month: "October / November",
    desc: "The festival of lights transforms Madanur into a glowing tapestry of earthen lamps, fireworks, sweets, and prayers — a spectacle of joy from every household.",
    highlight: "Village lamp-lighting ceremony",
  },
  {
    emoji: "🌸",
    name: "Vinayaka Chaturthi",
    month: "August / September",
    desc: "Lord Ganesha is celebrated across Madanur with beautiful clay idols installed in homes and community pandals, followed by vibrant processions and immersion on the final day.",
    highlight: "10-day community celebration",
  },
  {
    emoji: "🌙",
    name: "Ramadan & Eid",
    month: "Varies",
    desc: "Our Muslim brothers and sisters celebrate Ramadan and Eid with community prayers and feasts — a reflection of Madanur's spirit of harmony and togetherness.",
    highlight: "Community iftaar gatherings",
  },
];

export default function Festivals() {
  return (
    <div className="min-h-screen bg-earth-950 text-earth-100">
      <Navbar />

      {/* Hero */}
      <section
        className="relative h-64 md:h-80 flex items-end overflow-hidden"
        style={{
          backgroundImage: "url('/images/festivals-hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#3d1f08",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-earth-950 via-black/40 to-transparent" />
        <div className="relative max-w-6xl mx-auto px-6 pb-10 w-full">
          <p className="font-body text-earth-400 text-xs uppercase tracking-[0.3em] mb-2">Culture & Celebration</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-earth-50">Festivals of Madanur</h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 px-6 bg-earth-900">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-body text-earth-300 text-base leading-relaxed">
            Throughout the year, Madanur comes alive with colour, devotion, and community spirit.
            Every festival is an occasion that unites families, neighbours, and returning sons and daughters of the village.
          </p>
        </div>
      </section>

      {/* Festival cards */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FESTIVALS.map(({ emoji, name, month, desc, highlight }) => (
              <div key={name} className="group bg-earth-900/70 border border-earth-800/50 hover:border-earth-600/60 rounded-2xl p-7 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="text-4xl mb-4">{emoji}</div>
                <h3 className="font-display text-xl font-bold text-earth-50 mb-1">{name}</h3>
                <p className="font-body text-earth-400 text-xs uppercase tracking-widest mb-4">{month}</p>
                <div className="w-10 h-0.5 bg-gradient-to-r from-earth-400 to-amber-500 mb-4" />
                <p className="font-body text-earth-300 text-sm leading-relaxed mb-4">{desc}</p>
                <div className="inline-flex items-center gap-2 bg-earth-800/60 border border-earth-700/40 rounded-full px-3 py-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-earth-400" />
                  <span className="font-body text-earth-400 text-xs">{highlight}</span>
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
