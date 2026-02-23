// src/App.jsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { LanguageProvider } from "./context/LanguageContext";
import ProtectedRoute   from "./components/ProtectedRoute";

import Login      from "./pages/Login";
import Signup     from "./pages/Signup";
import Home       from "./pages/Home";
import Admin      from "./pages/Admin";
import Temple     from "./pages/Temple";
import Festivals  from "./pages/Festivals";
import Businesses from "./pages/Businesses";
import Spots      from "./pages/Spots";
import History    from "./pages/History";
import Feedback   from "./pages/Feedback";

export default function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <AuthProvider>
        <Routes>
          <Route path="/login"      element={<Login />}      />
          <Route path="/signup"     element={<Signup />}     />
          <Route path="/"           element={<Home />}       />
          <Route path="/temple"     element={<Temple />}     />
          <Route path="/spots"      element={<Spots />}      />
          <Route path="/history"    element={<History />}    />
          <Route path="/festivals"  element={<Festivals />}  />
          <Route path="/businesses" element={<Businesses />} />
          <Route path="/feedback"   element={<Feedback />}   />
          <Route path="/admin"      element={<ProtectedRoute><Admin /></ProtectedRoute>} />
          <Route path="*"           element={<Navigate to="/" replace />} />
        </Routes>
        </AuthProvider>
      </LanguageProvider>
    </BrowserRouter>
  );
}
