
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import color from "../assets/color.jpg";
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
    { id: 1, name: "Web Development", image: pic1, price: 500, description: "Build modern websites" },
    { id: 2, name: "Mobile Apps", image: pic2, price: 800, description: "iOS & Android applications" },
    { id: 3, name: "UI/UX Design", image: pic3, price: 400, description: "Design beautiful interfaces" },
    { id: 4, name: "E-commerce Solutions", image: pic4, price: 700, description: "Sell online easily" },
    { id: 5, name: "Digital Marketing", image: pic5, price: 300, description: "Grow your audience" },
    { id: 6, name: "Cloud Services", image: pic6, price: 600, description: "Reliable cloud hosting" },
    { id: 7, name: "Cybersecurity", image: pic7, price: 550, description: "Protect your data" },
    { id: 8, name: "Content Creation", image: pic8, price: 350, description: "Engaging content for social" },
    { id: 9, name: "IT Consulting", image: pic9, price: 450, description: "Professional advice for your business" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % servicesData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleBooking = (service) => {
    const token = localStorage.getItem("token");
    localStorage.setItem("selectedService", JSON.stringify(service));

    if (!token) {
      alert("Please register or login before booking.");
      navigate("/register");
      return;
    }

    navigate("/login");
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + servicesData.length) % servicesData.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % servicesData.length);
  };

  return (
    <div
      className="w-full h-screen relative overflow-hidden"
      style={{
        backgroundImage: `url(${color})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/20"></div> {/* overlay */}

      {/* Slides */}
      {servicesData.map((service, index) => (
        <div
          key={service.id}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out
            ${index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"}
          cursor-pointer`}
          onClick={() => handleBooking(service)}
        >
          <img
            src={service.image}
            alt={service.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-12">
            <h2 className="text-white text-5xl font-bold mb-2">{service.name}</h2>
            <p className="text-white text-2xl mb-4">{service.description}</p>
            <p className="text-white text-3xl font-semibold mb-6">${service.price}</p>
            <button
              onClick={() => handleBooking(service)}
              className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg text-xl font-semibold transition"
            >
              Book Now
            </button>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        className="absolute left-5 top-1/2 -translate-y-1/2 text-white text-4xl font-bold z-20"
        onClick={prevSlide}
      >
        ‹
      </button>
      <button
        className="absolute right-5 top-1/2 -translate-y-1/2 text-white text-4xl font-bold z-20"
        onClick={nextSlide}
      >
        ›
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-10 w-full flex justify-center space-x-3">
        {servicesData.map((_, idx) => (
          <span
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-4 h-4 rounded-full cursor-pointer transition
              ${idx === currentIndex ? "bg-white" : "bg-gray-400"}`}
          ></span>
        ))}
        
      </div>
      
      
      
    </div>
  );
}

export default ServicesCard;


     
     
       
       
  
