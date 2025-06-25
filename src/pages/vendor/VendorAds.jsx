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
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {recipes.map((recipe, index) => (
            <motion.div
              key={recipe._id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition relative group"
            >
              <img
                src={recipe.imageUrl}
                alt={recipe.recipeName}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />

              <div className="p-5 space-y-2">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-bold text-gray-800">
                    {recipe.recipeName}
                  </h3>

                  <div className="flex items-center gap-2 text-gray-400 hover:text-gray-600">
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

                <p className="text-orange-600 font-semibold">${recipe.price}</p>
                <p className="text-sm text-gray-600 line-clamp-3">
                  {recipe.description}
                </p>
                <p className="text-xs text-gray-500 italic pt-2">
                  {recipe.courseType} • {recipe.countryOfOrigin} •{" "}
                  {recipe.specialDiet}
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
