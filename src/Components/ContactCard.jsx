import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import axios from "axios";

export default function ContactCard() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");

    try {
      // Example endpoint, adjust your backend
      await axios.post("http://localhost:5000/contact", form);

      setSuccess("Message sent successfully ✅");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      alert(err.response?.data?.message || "Failed to send message ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-indigo-600 mb-8">
        Contact Us
      </h1>
      <p className="text-center text-gray-600 mb-12">
        Have questions? Reach out to us and we will respond promptly.
      </p>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <MapPin className="text-indigo-600" />
            <p>Gatsibo, Rwanda</p>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="text-indigo-600" />
            <p>+250 735 569 409</p>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="text-indigo-600" />
            <p>support@bookingplatform.com</p>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={submit}
          className="bg-white p-6 rounded-xl shadow-md space-y-4"
        >
          {success && (
            <p className="text-green-600 font-semibold text-center">{success}</p>
          )}
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border p-3 rounded focus:ring-2 focus:ring-indigo-500"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border p-3 rounded focus:ring-2 focus:ring-indigo-500"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
          <textarea
            placeholder="Your Message"
            className="w-full border p-3 rounded focus:ring-2 focus:ring-indigo-500"
            rows={5}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            required
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 text-white py-3 rounded hover:bg-indigo-700 transition"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
}
