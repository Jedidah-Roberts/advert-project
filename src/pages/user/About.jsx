import { Link } from "react-router"; 
import about from "../../assets/about.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="bg-white py-24 px-6 font-sans">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-14">

       
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <img
            src={about}
            alt="About CodeFeast"
            className="rounded-2xl shadow-2xl transition-transform duration-500 hover:scale-105"
          />
        </motion.div>

        
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h4 className="text-orange-500 uppercase font-bold tracking-widest text-sm mb-2">
            Our Story
          </h4>
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6 leading-tight">
            Connecting the World Through Culinary Culture
          </h2>
          <p className="text-gray-600 text-base mb-4 leading-relaxed">
            At <strong>CodeFeast</strong>, we bridge the culinary world —
            connecting recipe creators, cookbook vendors, and elite chefs with
            passionate home cooks and food explorers.
          </p>
          <p className="text-gray-600 text-base mb-6 leading-relaxed">
            Our mission is to make authentic recipes from every corner of the
            globe accessible, while also giving talented chefs a global stage to
            teach, share, and be booked for exclusive culinary experiences.
          </p>
          <Link to="/about-us/meet-the-team">
            <button className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md transition duration-300">
              Meet the Team
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
