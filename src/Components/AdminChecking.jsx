
import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminChecking() {
  const [bookings, setBookings] = useState([]);

  // Fetch bookings from backend
  useEffect(() => {
    const fetchBookings = async () => {
      const token = localStorage.getItem("token");
      try {
        const res = await axios.get("http://localhost:5000/admin/bookings", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setBookings(res.data);
      } catch (err) {
        console.error(err);
        alert("Failed to fetch bookings ❌");
      }
    };

    fetchBookings();
  }, []);

  // Delete booking
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this booking?"
    );
    if (!confirmDelete) return;

    const token = localStorage.getItem("token");
    try {
      await axios.delete(`http://localhost:5000/admin/bookings/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setBookings(bookings.filter((b) => b._id !== id));
      alert("Booking deleted ✅");
    } catch (err) {
      console.error(err);
      alert("Failed to delete booking ❌");
    }
  };

  return (
    <div className="text-center p-2 px-5">
       <h1 className="text-3xl font-bold mb-6 text-center text-blue-800">Admin Dashboard</h1>

      <h1 className="text-2xl font-bold mb-2">Customers Bookings</h1>

      {bookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        <table className="  w-full border">
          <thead>
            <tr className="border-b bg-gray-100">
              <th className="p-2">Service</th>
              <th className="p-2">Customer</th>
              <th className="p-2 ">Email</th> 
              <th className="p-2">Contact</th>
              <th className="p-2">Price</th>
              <th className="p-2">Notes</th>
              <th className="p-2">Date</th>
              <th className="p-2">Action</th>
            </tr>
          </thead>

          <tbody>
            {bookings.map((b) => (
              <tr key={b._id} className="border-b ">
                <td className="p-2">{b.serviceName}</td>
                <td className="p-2">{b.customerName}</td>

                {/* EMAIL */}
                <td className="p-1 text-blue-700 ">
                  {b.customerEmail}
                </td>

                <td className="p-2">{b.contact}</td>
                <td className="p-2">${b.servicePrice}</td>
                <td className="p-2">{b.notes || "-"}</td>

                <td className="p-2">
                  {new Date(b.createdAt).toLocaleDateString()}
                </td>

                <td className="p-2">
                  <button
                    onClick={() => handleDelete(b._id)}
                    className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

