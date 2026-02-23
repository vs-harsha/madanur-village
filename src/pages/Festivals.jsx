// src/pages/Festivals.jsx
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { festivalsHeroImage } from "../assets/images";
import { useLanguage } from "../context/LanguageContext";
import { t } from "../assets/translations";

const FESTIVAL_EMOJIS = ["🔱", "🌾", "🎭", "🪔", "🌸", "🌙"];
const FESTIVAL_DESCS = {
  en: [
    "The grandest celebration of the year at Sri RamaLingeswaraSwamy Temple. Thousands of devotees gather for all-night prayers, abhishekam, and processions through the village streets.",
    "The harvest festival of Andhra Pradesh celebrated with great joy — decorated cattle, colourful rangoli, kite flying, and the warmth of family gatherings over traditional sweets.",
    "Telugu New Year celebrated with Panchangam readings, traditional Ugadi pachadi, and cultural programs that bring the whole village together in joy and festivity.",
    "The festival of lights transforms Madanur into a glowing tapestry of earthen lamps, fireworks, sweets, and prayers — a spectacle of joy from every household.",
    "Lord Ganesha is celebrated across Madanur with beautiful clay idols installed in homes and community pandals, followed by vibrant processions and immersion on the final day.",
    "Our Muslim brothers and sisters celebrate Ramadan and Eid with community prayers and feasts — a reflection of Madanur's spirit of harmony and togetherness.",
  ],
  te: [
    "శ్రీ రామలింగేశ్వర స్వామి దేవాలయంలో సంవత్సరంలో అత్యంత వైభవంగా జరిగే వేడుక. వేల మంది భక్తులు రాత్రంతా ప్రార్థనలు, అభిషేకం మరియు గ్రామ వీధుల గుండా ఊరేగింపులకు కూడతారు.",
    "ఆంధ్రప్రదేశ్ పంట పండుగను గొప్ప సంతోషంతో జరుపుకుంటారు — అలంకరించబడిన పశువులు, రంగురంగుల ముగ్గులు, గాలిపటాలు మరియు సంప్రదాయ స్వీట్‌లతో కుటుంబ సమావేశాలు.",
    "తెలుగు నూతన సంవత్సరాన్ని పంచాంగ శ్రవణం, సంప్రదాయ ఉగాది పచ్చడి మరియు సాంస్కృతిక కార్యక్రమాలతో జరుపుకుంటారు.",
    "వెలుతురు పండుగ మదనూరును మట్టి దీపాలు, బాంబులు, స్వీట్‌లు మరియు ప్రార్థనలతో వెలిగిపోయే తివాచీగా మారుస్తుంది.",
    "మదనూరు అంతటా ఇళ్ళలో మరియు సమాజ పందిళ్ళలో అందమైన మట్టి విగ్రహాలతో గణేషుడిని పూజిస్తారు, తర్వాత రంగురంగుల ఊరేగింపులు మరియు చివరి రోజు నిమజ్జనం.",
    "మా ముస్లిం సోదర సోదరీమణులు రంజాన్ మరియు ఈద్‌ను సమాజ ప్రార్థనలు మరియు విందులతో జరుపుకుంటారు — మదనూరు ఐకమత్యం యొక్క ప్రతిబింబం.",
  ],
};

export default function Festivals() {
  const { lang } = useLanguage();
  const T = t[lang];

  const FESTIVALS = [0, 1, 2, 3, 4, 5].map((i) => ({
    emoji:     FESTIVAL_EMOJIS[i],
    name:      T[`festival_${i}_name`],
    month:     T[`festival_${i}_month`],
    highlight: T[`festival_${i}_highlight`],
    desc:      FESTIVAL_DESCS[lang][i],
  }));

  return (
    <div className="min-h-screen bg-earth-50 text-gray-900">
      <Navbar />

      {/* Hero */}
      <section
        className="relative h-64 md:h-80 flex items-end overflow-hidden"
        style={{
          backgroundImage: `url('${festivalsHeroImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#3d1f08",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="relative max-w-6xl mx-auto px-6 pb-10 w-full">
          <p className="font-body text-amber-300 text-xs uppercase tracking-[0.3em] mb-2">{T.festivals_badge}</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white">{T.festivals_hero_title}</h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-body text-earth-500 text-xs uppercase tracking-[0.25em] mb-3">{T.festivals_label}</p>
          <p className="font-body text-gray-600 text-base leading-relaxed">{T.festivals_intro}</p>
        </div>
      </section>

      {/* Festival cards */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FESTIVALS.map(({ emoji, name, month, desc, highlight }) => (
              <div key={name} className="group bg-white border border-gray-200 hover:border-earth-300 rounded-2xl p-7 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="text-4xl mb-4">{emoji}</div>
                <h3 className="font-display text-xl font-bold text-gray-900 mb-1">{name}</h3>
                <p className="font-body text-earth-500 text-xs uppercase tracking-widest mb-4">{month}</p>
                <div className="w-10 h-0.5 bg-earth-500 mb-4" />
                <p className="font-body text-gray-600 text-sm leading-relaxed mb-4">{desc}</p>
                <div className="inline-flex items-center gap-2 bg-earth-50 border border-earth-200 rounded-full px-3 py-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-earth-500" />
                  <span className="font-body text-earth-600 text-xs">{highlight}</span>
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
