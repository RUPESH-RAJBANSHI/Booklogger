import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import LoginPage from "./Pages/Login";
import RegisterPage from "./Pages/Register";
import ForgotPasswordPage from "./Pages/ForgotPassword";
import DashboardPage from "./Pages/Dashboard";
import Navbar from "./components/Navbar";
import { Settings } from "lucide-react";

// Wrapper to conditionally show Navbar
function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  // Hide navbar on auth pages
  const hideNavbar = ["/login", "/register", "/forgetpassword"].includes(
    location.pathname.toLowerCase()
  );

  return (
    <>
      {!hideNavbar && <Navbar />}
      {children}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgetpassword" element={<ForgotPasswordPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/settings" element={<Settings />} />

          {/* You can add more protected routes here */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

