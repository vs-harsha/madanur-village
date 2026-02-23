// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

class ErrorBoundary extends React.Component {
  constructor(props) { super(props); this.state = { error: null }; }
  static getDerivedStateFromError(error) { return { error }; }
  render() {
    if (this.state.error) {
      return (
        <div style={{ minHeight: "100vh", background: "#13230c", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "12px", fontFamily: "sans-serif", padding: "24px" }}>
          <div style={{ fontSize: "2.5rem" }}>⚠️</div>
          <p style={{ color: "#a9d082", fontSize: "1.1rem", fontWeight: 600 }}>Firebase configuration missing</p>
          <p style={{ color: "#619c30", fontSize: "0.85rem", textAlign: "center", maxWidth: 400 }}>
            Add your <code style={{ background: "#29411b", padding: "2px 6px", borderRadius: 4 }}>VITE_FIREBASE_*</code> environment variables in Netlify → Site configuration → Environment variables, then redeploy.
          </p>
          <p style={{ color: "#3b611e", fontSize: "0.75rem", marginTop: 8 }}>{this.state.error.message}</p>
        </div>
      );
    }
    return this.props.children;
  }
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
