
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path
      ? "text-white border-b-2 border-white"
      : "text-indigo-100 hover:text-white";

  return (
    <nav className="sticky top-0 z-50 bg-indigo-600/95 backdrop-blur shadow">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="flex items-center space-x-3">
          <img
            src={logo}
            alt="Logo"
            className="w-10 h-10 rounded-full bg-white p-1"
          />
          <span className="text-white font-bold text-lg tracking-wide">
            Booking Platform
          </span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center space-x-8 font-medium">
          <Link to="/" className={isActive("/")}>
            Home
          </Link>
          <Link to="/about" className={isActive("/about")}>
            About
          </Link>
          <Link to="/login" className={isActive("/login")}>
            Login
          </Link>

          <Link
            to="/register"
            className="ml-4 bg-white text-indigo-600 px-5 py-2 rounded-full font-semibold hover:bg-indigo-50 transition"
          >
            Sing up
          </Link>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur px-6 py-6 space-y-4 shadow-lg">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="block font-semibold text-gray-800 hover:text-indigo-600"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="block font-semibold text-gray-800 hover:text-indigo-600"
          >
            About
          </Link>
          <Link
            to="/login"
            onClick={() => setIsOpen(false)}
            className="block font-semibold text-gray-800 hover:text-indigo-600"
          >
            Login
          </Link>

          <Link
            to="/register"
            onClick={() => setIsOpen(false)}
            className="block text-center bg-indigo-600 text-white py-2 rounded-full font-semibold"
          >
            Sign up
          </Link>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
