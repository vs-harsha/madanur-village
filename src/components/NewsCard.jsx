// src/components/NewsCard.jsx
import { useAuth } from "../context/AuthContext";

const CATEGORY_COLORS = {
  General:      "bg-earth-700/60 text-earth-300",
  Event:        "bg-amber-800/60 text-amber-300",
  Announcement: "bg-clay-400/20 text-clay-300",
  Agriculture:  "bg-green-900/60 text-green-300",
};

export default function NewsCard({ item, onDelete }) {
  const { isAdmin } = useAuth();

  const formatDate = (ts) => {
    if (!ts) return "";
    return new Date(ts).toLocaleDateString("en-IN", {
      day: "numeric", month: "long", year: "numeric",
    });
  };

  const colorClass = CATEGORY_COLORS[item.category] || CATEGORY_COLORS.General;

  return (
    <div className="group relative bg-earth-900/50 border border-earth-700/40 rounded-xl p-6 hover:border-earth-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-earth-900/40 animate-fade-up">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          {/* Category badge */}
          <span className={`inline-block text-xs font-body font-semibold px-3 py-1 rounded-full mb-3 ${colorClass}`}>
            {item.category}
          </span>

          {/* Title */}
          <h4 className="font-display text-earth-100 font-semibold text-lg mb-2 leading-snug">
            {item.title}
          </h4>

          {/* Body */}
          <p className="font-body text-earth-400 text-sm leading-relaxed mb-4">
            {item.body}
          </p>

          {/* Timestamp */}
          <p className="font-body text-earth-600 text-xs">
            📅 {formatDate(item.createdAt)}
          </p>
        </div>

        {/* Admin delete */}
        {isAdmin && (
          <button
            onClick={() => onDelete(item.id)}
            className="opacity-0 group-hover:opacity-100 text-red-500 hover:text-red-400 transition-all p-1 flex-shrink-0"
            title="Delete news"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}
