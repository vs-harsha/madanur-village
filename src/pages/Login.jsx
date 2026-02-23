// src/pages/Login.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const navigate  = useNavigate();

  const [email,    setEmail]    = useState("");
  const [password, setPassword] = useState("");
  const [error,    setError]    = useState("");
  const [loading,  setLoading]  = useState(false);
  const [showPass, setShowPass] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await login(email, password);
      navigate("/");
    } catch (err) {
      const messages = {
        "auth/invalid-credential":    "Invalid email or password.",
        "auth/too-many-requests":     "Too many attempts. Try again later.",
        "auth/user-not-found":        "No account found with this email.",
        "auth/wrong-password":        "Incorrect password.",
      };
      setError(messages[err.code] || "Failed to login. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-earth-950 flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-earth-700/20 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-earth-600/15 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-earth-800/10 rounded-full blur-3xl" />
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: "radial-gradient(circle, #4a7c22 1px, transparent 1px)",
          backgroundSize: "48px 48px"
        }} />
      </div>

      {/* Card */}
      <div className="relative w-full max-w-md animate-fade-up">
        {/* Glassmorphism card */}
        <div className="bg-earth-900/40 backdrop-blur-xl border border-earth-700/40 rounded-3xl p-8 shadow-2xl shadow-earth-950/80">

          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-earth-700/50 rounded-2xl mb-4 animate-float border border-earth-600/40">
              <span className="text-3xl">🌿</span>
            </div>
            <h1 className="font-display text-3xl font-bold text-earth-50 mb-1">
              Welcome Back
            </h1>
            <p className="font-display italic text-earth-400 text-sm">
              మదనూరు గ్రామం — Our Village, Our Pride
            </p>
          </div>

          {/* Error */}
          {error && (
            <div className="bg-red-950/60 border border-red-800/60 text-red-300 text-sm font-body px-4 py-3 rounded-xl mb-6 flex items-center gap-2">
              <span>⚠️</span> {error}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label className="block font-body text-earth-400 text-xs uppercase tracking-widest mb-2">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-earth-500">✉️</span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="you@example.com"
                  className="w-full bg-earth-800/50 border border-earth-700/60 focus:border-earth-500 text-earth-100 placeholder-earth-600 rounded-xl pl-11 pr-4 py-3 font-body text-sm outline-none transition-all duration-200 focus:shadow-lg focus:shadow-earth-700/20 focus:bg-earth-800/70"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block font-body text-earth-400 text-xs uppercase tracking-widest mb-2">
                Password
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-earth-500">🔒</span>
                <input
                  type={showPass ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="••••••••"
                  className="w-full bg-earth-800/50 border border-earth-700/60 focus:border-earth-500 text-earth-100 placeholder-earth-600 rounded-xl pl-11 pr-12 py-3 font-body text-sm outline-none transition-all duration-200 focus:shadow-lg focus:shadow-earth-700/20 focus:bg-earth-800/70"
                />
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-earth-500 hover:text-earth-300 transition-colors"
                >
                  {showPass ? "🙈" : "👁️"}
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-earth-600 to-earth-500 hover:from-earth-500 hover:to-earth-400 text-white font-body font-semibold py-3.5 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-earth-700/40 disabled:opacity-60 disabled:cursor-not-allowed text-sm tracking-wide mt-2"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Signing in...
                </span>
              ) : "Sign In →"}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-earth-800" />
            <span className="font-body text-earth-600 text-xs">or</span>
            <div className="flex-1 h-px bg-earth-800" />
          </div>

          {/* Signup link */}
          <p className="text-center font-body text-earth-500 text-sm">
            New to Madanur?{" "}
            <Link to="/signup" className="text-earth-300 hover:text-earth-100 font-semibold transition-colors underline underline-offset-2">
              Create an account
            </Link>
          </p>
        </div>

        {/* Bottom tagline */}
        <p className="text-center font-body text-earth-700 text-xs mt-6">
          Prakasam District • Andhra Pradesh • India
        </p>
      </div>
    </div>
  );
}
