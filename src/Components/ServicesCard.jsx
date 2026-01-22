
import { useNavigate } from "react-router-dom";
import pic1 from "../assets/pic1.jpg";
import pic2 from "../assets/pic2.jpg";
import pic3 from "../assets/pic3.jpg";
import pic4 from "../assets/pic4.jpg";
import pic5 from "../assets/pic5.jpg";
import pic6 from "../assets/pic6.jpg";
import pic7 from "../assets/pic7.jpg";
import pic8 from "../assets/pic8.jpg";
import pic9 from "../assets/pic9.jpg";

function ServicesCard() {
  const navigate = useNavigate();

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

  const handleBooking = (service) => {
    const token = localStorage.getItem("token");

    if (!token) {
      // If user are not logged in : save services in localStorage
      localStorage.setItem("selectedService", JSON.stringify(service));
      alert("Please register or login before booking.");
      navigate("/register");
      return;
    }

    // If user are logged in :navigate to confirm booking page
    localStorage.setItem("selectedService", JSON.stringify(service));
    navigate("/booking-form");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center text-blue-800 mb-10">
        Our Services
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((service) => (
          <div key={service.id} className="bg-white p-6 rounded-lg shadow">
            <img
              src={service.image}
              alt={service.name}
              className="w-full h-48 object-cover rounded mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{service.name}</h2>
            <p className="font-bold mb-4">${service.price}</p>


          </div>
        ))}
      </div>
    </div>
  );
}

export default ServicesCard;
