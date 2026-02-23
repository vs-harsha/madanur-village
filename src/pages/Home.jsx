// src/pages/Home.jsx
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useNews } from "../hooks/useNews";
import Navbar    from "../components/Navbar";
import Footer    from "../components/Footer";
import NewsCard  from "../components/NewsCard";

export default function Home() {
  const { isAdmin } = useAuth();
  const { news, loading: newsLoading, deleteNews } = useNews();

  return (
    <div className="min-h-screen bg-earth-950 text-earth-100">
      <Navbar />

      {/* HERO */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: "url('/images/hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#4a2800",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative text-center text-white px-6 max-w-4xl mx-auto">
          <p className="font-body uppercase tracking-[0.3em] text-amber-300 text-sm mb-4 animate-fade-in">
            Welcome to
          </p>
          <h1 className="font-display text-6xl sm:text-7xl md:text-8xl font-bold mb-6 animate-fade-up leading-tight">
            Madanur Village
          </h1>
          <p className="font-telugu text-white/70 text-lg mb-3 animate-fade-up" style={{ animationDelay: "0.15s" }}>
            మదనర గరమ
          </p>
          <p className="font-body text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-up leading-relaxed" style={{ animationDelay: "0.2s" }}>
            A sacred land of ancient temples, vibrant festivals, and warm-hearted people nestled in the heart of tradition.
          </p>
          <Link
            to="/temple"
            className="inline-block bg-amber-600 hover:bg-amber-500 text-white font-body font-semibold px-9 py-3.5 rounded-full transition-all duration-300 hover:shadow-xl animate-fade-up text-sm tracking-wide"
            style={{ animationDelay: "0.3s" }}
          >
            Explore Our Heritage
          </Link>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-16 px-6 bg-earth-900">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-body text-earth-400 text-xs uppercase tracking-[0.25em] mb-3">Our Home</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-earth-50 mb-6">Heart of Prakasam District</h2>
          <p className="font-body text-earth-300 text-base leading-relaxed max-w-2xl mx-auto">
            Nestled in the fertile plains of Andhra Pradesh, Madanur is a village steeped in devotion, culture, and community.
            Home to the ancient Sri RamaLingeswaraSwamy Temple and surrounded by lush agricultural fields,
            our village carries centuries of heritage in every corner.
          </p>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="py-20 px-6 bg-earth-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="font-body text-earth-400 text-xs uppercase tracking-[0.25em] mb-3">Discover</p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-earth-50 mb-4">What Makes Us Special</h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-earth-400 to-amber-500 mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: "", title: "Ancient Temple",  desc: "Sri RamaLingeswaraSwamy Temple — a 1000-year-old Shiva temple where Lord Rama is said to have offered prayers.", link: "/temple",     cta: "Visit Temple " },
              { icon: "", title: "Vibrant Festivals", desc: "From Shivaratri to harvest celebrations, our festivals bring the entire village together in joy and devotion.",   link: "/festivals",   cta: "See Festivals " },
              { icon: "", title: "Agriculture",      desc: "Paddy, groundnut, and chilli fields stretch across Madanur's fertile land, sustaining families for generations.",  link: "/businesses",  cta: "Local Businesses " },
            ].map(({ icon, title, desc, link, cta }) => (
              <div key={title} className="group bg-earth-900/80 border border-earth-800/50 hover:border-earth-600/60 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="text-5xl mb-5">{icon}</div>
                <h3 className="font-display text-xl font-semibold text-earth-50 mb-3">{title}</h3>
                <div className="w-10 h-0.5 bg-gradient-to-r from-earth-400 to-amber-500 mb-4" />
                <p className="font-body text-earth-300 text-sm leading-relaxed mb-5">{desc}</p>
                <Link to={link} className="font-body text-earth-400 text-sm font-semibold hover:text-earth-300 transition-colors">{cta}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-14 px-6 border-y border-earth-800/40 bg-earth-900/40">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "~3,000", label: "Population",      icon: "" },
              { value: "1000+",  label: "Years of History", icon: "" },
              { value: "",      label: "Acres of Fields",  icon: "" },
              { value: "100%",   label: "Village Pride",    icon: "" },
            ].map(({ value, label, icon }) => (
              <div key={label} className="group">
                <div className="text-3xl mb-2">{icon}</div>
                <p className="font-display text-3xl font-bold text-earth-50 group-hover:text-earth-400 transition-colors">{value}</p>
                <p className="font-body text-earth-400 text-xs uppercase tracking-widest mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-20 px-6 bg-earth-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="font-body text-earth-400 text-xs uppercase tracking-[0.25em] mb-3">Memories</p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-earth-50 mb-4">Village Gallery</h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-earth-400 to-amber-500 mx-auto" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { src: "/images/gallery-1.jpg", label: "Temple Festival" },
              { src: "/images/gallery-2.jpg", label: "Harvest Season" },
              { src: "/images/gallery-3.jpg", label: "Village Streets" },
              { src: "/images/gallery-4.jpg", label: "Sunrise View" },
              { src: "/images/gallery-5.jpg", label: "Community Gathering" },
              { src: "/images/gallery-6.jpg", label: "Fields of Madanur" },
            ].map(({ src, label }, i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl aspect-square bg-earth-900 border border-earth-800/40 hover:border-earth-600/50 transition-all duration-300 hover:shadow-xl">
                <img src={src} alt={label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => { e.target.style.display = "none"; e.target.nextSibling.style.display = "flex"; }} />
                <div className="absolute inset-0 hidden flex-col items-center justify-center gap-2 bg-earth-900/80">
                  <span className="text-4xl opacity-30"></span>
                  <p className="font-body text-earth-400 text-xs text-center px-4">{label}</p>
                  {isAdmin && <p className="font-body text-earth-600 text-xs">Add public/images/gallery-{i+1}.jpg</p>}
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="font-body text-white text-sm font-semibold">{label}</p>
                </div>
              </div>
            ))}
          </div>
          {isAdmin && (
            <p className="text-center font-body text-earth-600 text-xs mt-8">
               Add photos: put gallery-1.jpg to gallery-6.jpg in public/images/ then git push
            </p>
          )}
        </div>
      </section>

      {/* NEWS */}
      <section className="py-20 px-6 bg-earth-900/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="font-body text-earth-400 text-xs uppercase tracking-[0.25em] mb-3">Live Updates</p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-earth-50 mb-4">Village News</h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-earth-400 to-amber-500 mx-auto" />
            <p className="font-body text-earth-400 mt-4 text-sm">Stay updated with the latest from Madanur — in real time.</p>
          </div>
          {newsLoading ? (
            <div className="flex flex-col items-center py-16 text-earth-400">
              <svg className="animate-spin h-8 w-8 mb-4" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              <p className="font-body text-sm">Loading news...</p>
            </div>
          ) : news.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-5xl mb-4"></div>
              <p className="font-display text-earth-400 text-xl italic">No news yet</p>
              {isAdmin && <p className="font-body text-earth-500 text-sm mt-2">Post from the Admin panel.</p>}
            </div>
          ) : (
            <div className="space-y-4">
              {news.map((item) => <NewsCard key={item.id} item={item} onDelete={deleteNews} />)}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
