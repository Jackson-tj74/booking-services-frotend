
import ServicesCard from "./ServicesCard";
import { ArrowRight } from "lucide-react";

function HomeCard() {
  return (
    <div className="min-h-screen bg-slate-50">

      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-indigo-700 to-blue-600 text-white py-24 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Smart IT Solutions <br className="hidden md:block" />
          For Your Business Growth
        </h1>

        <p className="text-lg md:text-xl text-indigo-100 mb-10 max-w-2xl mx-auto">
          We help businesses grow faster with secure, reliable, and modern
          technology solutions.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#services"
            className="bg-white text-indigo-700 font-semibold py-3 px-8 rounded-lg hover:bg-indigo-100 transition inline-flex items-center justify-center gap-2"
          >
            Explore Services <ArrowRight size={18} />
          </a>

          <a
            href="/register"
            className="border border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-indigo-700 transition"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Our Services
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            We offer a wide range of IT services designed to help your business
            succeed in the digital world.
          </p>
        </div>

        <ServicesCard />
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-indigo-700 text-white py-20 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to get started?
        </h2>

        <p className="text-indigo-100 mb-8 max-w-xl mx-auto">
          Book your service today and take your business to the next level with
          our expert team.
        </p>

        <a
          href="/login"
          className="bg-white text-indigo-700 font-semibold py-3 px-10 rounded-lg hover:bg-indigo-100 transition inline-block"
        >
          Book a Service
        </a>
      </section>

     
     

    </div>
  );
}

export default HomeCard;
