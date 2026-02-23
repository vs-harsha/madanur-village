// src/components/Footer.jsx
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { t } from "../assets/translations";

export default function Footer() {
  const { lang } = useLanguage();
  const T = t[lang];

  const links = [
    ["/", T.nav_home], ["/temple", T.nav_temple], ["/spots", T.nav_spots],
    ["/history", T.nav_history], ["/festivals", T.nav_festivals], ["/businesses", T.nav_businesses],
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-0">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🌿</span>
              <span className="font-display font-bold text-white text-xl">Madanur</span>
            </div>
            <p className="font-telugu text-gray-400 text-sm mb-1">మదనూరు గ్రామం</p>
            <p className="font-body text-gray-500 text-xs">Prakasam District • Andhra Pradesh</p>
          </div>

          {/* Quick links */}
          <div>
            <p className="font-body font-semibold text-white text-xs uppercase tracking-widest mb-3">{T.footer_explore}</p>
            <div className="flex flex-col gap-2">
              {links.map(([to, label]) => (
                <Link key={to} to={to} className="font-body text-gray-400 text-sm hover:text-earth-500 transition-colors">
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="font-body font-semibold text-white text-xs uppercase tracking-widest mb-3">{T.footer_info}</p>
            <p className="font-body text-gray-400 text-sm">{T.footer_address}</p>
            <p className="font-body text-gray-400 text-sm">{T.footer_pin}</p>
          </div>
        </div>

        <div className="h-px bg-gray-700 mb-4" />
        <p className="font-body text-gray-500 text-xs text-center">{T.footer_copy}</p>
      </div>
    </footer>
  );
}

