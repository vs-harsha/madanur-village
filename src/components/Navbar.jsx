// src/components/Navbar.jsx
import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useLanguage } from "../context/LanguageContext";
import { t } from "../assets/translations";

export default function Navbar() {
  const { user, logout, isAdmin } = useAuth();
  const navigate  = useNavigate();
  const location  = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, toggle } = useLanguage();
  const T = t[lang];

  const handleLogout = async () => { await logout(); navigate("/login"); };

  const navLink = (to, label) => (
    <Link
      to={to}
      onClick={() => setMenuOpen(false)}
      className={`font-body text-sm font-medium transition-colors ${
        location.pathname === to
          ? "text-earth-500 font-semibold"
          : "text-gray-700 hover:text-earth-500"
      }`}
    >
      {label}
    </Link>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <span className="text-2xl">🌿</span>
            <span className="font-display font-bold text-gray-900 text-xl tracking-wide group-hover:text-earth-500 transition-colors">
              Madanur
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-7">
            {navLink("/",           T.nav_home)}
            {navLink("/temple",     T.nav_temple)}
            {navLink("/spots",      T.nav_spots)}
            {navLink("/history",    T.nav_history)}
            {navLink("/festivals",  T.nav_festivals)}
            {navLink("/businesses", T.nav_businesses)}
          </div>

          {/* Auth + Language area */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language toggle */}
            <button
              onClick={toggle}
              title={lang === "en" ? "Switch to Telugu" : "Switch to English"}
              className="text-xs font-semibold border border-gray-300 hover:border-earth-500 hover:text-earth-600 text-gray-600 px-2.5 py-1 rounded-md transition-all"
            >
              {lang === "en" ? "తె" : "EN"}
            </button>
            {user ? (
              <>
                {isAdmin && (
                  <Link to="/admin" className="text-earth-500 font-body text-sm hover:text-earth-600 transition-colors">
                    {T.nav_admin_link}
                  </Link>
                )}
                <span className="text-gray-600 text-sm font-body">{user.displayName || user.email}</span>
                <button
                  onClick={handleLogout}
                  className="text-sm font-body text-gray-700 border border-gray-300 hover:border-earth-500 hover:text-earth-500 px-4 py-1.5 rounded-md transition-all"
                >
                  {T.nav_logout}
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="bg-earth-500 hover:bg-earth-600 text-white font-body font-semibold text-sm px-5 py-2 rounded-md transition-all shadow-sm"
              >
                {T.nav_admin}
              </Link>
            )}
          </div>

          {/* Mobile hamburger */}
          <button className="md:hidden text-gray-700 p-2" onClick={() => setMenuOpen(!menuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden pb-4 flex flex-col gap-4 border-t border-gray-100 pt-4">
            {navLink("/",           T.nav_home)}
            {navLink("/temple",     T.nav_temple)}
            {navLink("/spots",      T.nav_spots)}
            {navLink("/history",    T.nav_history)}
            {navLink("/festivals",  T.nav_festivals)}
            {navLink("/businesses", T.nav_businesses)}
            {/* Language toggle mobile */}
            <button
              onClick={toggle}
              className="text-left text-xs font-semibold border border-gray-300 text-gray-600 px-3 py-1.5 rounded-md w-fit"
            >
              {lang === "en" ? "తెలుగులో చదవండి" : "Read in English"}
            </button>
            {user ? (
              <>
                {isAdmin && navLink("/admin", "⚡ Admin Panel")}
                <button onClick={handleLogout} className="text-left text-gray-600 font-body text-sm">Logout</button>
              </>
            ) : (
              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="bg-earth-500 text-white font-body text-sm font-semibold px-4 py-2 rounded-md text-center"
              >
                {T.nav_admin}
              </Link>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}

