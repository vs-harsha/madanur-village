// src/components/Footer.jsx
export default function Footer() {
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
