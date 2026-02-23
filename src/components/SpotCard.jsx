// src/components/SpotCard.jsx
export default function SpotCard({ emoji, title, description, delay = 0 }) {
  return (
    <div
      className="group relative overflow-hidden rounded-2xl bg-earth-900/60 backdrop-blur-sm border border-earth-700/40 hover:border-earth-500/60 transition-all duration-500 hover:shadow-2xl hover:shadow-earth-900/50 hover:-translate-y-2"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-earth-600/0 via-earth-500/0 to-amber-600/0 group-hover:from-earth-700/20 group-hover:via-earth-600/10 group-hover:to-amber-700/10 transition-all duration-500" />

      {/* Decorative corner */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-earth-600/10 rounded-bl-full group-hover:bg-earth-500/20 transition-colors duration-500" />

      <div className="relative p-8">
        {/* Icon */}
        <div className="text-5xl mb-5 transform group-hover:scale-110 transition-transform duration-300 inline-block">
          {emoji}
        </div>

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

        {/* Footer badge */}
        <div className="mt-6 inline-flex items-center gap-2 text-earth-500 text-xs font-body group-hover:text-earth-400 transition-colors">
          <span className="w-1.5 h-1.5 rounded-full bg-earth-500 group-hover:bg-earth-400" />
          Madanur Heritage
        </div>
      </div>
    </div>
  );
}
