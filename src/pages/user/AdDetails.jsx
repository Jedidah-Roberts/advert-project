import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { Calendar, ChefHat, CookingPot } from "lucide-react";
import LoadingSpinner from "../../components/LoadingSpinner";
import { apiFetchSingleAd } from "../../services/adverts";
import { motion } from "framer-motion";

const AdDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const res = await apiFetchSingleAd(id);
        setRecipe(res.data);
      } catch (err) {
        console.error("Failed to fetch recipe:", err);
      }
    };

    fetchRecipe();
  }, [id]);

  if (!recipe) return <LoadingSpinner />;

  return (
    <section className="bg-gradient-to-b from-orange-50 to-white py-24 px-6 md:px-24 font-sans">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          className="rounded-xl overflow-hidden shadow-2xl relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <img
            src={recipe.imageUrl}
            alt={recipe.recipeName}
            className="w-full h-[500px] object-cover"
          />
          <span className="absolute top-4 left-4 bg-white/90 text-orange-600 px-4 py-1 rounded-full text-sm font-medium shadow">
            {recipe.countryOfOrigin}
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 14,
            delay: 0.2,
          }}
        >
          <h2 className="text-4xl font-extrabold text-gray-900 mb-2">
            {recipe.recipeName}
          </h2>
          <p className="text-2xl text-orange-600 font-bold mb-2">
            ${recipe.price}
          </p>

          <motion.div
            className="flex items-center gap-1 mb-5"
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.4,
                },
              },
            }}
          >
            {[...Array(5)].map((_, i) => (
              <motion.span
                key={i}
                className={`text-yellow-400 text-xl ${
                  i < 4 ? "opacity-100" : "opacity-30"
                }`}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  show: { opacity: 1, y: 0 },
                }}
              >
                ★
              </motion.span>
            ))}
            <motion.span
              className="text-sm text-gray-500 ml-2"
              variants={{
                hidden: { opacity: 0, x: -10 },
                show: { opacity: 1, x: 0 },
              }}
            >
              (4.0)
            </motion.span>
          </motion.div>

          <p className="text-base text-gray-700 mb-6 leading-relaxed">
            {recipe.description}
          </p>

          <motion.div
            className="flex flex-wrap gap-2 mb-8"
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: {
                transition: { staggerChildren: 0.1, delayChildren: 0.6 },
              },
            }}
          >
            {["courseType", "specialDiet", "cookingTechnique"].map(
              (key) =>
                recipe[key] && (
                  <motion.span
                    key={key}
                    className="bg-orange-100 text-orange-700 text-xs font-medium px-3 py-1 rounded-full capitalize"
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      show: { opacity: 1, y: 0 },
                    }}
                  >
                    {recipe[key]}
                  </motion.span>
                )
            )}
          </motion.div>
          <Link to="/book-chef">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-to-r from-purple-600 to-pink-500 hover:brightness-110 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-lg transition-all duration-300 flex items-center gap-2"
            >
              <Calendar size={20} />
              Book This Chef
            </motion.button>
          </Link>

          <div className="mt-10 border-t pt-6">
            <h4 className="text-lg font-semibold mb-2 flex items-center gap-2 text-gray-800">
              <ChefHat size={20} className="text-purple-500" />
              About This Chef
            </h4>
            <p className="text-sm text-gray-600">
              This section is meant to display chef bio, contact, ratings or
              badges. Designed for future integration if possible
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AdDetails;
