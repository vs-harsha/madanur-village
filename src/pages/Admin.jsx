// src/pages/Admin.jsx
import { useState }  from "react";
import { Navigate }  from "react-router-dom";
import { useAuth }   from "../context/AuthContext";
import { useNews }   from "../hooks/useNews";
import { useFeedback } from "../hooks/useFeedback";
import Navbar        from "../components/Navbar";
import Footer        from "../components/Footer";
import NewsCard      from "../components/NewsCard";

const CATEGORIES = ["General", "Event", "Announcement", "Agriculture"];

export default function Admin() {
  const { isAdmin }               = useAuth();
  const { news, addNews, deleteNews, loading } = useNews();
  const { feedbacks, loading: fbLoading, deleteFeedback } = useFeedback();

  const [title,    setTitle]    = useState("");
  const [body,     setBody]     = useState("");
  const [category, setCategory] = useState("General");
  const [submitting, setSubmitting] = useState(false);
  const [success,  setSuccess]  = useState(false);
  const [error,    setError]    = useState("");

  // Only admin can access
  if (!isAdmin) return <Navigate to="/" replace />;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!title.trim() || !body.trim()) return setError("Please fill in all fields.");
    setSubmitting(true);
    try {
      await addNews(title.trim(), body.trim(), category);
      setTitle("");
      setBody("");
      setCategory("General");
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } catch {
      setError("Failed to post news. Please try again.");
    }
    setSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-earth-950 text-earth-100">
      <Navbar />

      <div className="max-w-5xl mx-auto px-6 pt-28 pb-20">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">⚡</span>
            <h1 className="font-display text-4xl font-bold text-earth-50">Admin Panel</h1>
          </div>
          <p className="font-body text-earth-500 text-sm ml-11">Manage village news and updates for Madanur</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* ─── POST FORM ─── */}
          <div>
            <div className="bg-earth-900/50 border border-earth-700/40 rounded-2xl p-8">
              <h2 className="font-display text-2xl font-semibold text-earth-100 mb-6 flex items-center gap-2">
                <span>📝</span> Post News
              </h2>

              {success && (
                <div className="bg-earth-800/60 border border-earth-600/60 text-earth-300 text-sm font-body px-4 py-3 rounded-xl mb-5 flex items-center gap-2">
                  ✅ News posted successfully!
                </div>
              )}
              {error && (
                <div className="bg-red-950/60 border border-red-800/60 text-red-300 text-sm font-body px-4 py-3 rounded-xl mb-5 flex items-center gap-2">
                  ⚠️ {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Category */}
                <div>
                  <label className="block font-body text-earth-400 text-xs uppercase tracking-widest mb-2">
                    Category
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full bg-earth-800/60 border border-earth-700/60 focus:border-earth-500 text-earth-200 rounded-xl px-4 py-3 font-body text-sm outline-none transition-all cursor-pointer"
                  >
                    {CATEGORIES.map((c) => (
                      <option key={c} value={c} className="bg-earth-900">{c}</option>
                    ))}
                  </select>
                </div>

                {/* Title */}
                <div>
                  <label className="block font-body text-earth-400 text-xs uppercase tracking-widest mb-2">
                    Headline
                  </label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter news headline..."
                    maxLength={120}
                    className="w-full bg-earth-800/60 border border-earth-700/60 focus:border-earth-500 text-earth-100 placeholder-earth-600 rounded-xl px-4 py-3 font-body text-sm outline-none transition-all"
                  />
                  <p className="text-right text-earth-700 text-xs mt-1">{title.length}/120</p>
                </div>

                {/* Body */}
                <div>
                  <label className="block font-body text-earth-400 text-xs uppercase tracking-widest mb-2">
                    Content
                  </label>
                  <textarea
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    placeholder="Write the full news content here..."
                    rows={5}
                    maxLength={800}
                    className="w-full bg-earth-800/60 border border-earth-700/60 focus:border-earth-500 text-earth-100 placeholder-earth-600 rounded-xl px-4 py-3 font-body text-sm outline-none transition-all resize-none"
                  />
                  <p className="text-right text-earth-700 text-xs mt-1">{body.length}/800</p>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-gradient-to-r from-earth-600 to-earth-500 hover:from-earth-500 hover:to-earth-400 text-white font-body font-semibold py-3.5 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-earth-700/40 disabled:opacity-60 text-sm tracking-wide"
                >
                  {submitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Publishing...
                    </span>
                  ) : "🚀 Publish News"}
                </button>
              </form>
            </div>
          </div>

          {/* ─── EXISTING NEWS ─── */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-earth-100 mb-6 flex items-center gap-2">
              <span>📋</span> Published News
              <span className="ml-auto bg-earth-800 text-earth-400 text-xs font-body px-3 py-1 rounded-full">
                {news.length} total
              </span>
            </h2>

            {loading ? (
              <p className="font-body text-earth-600 text-sm">Loading...</p>
            ) : news.length === 0 ? (
              <div className="text-center py-12 border border-earth-800/40 rounded-2xl">
                <div className="text-4xl mb-3">📰</div>
                <p className="font-display text-earth-600 italic">No news published yet.</p>
              </div>
            ) : (
              <div className="space-y-4 max-h-[600px] overflow-y-auto pr-1 custom-scroll">
                {news.map((item) => (
                  <NewsCard key={item.id} item={item} onDelete={deleteNews} />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* ─── FEEDBACK SECTION ─── */}
        <div className="mt-16">
          <h2 className="font-display text-2xl font-semibold text-earth-100 mb-6 flex items-center gap-2">
            <span>💬</span> Community Feedback
            <span className="ml-auto bg-earth-800 text-earth-400 text-xs font-body px-3 py-1 rounded-full">
              {feedbacks.length} total
            </span>
          </h2>

          {fbLoading ? (
            <p className="font-body text-earth-600 text-sm">Loading...</p>
          ) : feedbacks.length === 0 ? (
            <div className="text-center py-12 border border-earth-800/40 rounded-2xl">
              <div className="text-4xl mb-3">💬</div>
              <p className="font-display text-earth-600 italic">No feedback submitted yet.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {feedbacks.map((fb) => (
                <div key={fb.id} className="bg-earth-900/50 border border-earth-700/40 rounded-2xl p-5 flex flex-col gap-3">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="font-body font-semibold text-earth-100 text-sm">{fb.name}</p>
                      {fb.rating > 0 && (
                        <p className="text-amber-400 text-sm leading-none mt-0.5">
                          {'★'.repeat(fb.rating)}{'☆'.repeat(5 - fb.rating)}
                        </p>
                      )}
                    </div>
                    <button
                      onClick={() => deleteFeedback(fb.id)}
                      className="text-earth-600 hover:text-red-400 transition-colors text-lg leading-none flex-shrink-0"
                      title="Delete feedback"
                    >
                      ×
                    </button>
                  </div>
                  <p className="font-body text-earth-400 text-sm leading-relaxed flex-1">{fb.message}</p>
                  {fb.createdAt && (
                    <p className="font-body text-earth-700 text-xs">
                      {new Date(fb.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
