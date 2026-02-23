// src/pages/History.jsx
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { historyHeroImage } from "../assets/images";
import { useLanguage } from "../context/LanguageContext";
import { t } from "../assets/translations";

const TIMELINE_BODIES = {
  en: [
    "The land of Madanur has been inhabited since ancient times. Local lore traces it to the Ramayana era — Lord Rama is believed to have passed through this region on his journey south. The construction of the Sri RamaLingeswaraSwamy Temple, with a unique sand Lingam made by Lord Rama himself, marks the earliest recorded chapter of the village's sacred history.",
    "During the rule of the Kakatiya and later the Vijayanagara Empire, Madanur was part of a prosperous agricultural belt in the Prakasam region. The temple was expanded during this period, becoming an important pilgrimage centre for devotees from surrounding villages.",
    "Madanur fell under the Nizam's dominion and later came under the Madras Presidency during British rule. The village economy was largely agrarian — paddy, groundnut, and pulses. Village records mention community wells, a thriving weekly market, and the temple as the social and spiritual centre of life.",
    "Following Indian independence, Madanur became part of Prakasam District in Andhra Pradesh. Land reforms transformed the agricultural landscape. A primary school was established, and electrification brought new opportunities to the village.",
    "Today Madanur is a thriving rural community with improved road connectivity, primary healthcare, and growing digital access. Sons and daughters of the village have spread across India and the world, yet Maha Shivaratri and Sankranti still bring thousands home.",
  ],
  te: [
    "మదనూరు భూమి పురాతన కాలం నుండి నివాసంగా ఉంది. రామాయణ కాలంతో ముడిపడిన స్థానిక పురాణాల ప్రకారం, శ్రీ రాముడు తన చేతులతో ఇసుకతో లింగం తయారు చేసి శివుడికి పూజ చేసిన చోటుగా శ్రీ రామలింగేశ్వర స్వామి దేవాలయం నిర్మించబడింది.",
    "కాకతీయ మరియు విజయనగర సామ్రాజ్యాల పాలనలో మదనూరు సమృద్ధమైన వ్యవసాయ పట్టాలో భాగంగా ఉండేది. ఈ కాలంలో దేవాలయం విస్తరించి, చుట్టుపక్కల గ్రామాల భక్తులకు ముఖ్యమైన తీర్థయాత్ర కేంద్రంగా మారింది.",
    "మదనూరు నిజాం అధికార పరిధిలోకి, ఆ తర్వాత బ్రిటీష్ పాలనలో మద్రాసు ప్రెసిడెన్సీలోకి వచ్చింది. గ్రామ ఆర్థిక వ్యవస్థ ముఖ్యంగా వ్యవసాయాధారితం — వరి, వేరుశనగ మరియు పప్పులు.",
    "భారత స్వాతంత్ర్యం తర్వాత, మదనూరు ఆంధ్రప్రదేశ్‌లోని ప్రకాశం జిల్లాలో భాగం అయింది. ప్రాథమిక పాఠశాల స్థాపించబడింది, విద్యుత్ సౌకర్యాలు కొత్త అవకాశాలను తెచ్చాయి.",
    "నేడు మదనూరు మెరుగైన రోడ్డు సంపర్కం, ఆరోగ్య సేవలు మరియు డిజిటల్ ప్రవేశంతో అభివృద్ధి చెందుతున్న గ్రామీణ సమాజం. మహా శివరాత్రి మరియు సంక్రాంతి వేలాది మందిని ఇంటికి తీసుకొస్తాయి.",
  ],
};

const ICONS = ["🏛️", "⚔️", "📜", "🇮🇳", "🌐"];

export default function History() {
  const { lang } = useLanguage();
  const T = t[lang];

  const TIMELINE = [0, 1, 2, 3, 4].map((i) => ({
    era:     T[`history_${i}_era`],
    period:  T[`history_${i}_period`],
    icon:    ICONS[i],
    heading: T[`history_${i}_heading`],
    body:    TIMELINE_BODIES[lang][i],
  }));

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
          <p className="font-body text-amber-300 text-xs uppercase tracking-[0.3em] mb-2">{T.history_badge}</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white">{T.history_hero_title}</h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-14 px-6 bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-body text-earth-500 text-xs uppercase tracking-[0.25em] mb-3">{T.history_label}</p>
          <h2 className="font-display text-3xl font-bold text-gray-900 mb-4">{T.history_title}</h2>
          <div className="w-12 h-0.5 bg-earth-500 mx-auto mb-5" />
          <p className="font-body text-gray-600 text-base leading-relaxed">{T.history_body}</p>
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
            {T.history_quote}
          </blockquote>
          <p className="font-telugu text-earth-500 text-base">{T.history_telugu}</p>
          <p className="font-body text-gray-400 text-sm mt-1">{T.history_translation}</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
