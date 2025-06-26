import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import { Calendar, ChefHat, CookingPot } from "lucide-react";
import LoadingSpinner from "../../components/LoadingSpinner";
import { apiFetchSingleAd } from "../../services/adverts";
import { motion } from "framer-motion";

const AdDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      navigate("/login", { state: { redirectTo: `/adverts/${id}` } });
    }
  }, [id, navigate]);

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
    <section className="bg-gradient-to-br from-orange-50 to-white py-24 px-6 md:px-24 font-sans">
      {/* Back Button */}
      <Link
        to="/user-adverts"
        className="mb-10 inline-flex items-center gap-2 text-orange-600 hover:text-orange-800 hover:underline font-medium transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Back to All Recipes
      </Link>

      <motion.div
        className="grid lg:grid-cols-2 gap-12 bg-white rounded-3xl shadow-2xl overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Image Section */}
        <div className="h-[500px] w-full relative overflow-hidden">
          <img
            src={recipe.imageUrl}
            alt={recipe.recipeName}
            className="w-full h-full object-cover"
          />
          <span className="absolute top-5 left-5 bg-white/90 text-orange-600 px-4 py-1 rounded-full text-sm font-semibold shadow">
            {recipe.countryOfOrigin}
          </span>
        </div>

        {/* Content Section */}
        <div className="p-10">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            {recipe.recipeName}
          </h2>
          <p className="text-2xl text-orange-600 font-bold mb-2">
            ${recipe.price}
          </p>

          <div className="flex items-center gap-1 mb-5 text-yellow-400 text-xl">
            {[...Array(5)].map((_, i) => (
              <span key={i} className={i < 4 ? "opacity-100" : "opacity-30"}>
                ★
              </span>
            ))}
            <span className="text-sm text-gray-500 ml-2">(4.0)</span>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            {recipe.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {[
              { key: "courseType", color: "bg-purple-100 text-purple-700" },
              { key: "specialDiet", color: "bg-green-100 text-green-700" },
              { key: "cookingTechnique", color: "bg-blue-100 text-blue-700" },
            ].map(
              ({ key, color }) =>
                recipe[key] && (
                  <span
                    key={key}
                    className={`text-xs font-semibold px-3 py-1 rounded-full ${color}`}
                  >
                    {recipe[key]}
                  </span>
                )
            )}
          </div>

          <div className="flex gap-6">
            <Link to="/book-chef">
              <button className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-6 py-3 rounded-full font-semibold shadow-md transition duration-300 flex items-center gap-2">
                <Calendar size={20} />
                Book This Chef
              </button>
            </Link>

            <Link>
              <button className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-6 py-3 rounded-full font-semibold shadow-md transition duration-300 flex items-center gap-2">
                <Calendar size={20} />
                Get Ingredients
              </button>
            </Link>
          </div>

          {/* About the Chef */}
          <div className="mt-10 border-t pt-6">
            <h4 className="text-lg font-semibold mb-2 flex items-center gap-2 text-gray-800">
              <ChefHat size={20} className="text-purple-500" />
              About This Chef
            </h4>
          </div>

          {recipe.directions && (
            <div className="mt-10 border-t pt-6">
              <h4 className="text-lg font-semibold mb-2 flex items-center gap-2 text-gray-800">
                <CookingPot size={20} className="text-green-600" />
                Cooking Directions
              </h4>
              <p className="text-sm text-gray-700 whitespace-pre-line leading-relaxed">
                {recipe.directions}
              </p>
            </div>
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default AdDetails;
