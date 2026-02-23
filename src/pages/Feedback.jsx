// src/pages/Feedback.jsx
import { useState } from "react";
import Navbar  from "../components/Navbar";
import Footer  from "../components/Footer";
import { useLanguage } from "../context/LanguageContext";
import { t }           from "../assets/translations";
import { useFeedback } from "../hooks/useFeedback";

function StarRating({ value, onChange }) {
  const [hovered, setHovered] = useState(0);
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => onChange(star)}
          onMouseEnter={() => setHovered(star)}
          onMouseLeave={() => setHovered(0)}
          className="text-2xl transition-transform hover:scale-110 focus:outline-none"
        >
          <span className={(hovered || value) >= star ? "text-amber-400" : "text-gray-300"}>
            ★
          </span>
        </button>
      ))}
    </div>
  );
}

export default function Feedback() {
  const { lang }  = useLanguage();
  const T         = t[lang];
  const { addFeedback } = useFeedback();

  const [name,       setName]       = useState("");
  const [message,    setMessage]    = useState("");
  const [rating,     setRating]     = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [success,    setSuccess]    = useState(false);
  const [error,      setError]      = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!name.trim() || !message.trim()) {
      setError(T.feedback_error_fields);
      return;
    }
    setSubmitting(true);
    try {
      await addFeedback(name, message, rating);
      setName("");
      setMessage("");
      setRating(0);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 4000);
    } catch {
      setError(T.feedback_error);
    }
    setSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-earth-50">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-14 bg-gradient-to-b from-amber-50 to-earth-50">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <span className="inline-block bg-earth-100 text-earth-700 font-body text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            {T.feedback_badge}
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {T.feedback_title}
          </h1>
          <p className="font-body text-gray-500 text-base leading-relaxed">
            {T.feedback_sub}
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="pb-24">
        <div className="max-w-xl mx-auto px-6">
          <div className="bg-white border border-earth-200 rounded-2xl shadow-sm p-8">

            {success && (
              <div className="bg-green-50 border border-green-200 text-green-700 text-sm font-body px-4 py-3 rounded-xl mb-6 flex items-center gap-2">
                ✅ {T.feedback_success}
              </div>
            )}
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 text-sm font-body px-4 py-3 rounded-xl mb-6 flex items-center gap-2">
                ⚠️ {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block font-body text-gray-600 text-xs uppercase tracking-widest mb-2">
                  {T.feedback_name_label}
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={T.feedback_name_placeholder}
                  maxLength={80}
                  className="w-full border border-earth-200 focus:border-earth-500 bg-earth-50 text-gray-800 placeholder-gray-400 rounded-xl px-4 py-3 font-body text-sm outline-none transition-all"
                />
              </div>

              {/* Rating */}
              <div>
                <label className="block font-body text-gray-600 text-xs uppercase tracking-widest mb-2">
                  {T.feedback_rating_label}
                </label>
                <StarRating value={rating} onChange={setRating} />
              </div>

              {/* Message */}
              <div>
                <label className="block font-body text-gray-600 text-xs uppercase tracking-widest mb-2">
                  {T.feedback_msg_label}
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={T.feedback_msg_placeholder}
                  rows={5}
                  maxLength={600}
                  className="w-full border border-earth-200 focus:border-earth-500 bg-earth-50 text-gray-800 placeholder-gray-400 rounded-xl px-4 py-3 font-body text-sm outline-none transition-all resize-none"
                />
                <p className="text-right text-gray-400 text-xs mt-1">{message.length}/600</p>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-gradient-to-r from-earth-600 to-earth-500 hover:from-earth-500 hover:to-earth-400 text-white font-body font-semibold py-3.5 rounded-xl transition-all duration-300 hover:shadow-lg disabled:opacity-60 text-sm tracking-wide"
              >
                {submitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    {T.feedback_submitting}
                  </span>
                ) : T.feedback_submit}
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
