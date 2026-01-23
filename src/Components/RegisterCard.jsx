
import bg from "../assets/bg.png";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import register from "../assets/register.jpg";
import { Eye, EyeOff } from "lucide-react";

export default function RegisterCard() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const endpoint =
        form.role === "admin"
          ? "http://localhost:5000/admin/register"
          : "http://localhost:5000/user/register";

      await axios.post(endpoint, form);

      alert(`Registered successfully as ${form.role} ✅`);
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen relative"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay to make content readable */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative min-h-screen flex items-center justify-center p-6">
        
         
          {/* RIGHT PANEL – REGISTER FORM */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <div className="bg-white p-6 w-full max-w-md rounded-lg shadow-md">

              
              

              <form onSubmit={submit}>
                <h1 className="text-2xl font-bold text-center mb-2">
                  Sign up
                </h1>
                <p className="text-center text-gray-600 mb-6">
                  Fill in the details below
                </p>

                {/* NAME */}
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full border p-2 mb-4 rounded"
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                  required
                />

                {/* EMAIL */}
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border p-2 mb-4 rounded"
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                  required
                />

                {/* PASSWORD */}
                <div className="relative mb-4">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="w-full border p-2 pr-10 rounded"
                    value={form.password}
                    onChange={(e) =>
                      setForm({ ...form, password: e.target.value })
                    }
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-2.5 text-gray-500"
                  >
                    {showPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
                </div>

                {/* ROLE */}
                <div className="mb-4">
                  <p className="font-semibold mb-2">
                    Sign up as:
                  </p>
                  <label className="mr-4">
                    <input
                      type="radio"
                      name="role"
                      value="user"
                      checked={form.role === "user"}
                      onChange={(e) =>
                        setForm({ ...form, role: e.target.value })
                      }
                    />{" "}
                    User
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="role"
                      value="admin"
                      checked={form.role === "admin"}
                      onChange={(e) =>
                        setForm({ ...form, role: e.target.value })
                      }
                    />{" "}
                    Admin
                  </label>
                </div>

                {/* SUBMIT */}
                <button
                  disabled={loading}
                  className="w-full bg-blue-800 text-white py-2 rounded hover:bg-blue-900 transition"
                >
                  {loading ? "Registering..." : "Register"}
                </button>

                <p className="text-center text-sm mt-4">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="text-blue-600 font-semibold"
                  >
                    Login
                  </Link>
                </p>
              </form>
            
          </div>

        </div>
      </div>
    </div>
  );
}
