
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LogOut, CalendarCheck } from "lucide-react";

import pic1 from "../assets/pic1.jpg";
import pic2 from "../assets/pic2.jpg";
import pic3 from "../assets/pic3.jpg";
import pic4 from "../assets/pic4.jpg";
import pic5 from "../assets/pic5.jpg";
import pic6 from "../assets/pic6.jpg";
import pic7 from "../assets/pic7.jpg";
import pic8 from "../assets/pic8.jpg";
import pic9 from "../assets/pic9.jpg";

function ServicesDashboard() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  const [searchTerm, setSearchTerm] = useState("");

  // Protect dashboard
  useEffect(() => {
    if (!token || !user) {
      navigate("/login");
    }
  }, [token, user, navigate]);

  const servicesData = [
    { id: 1, name: "Web Development", image: pic1, price: 500 },
    { id: 2, name: "Mobile Apps", image: pic2, price: 800 },
    { id: 3, name: "UI/UX Design", image: pic3, price: 400 },
    { id: 4, name: "E-commerce Solutions", image: pic4, price: 700 },
    { id: 5, name: "Digital Marketing", image: pic5, price: 300 },
    { id: 6, name: "Cloud Services", image: pic6, price: 600 },
    { id: 7, name: "Cybersecurity", image: pic7, price: 550 },
    { id: 8, name: "Content Creation", image: pic8, price: 350 },
    { id: 9, name: "IT Consulting", image: pic9, price: 450 },
  ];

  // 🔍 Filter services
  const filteredServices = servicesData.filter((service) =>
    service.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleBooking = (service) => {
    localStorage.setItem("selectedService", JSON.stringify(service));
    navigate("/booking-form");
  };

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-50">

      {/* 🔵 TOP HEADER */}
      <div className="bg-indigo-600 text-white px-6 py-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold">
              Welcome, {user?.name} 👋
            </h1>
            <p className="text-indigo-100 text-sm">
              {user?.email}
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => navigate("/mybookings")}
              className="flex items-center gap-2 bg-green-500 px-4 py-2 rounded-lg hover:bg-green-600 transition"
            >
              <CalendarCheck size={18} />
              My Bookings
            </button>

            <button
              onClick={logout}
              className="flex items-center gap-2 bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600 transition"
            >
              <LogOut size={18} />
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* 🧩 SERVICES SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">
          Available Services
        </h2>

        {/* 🔍 SEARCH INPUT */}
        <div className="mb-10 flex justify-center">
          <input
            type="text"
            placeholder="Search service..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full max-w-md px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {filteredServices.length === 0 && (
          <p className="text-center text-gray-500">
            No services found 😕
          </p>
        )}

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden"
            >
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-48 object-cover"
              />

              <div className="p-5">
                <h3 className="text-xl font-semibold mb-1">
                  {service.name}
                </h3>
                <p className="text-indigo-600 font-bold mb-4">
                  ${service.price}
                </p>

                <button
                  onClick={() => handleBooking(service)}
                  className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
                >
                  Book Service
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default ServicesDashboard;
