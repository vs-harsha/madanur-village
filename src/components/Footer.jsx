// src/components/Footer.jsx
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-earth-100 border-t border-earth-800/20 py-12 mt-0">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🌿</span>
              <span className="font-display font-bold text-earth-50 text-xl">Madanur</span>
            </div>
            <p className="font-telugu text-earth-300 text-sm mb-1">మదనూరు గ్రామం</p>
            <p className="font-body text-earth-300 text-xs">Prakasam District • Andhra Pradesh</p>
          </div>

          {/* Quick links */}
          <div>
            <p className="font-body font-semibold text-earth-200 text-xs uppercase tracking-widest mb-3">Explore</p>
            <div className="flex flex-col gap-2">
              {[["/","Home"],["/temple","Temple"],["/festivals","Festivals"],["/businesses","Businesses"]].map(([to, label]) => (
                <Link key={to} to={to} className="font-body text-earth-300 text-sm hover:text-earth-400 transition-colors">{label}</Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="font-body font-semibold text-earth-200 text-xs uppercase tracking-widest mb-3">Village Info</p>
            <p className="font-body text-earth-300 text-sm">Madanur, Kandukur Mandal</p>
            <p className="font-body text-earth-300 text-sm">Prakasam District, AP — 523 105</p>
          </div>
        </div>

        <div className="h-px bg-earth-800/30 mb-4" />
        <p className="font-body text-earth-300 text-xs text-center">
          © {new Date().getFullYear()} Madanur Village. Made with 🧡 for our community.
        </p>
      </div>
    </footer>
  );
}
  return (
    <footer className="bg-earth-950 border-t border-earth-800/40 py-10 mt-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="text-3xl mb-3">🌿</div>
        <p className="font-display text-earth-300 text-lg font-semibold mb-1">Madanur Village</p>
        <p className="font-telugu text-earth-500 text-sm mb-2">మదనూరు గ్రామం</p>
        <p className="font-body text-earth-600 text-xs">Prakasam District • Andhra Pradesh • India</p>
        <div className="mt-6 h-px bg-gradient-to-r from-transparent via-earth-700 to-transparent" />
        <p className="font-body text-earth-700 text-xs mt-4">
          © {new Date().getFullYear()} Madanur Village. Made with 💚 for our community.
        </p>
      </div>
    </footer>
  );
}
