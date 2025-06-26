import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { apiDeleteAd, apiFetchVendorAd } from "../../services/adverts";
import LoadingSpinner from "../../components/LoadingSpinner";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const VendorAds = () => {
  const { id } = useParams();
  const [recipes, setRecipes] = useState(null);
  const navigate = useNavigate();

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this recipe? This action cannot be undone."
    );

    if (!confirmDelete) return;

    try {
      await apiDeleteAd(id);
      toast.success("Recipe deleted successfully");
      fetchRecipe();
    } catch (error) {
      toast.error("Failed to delete recipe");
    }
  };

  const fetchRecipe = async () => {
    try {
      const res = await apiFetchVendorAd();
      setRecipes(res.data.advert);
    } catch (err) {
      console.error("Failed to fetch recipe:", err);
    }
  };

  useEffect(() => {
    fetchRecipe();
  }, [id]);

  if (!recipes) return <LoadingSpinner />;

  return (
    <section className="bg-white py-20 px-6 md:px-24 font-sans">
      {recipes.length > 0 ? (
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {recipes.map((recipe, index) => (
            <motion.div
              key={recipe._id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:scale-[1.02] relative group border border-gray-200"
            >
              <img
                src={recipe.imageUrl}
                alt={recipe.recipeName}
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300 rounded-t-3xl"
              />

              <div className="p-6 space-y-3">
                <div className="flex items-start justify-between">
                  <h3 className="text-2xl font-extrabold text-gray-800 group-hover:text-orange-600 transition-colors duration-300">
                    {recipe.recipeName}
                  </h3>

                  <div className="flex items-center gap-3 text-gray-400 hover:text-gray-600 text-lg">
                    <button
                      title="Edit"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/dashboard/ad/${recipe._id}`);
                      }}
                      className="hover:text-orange-500 transition"
                    >
                      ✎
                    </button>
                    <button
                      title="Delete"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDelete(recipe._id);
                      }}
                      className="hover:text-red-500 transition"
                    >
                      🗑️
                    </button>
                  </div>
                </div>

                <p className="text-lg text-orange-600 font-semibold">${recipe.price}</p>
                <p className="text-sm text-gray-700 line-clamp-4">{recipe.description}</p>
                <p className="text-xs text-gray-500 italic pt-3">
                  {recipe.courseType} • {recipe.countryOfOrigin} • {recipe.specialDiet}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No recipes found.</p>
      )}
    </section>
  );
};

export default VendorAds;
