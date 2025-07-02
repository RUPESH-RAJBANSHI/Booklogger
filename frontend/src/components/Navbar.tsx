import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Menu,
  X,
  LogOut,
  User,
  Home,
  BookOpen,
  Settings,
  Users
} from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Simulated logged-in user
  const [user, setUser] = useState<{ name: string; email: string } | null>({
    name: "John Doe",
    email: "john@example.com"
  });

  const handleLogout = () => {
    console.log("Logging out...");
    setUser(null);
    navigate("/login");
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/dashboard" className="flex items-center gap-2">
            <BookOpen size={24} className="text-blue-600" />
            <span className="font-bold text-gray-800">Booklogger</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              to="/dashboard"
              className="flex items-center gap-1 text-gray-600 hover:text-blue-600 text-sm font-medium"
            >
              <Home size={16} />
              Dashboard
            </Link>
            <Link
              to="/books"
              className="flex items-center gap-1 text-gray-600 hover:text-blue-600 text-sm font-medium"
            >
              <BookOpen size={16} />
              Books
            </Link>
            <Link
              to="/authors"
              className="flex items-center gap-1 text-gray-600 hover:text-blue-600 text-sm font-medium"
            >
              <Users size={16} />
              Authors
            </Link>
            <Link
              to="/settings"
              className="flex items-center gap-1 text-gray-600 hover:text-blue-600 text-sm font-medium"
            >
              <Settings size={16} />
              Settings
            </Link>

            {user ? (
              <>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <User size={16} className="text-white" />
                  </div>
                  <span className="text-sm text-gray-700">{user.name}</span>
                </div>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-1 bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 rounded text-sm"
                >
                  <LogOut size={16} />
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1.5 rounded text-sm"
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-gray-800 p-2 rounded"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="space-y-1 p-3">
            <Link
              to="/dashboard"
              className="flex items-center gap-2 text-gray-700 hover:text-blue-600 text-sm py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              <Home size={16} />
              Dashboard
            </Link>
            <Link
              to="/books"
              className="flex items-center gap-2 text-gray-700 hover:text-blue-600 text-sm py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              <BookOpen size={16} />
              Books
            </Link>
            <Link
              to="/authors"
              className="flex items-center gap-2 text-gray-700 hover:text-blue-600 text-sm py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              <Users size={16} />
              Authors
            </Link>
            <Link
              to="/settings"
              className="flex items-center gap-2 text-gray-700 hover:text-blue-600 text-sm py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              <Settings size={16} />
              Settings
            </Link>
            {user ? (
              <>
                <div className="flex items-center gap-2 mt-2 px-1">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <User size={16} className="text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-800">
                      {user.name}
                    </div>
                    <div className="text-xs text-gray-500">{user.email}</div>
                  </div>
                </div>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-1 w-full text-left bg-red-500 hover:bg-red-600 text-white px-3 py-2 mt-2 rounded text-sm"
                >
                  <LogOut size={16} />
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="block bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded text-sm mt-2"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
