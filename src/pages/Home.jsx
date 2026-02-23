// src/pages/Home.jsx
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useNews } from "../hooks/useNews";
import Navbar    from "../components/Navbar";
import Footer    from "../components/Footer";
import NewsCard  from "../components/NewsCard";
import { heroImage, galleryImages } from "../assets/images";
import { useLanguage } from "../context/LanguageContext";
import { t } from "../assets/translations";

export default function Home() {
  const { isAdmin } = useAuth();
  const { news, loading: newsLoading, deleteNews } = useNews();
  const { lang } = useLanguage();
  const T = t[lang];
  const galleryLabels = [T.gallery_1,T.gallery_2,T.gallery_3,T.gallery_4,T.gallery_5,T.gallery_6];

  return (
    <div className="min-h-screen bg-earth-50 text-gray-900">
      <Navbar />

      {/* HERO */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url('${heroImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#4a2800",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative text-center text-white px-6 max-w-4xl mx-auto">
          <p className="font-body uppercase tracking-[0.3em] text-amber-300 text-sm mb-4 animate-fade-in">
            {T.hero_welcome}
          </p>
          <h1 className="font-display text-6xl sm:text-7xl md:text-8xl font-bold mb-6 animate-fade-up leading-tight">
            {T.hero_title}
          </h1>
          <p className="font-telugu text-white/70 text-lg mb-3 animate-fade-up" style={{ animationDelay: "0.15s" }}>
            {T.hero_telugu}
          </p>
          <p className="font-body text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-up leading-relaxed" style={{ animationDelay: "0.2s" }}>
            {T.hero_sub}
          </p>
          <Link
            to="/temple"
            className="inline-block bg-amber-600 hover:bg-amber-500 text-white font-body font-semibold px-9 py-3.5 rounded-full transition-all duration-300 hover:shadow-xl animate-fade-up text-sm tracking-wide"
            style={{ animationDelay: "0.3s" }}
          >
            {T.hero_cta}
          </Link>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-body text-earth-500 text-xs uppercase tracking-[0.25em] mb-3">{T.about_label}</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-6">{T.about_title}</h2>
          <p className="font-body text-gray-600 text-base leading-relaxed max-w-2xl mx-auto">
            {T.about_body}
          </p>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="py-20 px-6 bg-earth-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="font-body text-earth-500 text-xs uppercase tracking-[0.25em] mb-3">{T.highlights_label}</p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-gray-900 mb-4">{T.highlights_title}</h2>
            <div className="w-16 h-0.5 bg-earth-500 mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: "", title: T.highlight_temple_title,  desc: T.highlight_temple_desc,  link: "/temple",    cta: T.highlight_temple_cta },
              { icon: "", title: T.highlight_festival_title, desc: T.highlight_festival_desc, link: "/festivals",  cta: T.highlight_festival_cta },
              { icon: "", title: T.highlight_agri_title,    desc: T.highlight_agri_desc,    link: "/businesses", cta: T.highlight_agri_cta },
            ].map(({ icon, title, desc, link, cta }) => (
              <div key={title} className="group bg-white border border-gray-200 hover:border-earth-300 rounded-2xl p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="text-5xl mb-5">{icon}</div>
                <h3 className="font-display text-xl font-semibold text-gray-900 mb-3">{title}</h3>
                <div className="w-10 h-0.5 bg-earth-500 mb-4" />
                <p className="font-body text-gray-600 text-sm leading-relaxed mb-5">{desc}</p>
                <Link to={link} className="font-body text-earth-500 text-sm font-semibold hover:text-earth-600 transition-colors">{cta}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-14 px-6 border-y border-earth-200 bg-earth-100">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "~3,000", label: T.stats_population, icon: "" },
              { value: "1000+",  label: T.stats_history,    icon: "" },
              { value: "",      label: T.stats_acres,      icon: "" },
              { value: "100%",   label: T.stats_pride,      icon: "" },
            ].map(({ value, label, icon }) => (
              <div key={label} className="group">
                <div className="text-3xl mb-2">{icon}</div>
                <p className="font-display text-3xl font-bold text-gray-900 group-hover:text-earth-500 transition-colors">{value}</p>
                <p className="font-body text-earth-500 text-xs uppercase tracking-widest mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="font-body text-earth-500 text-xs uppercase tracking-[0.25em] mb-3">{T.gallery_label}</p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-gray-900 mb-4">{T.gallery_title}</h2>
            <div className="w-16 h-0.5 bg-earth-500 mx-auto" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map(({ src }, i) => {
              const label = galleryLabels[i] || "";
              return (
              <div key={i} className="group relative overflow-hidden rounded-2xl aspect-square bg-earth-100 border border-earth-200 hover:border-earth-300 transition-all duration-300 hover:shadow-lg">
                <img src={src} alt={label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => { e.target.style.display = "none"; e.target.nextSibling.style.display = "flex"; }} />
                <div className="absolute inset-0 hidden flex-col items-center justify-center gap-2 bg-earth-100/90">
                  <span className="text-4xl opacity-40"></span>
                  <p className="font-body text-earth-400 text-xs text-center px-4">{label}</p>
                  {isAdmin && <p className="font-body text-earth-300 text-xs">Add public/images/gallery-{i+1}.jpg</p>}
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="font-body text-white text-sm font-semibold">{label}</p>
                </div>
              </div>
            );
            })}
          </div>
          {isAdmin && (
            <p className="text-center font-body text-earth-400 text-xs mt-8">
               Add photos: put gallery-1.jpg to gallery-6.jpg in public/images/ then git push
            </p>
          )}
        </div>
      </section>

      {/* NEWS */}
      <section className="py-20 px-6 bg-earth-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="font-body text-earth-500 text-xs uppercase tracking-[0.25em] mb-3">{T.news_label}</p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-gray-900 mb-4">{T.news_title}</h2>
            <div className="w-16 h-0.5 bg-earth-500 mx-auto" />
            <p className="font-body text-gray-600 mt-4 text-sm">{T.news_sub}</p>
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
              <p className="font-display text-gray-400 text-xl italic">{T.news_empty}</p>
              {isAdmin && <p className="font-body text-gray-500 text-sm mt-2">{T.news_admin_hint}</p>}
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
