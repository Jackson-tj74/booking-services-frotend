
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Eye, EyeOff, Home, Info, Phone, Menu } from "lucide-react";
import axios from "axios";
import login from "../assets/login.jpg";

export default function LoginCard() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
    loginAs: "user",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const url =
        form.loginAs === "admin"
          ? "http://localhost:5000/admin/login"
          : "http://localhost:5000/user/login";

      const res = await axios.post(url, {
        email: form.email,
        password: form.password,
      });

      const { token, user, admin } = res.data;
      localStorage.setItem("token", token);
      localStorage.setItem(
        "user",
        JSON.stringify(form.loginAs === "admin" ? admin : user)
      );

      navigate(form.loginAs === "admin" ? "/admindashboard" : "/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex bg-slate-50">

      {/* SIDEBAR */}
      <div
        className={`fixed inset-y-0 left-0 z-40 w-64 p-6 bg-indigo-700 text-white transform transition-transform duration-300
        md:relative md:translate-x-0
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">MyApp</h2>
          <button className="md:hidden" onClick={() => setSidebarOpen(false)}>
            ✕
          </button>
        </div>

        <nav className="space-y-3">
          <Link to="/" className="flex items-center gap-3 p-2 rounded hover:bg-indigo-600">
            <Home size={18} /> Home
          </Link>
          <Link to="/about" className="flex items-center gap-3 p-2 rounded hover:bg-indigo-600">
            <Info size={18} /> About
          </Link>
          <Link to="/contact" className="flex items-center gap-3 p-2 rounded hover:bg-indigo-600">
            <Phone size={18} /> Contact
          </Link>
          <Link to="/register" className="flex items-center gap-3 p-2 rounded hover:bg-indigo-600">
            ➕ Sign up
          </Link>
        </nav>

        <p className="text-xs text-indigo-200 mt-8">© 2026 MyApp</p>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 flex flex-col md:flex-row md:ml-64 p-6 w-full">

        {/* LEFT PANEL */}
        <div className="hidden md:flex w-1/2 bg-indigo-700 text-white items-center justify-center p-10 rounded-l-2xl">
          <div className="text-center">
            <img src={login} alt="Login" className="w-64 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-3">Welcome Back!</h2>
            <p className="text-indigo-100 mb-4">
              Manage your account, track progress, and access all features in one place.
            </p>
            <ul className="text-sm text-indigo-100 space-y-1">
              <li>✔ Secure login</li>
              <li>✔ User & Admin access</li>
              <li>✔ Fast & reliable</li>
            </ul>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md">

            {/* MOBILE MENU */}
            <button
              className="md:hidden mb-4 text-indigo-700"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu size={24} />
            </button>

            {/* TOP HEADER */}
            <div className="text-center mb-6">
              <img src={login} alt="Logo" className="w-14 mx-auto mb-2 md:hidden" />
              <h2 className="text-xl font-bold text-indigo-700">MyApp</h2>
              <p className="text-slate-500 text-sm">
                Secure access to your dashboard
              </p>
            </div>

            {/* FORM */}
            <form onSubmit={submit}>
              <h1 className="text-2xl font-bold text-center text-slate-800 mb-2">
                Login
              </h1>
              <p className="text-center text-slate-500 mb-6">
                Please log in to continue
              </p>

              <input
                type="email"
                placeholder="Email"
                className="w-full border border-slate-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 p-2 mb-4 rounded-lg outline-none"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />

              <div className="relative mb-4">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="w-full border border-slate-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 p-2 pr-10 rounded-lg outline-none"
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-2.5 text-slate-500"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              <div className="mb-4 text-slate-700">
                <p className="font-semibold mb-2">Login as:</p>
                <label className="mr-4">
                  <input
                    type="radio"
                    name="loginAs"
                    value="user"
                    checked={form.loginAs === "user"}
                    onChange={(e) => setForm({ ...form, loginAs: e.target.value })}
                  />{" "}
                  User
                </label>
                <label>
                  <input
                    type="radio"
                    name="loginAs"
                    value="admin"
                    checked={form.loginAs === "admin"}
                    onChange={(e) => setForm({ ...form, loginAs: e.target.value })}
                  />{" "}
                  Admin
                </label>
              </div>

              <button
                disabled={loading}
                className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition font-semibold disabled:opacity-60"
              >
                {loading ? "Logging in..." : "Login"}
              </button>
              <p className="text-center text-sm mt-4">
                Don't have an account?{" "}
                <Link
                  to="/register"
                  className="text-blue-600 font-semibold"
                >
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
