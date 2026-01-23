
import ServicesCard from "./ServicesCard";
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

function HomeCard() {
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
  return (
    <div className="w-full">
      
      

      {/* Services Section */}
      <section id="services" className="relative z-10">
        <ServicesCard />
      </section>

      {/* About / Features Section */}
      <section className="w-full bg-gray-100 py-20 px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div className="bg-white rounded-xl p-8 shadow hover:shadow-xl transition">
            <h3 className="text-2xl font-bold mb-4">Fast & Reliable</h3>
            <p>Our services are optimized for speed and efficiency to save you time.</p>
          </div>
          <div className="bg-white rounded-xl p-8 shadow hover:shadow-xl transition">
            <h3 className="text-2xl font-bold mb-4">Secure & Safe</h3>
            <p>Your data and business are fully protected with modern security solutions.</p>
          </div>
          <div className="bg-white rounded-xl p-8 shadow hover:shadow-xl transition">
            <h3 className="text-2xl font-bold mb-4">24/7 Support</h3>
            <p>We provide round-the-clock support to help you whenever you need it.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-blue-800 py-20 text-center text-white">
        <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="mb-8 max-w-2xl mx-auto">
          Join thousands of happy customers using our platform to grow their business.
        </p>
        <a
          href="#services"
          className="bg-white text-blue-800 font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition"
        >
          Explore Now
        </a>
      </section>
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

export default HomeCard;
