import  { useState } from 'react';
import { Menu, X, User, LogOut, Home, Info, Phone, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState<{ name: string; email: string } | null>({ name: 'John Doe', email: 'john@example.com' });

  const handleLogout = () => {
    // Handle logout logic here
    console.log('Logging out...');
    setUser(null);
    // Redirect to login page or clear authentication
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-gray-800">Your App</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2 transition-colors">
                <Home size={16} />
                Home
              </a>
              <a href="#about" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2 transition-colors">
                <Info size={16} />
                About
              </a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2 transition-colors">
                <Phone size={16} />
                Contact
              </a>
              <a href="#settings" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2 transition-colors">
                <Settings size={16} />
                Settings
              </a>
            </div>
          </div>

          {/* User Menu */}
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              {user ? (
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <User size={16} className="text-white" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">{user.name}</span>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2 transition-colors"
                  >
                    <LogOut size={16} />
                    Logout
                  </button>
                </div>
              ) : (
               <Link to="/login" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2 transition-colors">
                 <User size={16} />
                 Login    
                </Link>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="bg-gray-200 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50 border-t border-gray-200">
            <a href="#home" className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium flex items-center gap-2">
              <Home size={16} />
              Home
            </a>
            <a href="#about" className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium flex items-center gap-2">
              <Info size={16} />
              About
            </a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium flex items-center gap-2">
              <Phone size={16} />
              Contact
            </a>
            <a href="#settings" className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium flex items-center gap-2">
              <Settings size={16} />
              Settings
            </a>
            
            {user ? (
              <div className="border-t border-gray-300 pt-4 pb-3">
                <div className="flex items-center px-3 mb-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <User size={16} className="text-white" />
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium text-gray-800">{user.name}</div>
                    <div className="text-sm font-medium text-gray-500">{user.email}</div>
                  </div>
                </div>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 hover:bg-red-600 text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left flex items-center gap-2 transition-colors"
                >
                  <LogOut size={16} />
                  Logout
                </button>
              </div>
            ) : (
              <div className="border-t border-gray-300 pt-4 pb-3">
                <button className="bg-blue-500 hover:bg-blue-600 text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors">
                  Login
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}