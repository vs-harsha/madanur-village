// src/pages/History.jsx
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { historyHeroImage } from "../assets/images";

const TIMELINE = [
  {
    era: "Ancient Era",
    period: "~1000 BCE – 12th Century",
    icon: "🏛️",
    heading: "Origins & Sacred Land",
    body: "The land of Madanur has been inhabited since ancient times. Local lore traces it to the Ramayana era — Lord Rama is believed to have passed through this region on his journey south. The construction of the Sri RamaLingeswaraSwamy Temple, dedicated to Lord Shiva with a unique sand Lingam made by Lord Rama himself, marks the earliest recorded chapter of the village's sacred history.",
  },
  {
    era: "Medieval Period",
    period: "13th – 17th Century",
    icon: "⚔️",
    heading: "Under the Kingdoms",
    body: "During the rule of the Kakatiya and later the Vijayanagara Empire, Madanur was part of a prosperous agricultural belt in the Prakasam region. The fertile Krishna-tributary plains supported large farming communities. The temple was expanded during this period, becoming an important pilgrimage centre for devotees from surrounding villages and mandals.",
  },
  {
    era: "Colonial Era",
    period: "18th – 19th Century",
    icon: "📜",
    heading: "Life Under British Rule",
    body: "Madanur fell under the Nizam's dominion and later came under the Madras Presidency during British rule. The village economy was largely agrarian — paddy, groundnut, and pulses. Village records from this period mention community wells, a thriving weekly market, and the temple as the social and spiritual centre of life.",
  },
  {
    era: "Post Independence",
    period: "1947 – 1990s",
    icon: "🇮🇳",
    heading: "A New Chapter",
    body: "Following Indian independence, Madanur became part of the Prakasam District in Andhra Pradesh. Land reforms transformed the agricultural landscape. A primary school was established, and electrification brought new opportunities to the village. The younger generation began accessing higher education, while maintaining deep roots in village tradition.",
  },
  {
    era: "Modern Era",
    period: "2000s – Present",
    icon: "🌐",
    heading: "Community & Progress",
    body: "Today Madanur is a thriving rural community with improved road connectivity, primary healthcare, and growing digital access. Sons and daughters of the village have spread across India and the world, yet Maha Shivaratri and Sankranti still bring thousands home. The village holds its identity while embracing the future.",
  },
];

export default function History() {
  return (
    <div className="min-h-screen bg-earth-50 text-gray-900">
      <Navbar />

      {/* Hero */}
      <section
        className="relative h-72 md:h-96 flex items-end overflow-hidden"
        style={{
          backgroundImage: `url('${historyHeroImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#1e2d3a",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="relative max-w-6xl mx-auto px-6 pb-10 w-full">
          <p className="font-body text-amber-300 text-xs uppercase tracking-[0.3em] mb-2">Heritage</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white">History of Madanur</h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-14 px-6 bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-body text-earth-500 text-xs uppercase tracking-[0.25em] mb-3">Our Story</p>
          <h2 className="font-display text-3xl font-bold text-gray-900 mb-4">Centuries of Heritage</h2>
          <div className="w-12 h-0.5 bg-earth-500 mx-auto mb-5" />
          <p className="font-body text-gray-600 text-base leading-relaxed">
            Madanur's story spans thousands of years — from sacred Ramayana legends and ancient kingdoms,
            through the colonial period, to independence and the vibrant community of today.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-6 bg-earth-50">
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-earth-200 hidden sm:block" />

            <div className="space-y-10">
              {TIMELINE.map(({ era, period, icon, heading, body }, i) => (
                <div key={i} className="flex gap-6 sm:gap-8 items-start group">
                  {/* Icon bubble */}
                  <div className="relative flex-shrink-0 w-16 h-16 rounded-full bg-white border-2 border-earth-300 flex items-center justify-center shadow-sm group-hover:border-earth-500 transition-colors z-10">
                    <span className="text-2xl">{icon}</span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-white border border-gray-200 hover:border-earth-300 rounded-2xl p-6 transition-all duration-300 hover:shadow-md">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="font-body text-xs font-semibold text-earth-600 bg-earth-50 border border-earth-200 px-2.5 py-0.5 rounded-full">
                        {era}
                      </span>
                      <span className="font-body text-xs text-gray-400">{period}</span>
                    </div>
                    <h3 className="font-display text-xl font-bold text-gray-900 mt-2 mb-3">{heading}</h3>
                    <div className="w-8 h-0.5 bg-earth-500 mb-3" />
                    <p className="font-body text-gray-600 text-sm leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-5xl mb-5">📖</div>
          <blockquote className="font-display text-xl sm:text-2xl text-gray-700 italic leading-relaxed mb-4">
            "A village is not just a place — it is a living memory, passed from one generation to the next."
          </blockquote>
          <p className="font-telugu text-earth-500 text-base">మన గ్రామం — మన గర్వం</p>
          <p className="font-body text-gray-400 text-sm mt-1">Our village — our pride</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
