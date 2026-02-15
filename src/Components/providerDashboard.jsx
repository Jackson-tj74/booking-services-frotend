import { useState } from "react";

function ProviderDashboard() {
  const [activeTab, setActiveTab] = useState("categories");

  const [categories, setCategories] = useState([]);
  const [services, setServices] = useState([]);
  const [bookings] = useState([
    { id: 1, client: "John", service: "Web Development", date: "2026-02-01" },
    { id: 2, client: "Alice", service: "UI/UX Design", date: "2026-02-05" },
  ]);

  const [profile, setProfile] = useState({
    name: "Provider Name",
    email: "provider@email.com",
  });

  const [categoryName, setCategoryName] = useState("");
  const [serviceData, setServiceData] = useState({
    name: "",
    price: "",
    category: "",
  });

  // add category
  const addCategory = () => {
    if (!categoryName) return;
    setCategories([...categories, { id: Date.now(), name: categoryName }]);
    setCategoryName("");
  };

  // add service
  const addService = () => {
    if (!serviceData.name || !serviceData.price) return;
    setServices([...services, { id: Date.now(), ...serviceData }]);
    setServiceData({ name: "", price: "", category: "" });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-indigo-600">
        Provider Dashboard
      </h1>

      {/* 🔹 TABS */}
      <div className="flex gap-4 mb-8">
        {["categories", "services", "bookings", "profile"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded ${
              activeTab === tab
                ? "bg-indigo-600 text-white"
                : "bg-white border"
            }`}
          >
            {tab.toUpperCase()}
          </button>
        ))}
      </div>

      {/* 📂 CATEGORIES */}
      {activeTab === "categories" && (
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-bold mb-4">Categories</h2>

          <div className="flex gap-2 mb-4">
            <input
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
              placeholder="Category name"
              className="border p-2 rounded w-full"
            />
            <button
              onClick={addCategory}
              className="bg-indigo-600 text-white px-4 rounded"
            >
              Add
            </button>
          </div>

          {categories.map((cat) => (
            <div key={cat.id} className="border p-2 rounded mb-2">
              {cat.name}
            </div>
          ))}
        </div>
      )}

      {/* 🛠 SERVICES */}
      {activeTab === "services" && (
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-bold mb-4">Services</h2>

          <input
            placeholder="Service name"
            value={serviceData.name}
            onChange={(e) =>
              setServiceData({ ...serviceData, name: e.target.value })
            }
            className="border p-2 rounded w-full mb-2"
          />

          <input
            placeholder="Price"
            value={serviceData.price}
            onChange={(e) =>
              setServiceData({ ...serviceData, price: e.target.value })
            }
            className="border p-2 rounded w-full mb-2"
          />

          <select
            value={serviceData.category}
            onChange={(e) =>
              setServiceData({ ...serviceData, category: e.target.value })
            }
            className="border p-2 rounded w-full mb-4"
          >
            <option value="">Select Category</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.name}>
                {cat.name}
              </option>
            ))}
          </select>

          <button
            onClick={addService}
            className="bg-green-600 text-white px-4 py-2 rounded mb-4"
          >
            Add Service
          </button>

          {services.map((srv) => (
            <div key={srv.id} className="border p-3 rounded mb-2">
              <b>{srv.name}</b> – ${srv.price}  
              <div className="text-sm text-gray-500">{srv.category}</div>
            </div>
          ))}
        </div>
      )}

      {/* 📅 BOOKINGS */}
      {activeTab === "bookings" && (
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-bold mb-4">Bookings</h2>

          {bookings.map((b) => (
            <div key={b.id} className="border p-3 rounded mb-2">
              <p><b>Client:</b> {b.client}</p>
              <p><b>Service:</b> {b.service}</p>
              <p><b>Date:</b> {b.date}</p>
            </div>
          ))}
        </div>
      )}

      {/* 👤 PROFILE */}
      {activeTab === "profile" && (
        <div className="bg-white p-6 rounded shadow max-w-md">
          <h2 className="text-xl font-bold mb-4">My Profile</h2>

          <input
            value={profile.name}
            onChange={(e) =>
              setProfile({ ...profile, name: e.target.value })
            }
            className="border p-2 rounded w-full mb-3"
          />

          <input
            value={profile.email}
            onChange={(e) =>
              setProfile({ ...profile, email: e.target.value })
            }
            className="border p-2 rounded w-full mb-3"
          />

          <button className="bg-indigo-600 text-white px-4 py-2 rounded">
            Update Profile
          </button>
        </div>
      )}
    </div>
  );
}

export default ProviderDashboard;
