import React from "react";
import works1 from "../../assets/works1.mp4";
import works2 from "../../assets/works2.mp4";
import works3 from "../../assets/works3.mp4";
import { motion } from "framer-motion";
import { FaUserFriends, FaKey, FaRegSmile } from "react-icons/fa";

const steps = [
  {
    title: "1. Discover Chefs",
    description: "Browse through our global network of culinary creators.",
    video: works1,
    icon: <FaUserFriends />,
  },
  {
    title: "2. Subscribe for Access",
    description: "Unlock all recipes and chef content with a single subscription.",
    video: works2,
    icon: <FaKey />,
  },
  {
    title: "3. Cook & Enjoy",
    description: "Recreate dishes in your kitchen, straight from world-class chefs.",
    video: works3,
    icon: <FaRegSmile />,
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-gradient-to-b from-orange-50 to-white py-24 px-6 md:px-20">
      <h2 className="text-4xl font-extrabold text-center mb-16 text-gray-800">
        How It Works
      </h2>

      <div className="grid gap-10 md:grid-cols-3">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl shadow-md overflow-hidden border border-orange-200 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 group relative"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            
            <div className="relative w-full h-60 overflow-hidden">
              <video
                className="w-full h-full object-cover group-hover:brightness-100 brightness-50 transition duration-500"
                src={step.video}
                autoPlay
                muted
                loop
                playsInline
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-transparent transition duration-500">
                <span className="text-white text-4xl opacity-80 group-hover:opacity-0 transition duration-500">
                  {step.icon}
                </span>
              </div>
            </div>

            
            <div className="p-6 text-center">
              <h3 className="text-xl font-extrabold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
