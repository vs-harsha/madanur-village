// src/components/SpotCard.jsx
import { useAuth } from "../context/AuthContext";

export default function SpotCard({ id, emoji, title, description, image, delay = 0, onDelete }) {
  const { isAdmin } = useAuth();

  return (
    <div
      className="group relative overflow-hidden rounded-2xl bg-earth-900/60 backdrop-blur-sm border border-earth-700/40 hover:border-earth-500/60 transition-all duration-500 hover:shadow-2xl hover:shadow-earth-900/50 hover:-translate-y-2"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Image */}
      {image ? (
        <div className="relative h-44 overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-earth-950/70" />
        </div>
      ) : (
        <div className="relative h-44 flex items-center justify-center bg-gradient-to-br from-earth-800/60 to-earth-900/80">
          <span className="text-6xl opacity-60 group-hover:scale-110 transition-transform duration-300">{emoji}</span>
        </div>
      )}

      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-earth-600/0 to-amber-600/0 group-hover:from-earth-700/10 group-hover:to-amber-700/10 transition-all duration-500 pointer-events-none" />

      <div className="relative p-6">
        {/* Icon (only if image present) */}
        {image && (
          <div className="text-3xl mb-3 inline-block">{emoji}</div>
        )}

        {/* Title */}
        <h3 className="font-display text-xl font-semibold text-earth-100 mb-3 group-hover:text-earth-50 transition-colors">
          {title}
        </h3>

        {/* Divider */}
        <div className="w-12 h-0.5 bg-gradient-to-r from-earth-500 to-amber-500 mb-4 group-hover:w-20 transition-all duration-500" />

        {/* Description */}
        <p className="font-body text-earth-400 text-sm leading-relaxed group-hover:text-earth-300 transition-colors">
          {description}
        </p>

        {/* Footer */}
        <div className="mt-5 flex items-center justify-between">
          <div className="inline-flex items-center gap-2 text-earth-500 text-xs font-body group-hover:text-earth-400 transition-colors">
            <span className="w-1.5 h-1.5 rounded-full bg-earth-500 group-hover:bg-earth-400" />
            Madanur Heritage
          </div>
          {isAdmin && onDelete && (
            <button
              onClick={() => onDelete(id)}
              className="opacity-0 group-hover:opacity-100 text-red-400 hover:text-red-300 transition-all p-1"
              title="Delete spot"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
