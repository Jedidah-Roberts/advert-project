import React from "react";

import backgroundVideo from "../../../assets/background.mp4.mp4";
import { Link } from "react-router";
import { motion } from "framer-motion";


const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden font-sans">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={backgroundVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80 backdrop-blur-sm z-10" />

      <div className="relative z-20 flex flex-col items-center justify-center h-full px-6 text-center text-white space-y-6">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Cook. Share. Inspire.
        </motion.h1>

        <motion.p
          className="text-base md:text-lg lg:text-xl max-w-2xl mx-auto text-gray-200"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Discover curated cookbooks and global chef recipes delivered to your
          table — now with full access via subscription.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <Link to="/user-adverts">
            <button className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 px-8 py-3 rounded-full text-white font-semibold shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
              Get Started
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
