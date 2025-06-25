import Hero from "./components/Hero";
import About from "./About";
import Offers from "./Offers";
import HowItWorks from "./HowItWorks";
import MeetTheTeam from "./MeetTheTeam";
import { Link } from "react-router"; 

const Landing = () => {
  return (
    <>
      <Hero />
      <About />
      <MeetTheTeam />
      <HowItWorks />
      <Offers />

      
      <section className="bg-gradient-to-br from-orange-50 to-white py-20 px-4 text-center font-sans">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
          Ready to Cook the World?
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
          Sign up today and start your culinary adventure with top chefs and global flavors.
        </p>

        <Link to="/sign-up">
          <button className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition-transform duration-300 hover:scale-105">
            Get Started
          </button>
        </Link>
      </section>
    </>
  );
};

export default Landing;
