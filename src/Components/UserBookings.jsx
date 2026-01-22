
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Trash2 } from "lucide-react";

export default function UserBookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  // 🔹 Fetch user bookings
  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }

    const fetchBookings = async () => {
      try {
        const res = await axios.get("http://localhost:5000/bookings/my", {
          headers: { Authorization: `Bearer ${token}` },
        });

        setBookings(res.data);
      } catch (err) {
        console.error(err);
        setError("Failed to load bookings");
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, [token, navigate]);

  // 🔹 LOADING
  if (loading) {
    return (
      <p className="text-center mt-16 text-gray-600 text-lg">
        Loading your bookings...
      </p>
    );
  }

  // 🔹 ERROR
  if (error) {
    return (
      <p className="text-center mt-16 text-red-500 text-lg">{error}</p>
    );
  }

  // 🔹 NO BOOKINGS
  if (bookings.length === 0) {
    return (
      <div className="text-center mt-16">
        <p className="text-gray-600 mb-6 text-lg">
          You have no bookings on your dashboard.
        </p>

        <button
          onClick={() => navigate("/dashboard")}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Book a Service
        </button>
      </div>
    );
  }

  // DELETE = HIDE ONLY (UI only)
  const handleDelete = (id) => {
    if (!window.confirm("Remove this booking from your dashboard?")) return;
    setBookings((prev) => prev.filter((b) => b._id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h2 className="text-3xl font-bold text-center text-indigo-600 mb-10">
        My Bookings
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {bookings.map((b) => (
          <div
            key={b._id}
            className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition flex flex-col justify-between"
          >
            <div className="mb-4 text-left">
              <h3 className="font-semibold text-lg">{b.serviceName}</h3>
              <p className="text-indigo-600 font-bold">Price: ${b.servicePrice}</p>
              <p className="text-gray-700">Contact: {b.contact}</p>
              <p className="text-gray-400 text-sm mt-1">
                Booked on {new Date(b.createdAt).toLocaleDateString()}
              </p>
            </div>

            {/* DELETE BUTTON */}
            <button
              onClick={() => handleDelete(b._id)}
              className="flex items-center justify-center gap-2 bg-red-400 text-white py-2 rounded-lg hover:bg-red-700 transition"
            >
              <Trash2 size={16} /> Delete
            </button>
          </div>
        ))}
      </div>

      {/* BACK TO DASHBOARD */}
      <div className="mt-10 text-center">
        <button
          onClick={() => navigate("/dashboard")}
          className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
        >
          Book Another Service
        </button>
      </div>
    </div>
  );
}
