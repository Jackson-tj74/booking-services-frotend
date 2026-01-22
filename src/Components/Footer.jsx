import { Mail, Phone, MapPin } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-10 md:grid-cols-3">

        {/* BRAND */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">
            Booking Platform
          </h2>
          <p className="text-sm leading-relaxed text-slate-400">
            Your trusted online booking solution. Simple, fast, secure, and
            reliable for individuals and businesses.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-indigo-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-indigo-400 transition">
                About
              </a>
            </li>
            <li>
              <a href="/login" className="hover:text-indigo-400 transition">
                Login
              </a>
            </li>
            <li>
              <a href="/register" className="hover:text-indigo-400 transition">
                Register
              </a>
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Contact Us
          </h3>

          <div className="space-y-3 text-sm">
            <a
              href="mailto:bookingonlinetj@gmail.com"
              className="flex items-center gap-2 hover:text-indigo-400 transition"
            >
              <Mail size={16} /> bookingonlinetj@gmail.com
            </a>

            <p className="flex items-center gap-2">
              <Phone size={16} /> +250 735 569 409
            </p>

            <p className="flex items-center gap-2">
              <MapPin size={16} /> Gatsibo, Rwanda
            </p>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-slate-700 text-center py-4 text-sm text-slate-400">
        © {new Date().getFullYear()} Booking Platform. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;

