// src/App.jsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute   from "./components/ProtectedRoute";

import Login  from "./pages/Login";
import Signup from "./pages/Signup";
import Home   from "./pages/Home";
import Admin  from "./pages/Admin";

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/* Public routes */}
          <Route path="/login"  element={<Login />}  />
          <Route path="/signup" element={<Signup />} />

          {/* Public home */}
          <Route path="/" element={<Home />} />

          {/* Admin only */}
          <Route path="/admin" element={
            <ProtectedRoute><Admin /></ProtectedRoute>
          } />

          {/* Catch all */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
