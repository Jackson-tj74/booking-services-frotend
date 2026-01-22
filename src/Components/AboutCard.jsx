import pic9 from "../assets/pic9.jpg";

function AboutCard() {
  return (
    <div className="min-h-screen bg-gray-50 px-8 py-16">

      <h1 className="text-4xl md:text-5xl font-bold text-center text-blue-800 mb-12">
        About Us
      </h1>


      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        <div>
          <img
            src={pic9}
            alt="About Us"
            className="w-full rounded-lg shadow-lg"
          />
        </div>


        <div>
          <h2 className="text-2xl font-semibold mb-4 text-blue-800">
            Who We Are
          </h2>
          <p className="text-gray-700 mb-4">
            We are a team that loves technology. We provide services
            like building websites, mobile apps, UI/UX design, and digital marketing. Our goal is to help businesses grow and succeed online.
          </p>
          <p className="text-gray-700 mb-4">

            With many years of experience, we focus on our customers. We work carefully and creatively on every project. Your satisfaction is our main goal.
          </p>
          <p className="text-gray-700">
            Join us to turn your ideas into real projects, use the latest technology, and get real results for your business.
          </p>
        </div>
      </div>


      <div className="max-w-5xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 text-center">
        <div className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-4 text-blue-800">Our Mission</h3>
          <p className="text-gray-700">
            We provide smart, reliable, and affordable IT solutions to help businesses succeed in the digital world.
          </p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-4 text-blue-800">Our Vision</h3>
          <p className="text-gray-700">
            We aim to be a top technology partner known for quality, creativity, and making a difference around the world.
          </p>
        </div>
      </div>
    </div>
  );
}
export default AboutCard;
