// src/components/Navbar.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout, isAdmin } = useAuth();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [logoutLoading, setLogoutLoading] = useState(false);

  const handleLogout = async () => {
    setLogoutLoading(true);
    await logout();
    navigate("/login");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-earth-950/80 backdrop-blur-md border-b border-earth-800/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <span className="text-2xl">🌿</span>
            <div>
              <p className="font-display font-bold text-earth-100 text-lg leading-tight tracking-wide group-hover:text-earth-300 transition-colors">
                Madanur
              </p>
              <p className="text-earth-500 text-xs font-body tracking-widest uppercase">
                Prakasam District
              </p>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-earth-300 hover:text-earth-100 font-body text-sm tracking-wide transition-colors">
              Home
            </Link>
            {isAdmin && (
              <Link to="/admin" className="text-amber-400 hover:text-amber-300 font-body text-sm tracking-wide transition-colors">
                ⚡ Admin
              </Link>
            )}
            {user && (
              <div className="flex items-center gap-4">
                <span className="text-earth-500 text-sm font-body truncate max-w-[160px]">
                  {user.displayName || user.email}
                </span>
                <button
                  onClick={handleLogout}
                  disabled={logoutLoading}
                  className="bg-earth-700 hover:bg-earth-600 text-earth-100 px-4 py-1.5 rounded-full text-sm font-body transition-all duration-200 hover:shadow-lg disabled:opacity-60"
                >
                  {logoutLoading ? "..." : "Logout"}
                </button>
              </div>
            )}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-earth-300 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
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
          <div className="md:hidden pb-4 flex flex-col gap-3 animate-fade-in border-t border-earth-800/40 pt-4">
            <Link to="/" onClick={() => setMenuOpen(false)} className="text-earth-300 font-body text-sm">Home</Link>
            {isAdmin && (
              <Link to="/admin" onClick={() => setMenuOpen(false)} className="text-amber-400 font-body text-sm">⚡ Admin Panel</Link>
            )}
            {user && (
              <>
                <span className="text-earth-500 text-sm font-body">{user.displayName || user.email}</span>
                <button onClick={handleLogout} className="text-left text-red-400 font-body text-sm">Logout</button>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
