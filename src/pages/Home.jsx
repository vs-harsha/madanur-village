// src/pages/Home.jsx
import { useAuth }   from "../context/AuthContext";
import { useNews }   from "../hooks/useNews";
import Navbar        from "../components/Navbar";
import Footer        from "../components/Footer";
import SpotCard      from "../components/SpotCard";
import NewsCard      from "../components/NewsCard";

const SPOTS = [
  {
    emoji: "🛕",
    title: "Sri RamaLingeswara Swamy Temple",
    description:
      "An ancient and revered Shiva temple at the heart of Madanur. The sacred abode of Lord RamaLingeswara resonates with centuries of devotion, intricate stone carvings, and the fragrance of jasmine and camphor during festival days.",
  },
  {
    emoji: "🌾",
    title: "Green Agricultural Fields",
    description:
      "Stretching endlessly under the Andhra sky, Madanur's fertile farmlands yield rich harvests of paddy, groundnut, and chilli. The shimmer of green through every season is the lifeblood and legacy of our farming community.",
  },
  {
    emoji: "🌅",
    title: "Sunrise Landscape",
    description:
      "As dawn breaks over the Eastern Ghats, golden light floods Madanur's fields and rooftops. The sunrise here — painted in amber, saffron, and rose — is a daily miracle that reminds us why we call this place home.",
  },
];

export default function Home() {
  const { user, isAdmin }       = useAuth();
  const { news, loading: newsLoading, deleteNews } = useNews();

  return (
    <div className="min-h-screen bg-earth-950 text-earth-100">
      <Navbar />

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
        {/* Animated background */}
        <div className="absolute inset-0">
          {/* Gradient base */}
          <div className="absolute inset-0 bg-gradient-to-br from-earth-950 via-earth-900 to-earth-950" />

          {/* Glowing orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-earth-600/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-amber-800/15 rounded-full blur-3xl animate-float" style={{ animationDelay: "2.5s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-earth-700/10 rounded-full blur-3xl" />

          {/* Dot pattern */}
          <div className="absolute inset-0 opacity-[0.04]" style={{
            backgroundImage: "radial-gradient(circle, #82b84e 1px, transparent 1px)",
            backgroundSize: "56px 56px"
          }} />

          {/* Top decorative line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-earth-600/50 to-transparent" />
        </div>

        <div className="relative text-center max-w-4xl mx-auto">
          {/* Pre-title badge */}
          <div className="inline-flex items-center gap-2 bg-earth-800/60 border border-earth-700/50 rounded-full px-5 py-2 mb-8 animate-fade-in backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-earth-400 animate-pulse" />
            <span className="font-body text-earth-400 text-xs tracking-[0.2em] uppercase">Prakasam District • Andhra Pradesh</span>
          </div>

          {/* Main title */}
          <h1 className="font-display text-6xl sm:text-7xl md:text-8xl font-bold text-earth-50 mb-2 animate-fade-up leading-tight">
            Welcome to
          </h1>
          <h1 className="font-display text-6xl sm:text-7xl md:text-8xl font-bold mb-6 animate-fade-up leading-tight"
              style={{ animationDelay: "0.1s" }}>
            <span className="bg-gradient-to-r from-earth-400 via-earth-300 to-amber-400 bg-clip-text text-transparent">
              Madanur
            </span>
          </h1>

          {/* Telugu subtitle */}
          <p className="font-telugu text-earth-500 text-lg mb-2 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            మదనూరు గ్రామం
          </p>

          {/* English subtitle */}
          <p className="font-display italic text-earth-400 text-xl sm:text-2xl mb-10 animate-fade-up" style={{ animationDelay: "0.25s" }}>
            Our Village <span className="text-earth-600">•</span> Our Pride
          </p>

          {/* Welcome message */}
          {user && (
            <div className="inline-flex items-center gap-3 bg-earth-800/40 border border-earth-700/40 backdrop-blur-sm rounded-2xl px-6 py-3 mb-10 animate-fade-up" style={{ animationDelay: "0.35s" }}>
              <span className="text-lg">👋</span>
              <span className="font-body text-earth-300 text-sm">
                Welcome back, <strong className="text-earth-100">{user.displayName || "villager"}</strong>!
              </span>
            </div>
          )}

          {/* Scroll cue */}
          <div className="animate-bounce mt-4" style={{ animationDelay: "1s" }}>
            <svg className="w-6 h-6 text-earth-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </section>

      {/* ─── BEAUTIFUL SPOTS ─── */}
      <section className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-14">
            <p className="font-body text-earth-500 text-xs uppercase tracking-[0.25em] mb-3">Explore</p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-earth-100 mb-4">
              Beautiful Spots
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-earth-600 to-amber-500 mx-auto" />
            <p className="font-body text-earth-500 mt-4 max-w-md mx-auto text-sm leading-relaxed">
              From sacred temples to golden fields — discover what makes Madanur unforgettable.
            </p>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SPOTS.map((spot, i) => (
              <SpotCard key={spot.title} {...spot} delay={i * 150} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── STATS STRIP ─── */}
      <section className="py-14 px-6 border-y border-earth-800/40 bg-earth-900/20">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "~3,000",   label: "Population",       icon: "👥" },
              { value: "1",        label: "Ancient Temple",   icon: "🛕" },
              { value: "∞",        label: "Acres of Fields",  icon: "🌾" },
              { value: "100%",     label: "Village Pride",    icon: "💚" },
            ].map(({ value, label, icon }) => (
              <div key={label} className="group">
                <div className="text-3xl mb-2">{icon}</div>
                <p className="font-display text-3xl font-bold text-earth-200 group-hover:text-earth-100 transition-colors">{value}</p>
                <p className="font-body text-earth-500 text-xs uppercase tracking-widest mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── NEWS SECTION ─── */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-14">
            <p className="font-body text-earth-500 text-xs uppercase tracking-[0.25em] mb-3">Live Updates</p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-earth-100 mb-4">
              Village News
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-earth-600 to-amber-500 mx-auto" />
            <p className="font-body text-earth-500 mt-4 text-sm">
              Stay updated with the latest from Madanur — in real time.
            </p>
          </div>

          {newsLoading ? (
            <div className="flex flex-col items-center py-16 text-earth-600">
              <svg className="animate-spin h-8 w-8 mb-4" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              <p className="font-body text-sm">Loading news...</p>
            </div>
          ) : news.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-5xl mb-4">📰</div>
              <p className="font-display text-earth-500 text-xl italic">No news yet</p>
              {isAdmin && (
                <p className="font-body text-earth-600 text-sm mt-2">
                  Head to the Admin panel to post your first update!
                </p>
              )}
            </div>
          ) : (
            <div className="space-y-4">
              {news.map((item) => (
                <NewsCard key={item.id} item={item} onDelete={deleteNews} />
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
