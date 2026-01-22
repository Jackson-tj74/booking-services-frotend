


import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function BookingForm() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    serviceName: "",
    servicePrice: "",
    contact: "",
    notes: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  // Services default hamwe na prices
  const services = [
    { name: "Web Development", price: 500 },
    { name: "Mobile Apps", price: 800 },
    { name: "UI/UX Design", price: 400 },
    { name: "E-commerce Solutions", price: 700 },
    { name: "Digital Marketing", price: 300 },
    { name: "Cloud Services", price: 600 },
    { name: "Cybersecurity", price: 550 },
    { name: "Content Creation", price: 350 },
    { name: "IT Consulting", price: 450 },

  ];

  const handleServiceChange = (e) => {
    const selected = services.find(s => s.name === e.target.value);
    setForm({
      ...form,
      serviceName: selected.name,
      servicePrice: selected.price,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "http://localhost:5000/bookings",
        form,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setSuccess(response.data);
      setForm({ serviceName: "", servicePrice: "", contact: "", notes: "" });
    } catch (err) {
      alert(err.response?.data?.message || "Booking failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">
          Book a Service
        </h2>

        {/* Dropdown yo guhitamo service */}
        <select
          value={form.serviceName}
          onChange={handleServiceChange}
          className="w-full border p-2 mb-2 rounded"
          required
        >
          <option value="">Select a service</option>
          {services.map((s) => (
            <option key={s.name} value={s.name}>
              {s.name} (${s.price})
            </option>
          ))}
        </select>

        {/* Price irahita yandikwa bitewe na service */}
        <input
          type="number"
          placeholder="Price"
          value={form.servicePrice}
          readOnly
          className="w-full border p-2 mb-2 rounded bg-gray-100"
        />

        <input
          type="text"
          placeholder="Contact"
          value={form.contact}
          onChange={(e) =>
            setForm({ ...form, contact: e.target.value })
          }
          className="w-full border p-2 mb-2 rounded"
          required
        />

        <textarea
          placeholder="Notes (optional)"
          value={form.notes}
          onChange={(e) =>
            setForm({ ...form, notes: e.target.value })
          }
          className="w-full border p-2 mb-4 rounded"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-800 text-white py-2 rounded hover:bg-blue-700"
        >
          {loading ? "Booking..." : "Book Now"}
        </button>

        {success && (
          <div className="mt-4 p-3 bg-green-100 text-green-700 rounded">
            <p className="mb-2 font-semibold">{success.message}</p>

            {success.previewUrl && (
              <p className="text-sm mb-2">
                Preview (dev only):{" "}
                <a
                  href={success.previewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  View Email
                </a>
              </p>
            )}
          </div>
        )}

        {/* BUTTON OF VIEW MY BOOKINGS AS USER */}
        <button
          type="button"
          onClick={() => navigate("/mybookings")}
          className="w-full bg-green-700 text-white py-4 rounded hover:bg-green-600 mt-7"
        >
          View My Bookings
        </button>
      </form>
    </div>
  );
}
