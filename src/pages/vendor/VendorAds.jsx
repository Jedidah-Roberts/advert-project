import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import LoadingSpinner from "../../components/LoadingSpinner";
import { apiDeleteAd, apiFetchVendorAd } from "../../services/adverts";
import { toast } from "react-toastify";

const VendorAds = () => {
  const { id } = useParams();
  const [recipes, setRecipes] = useState(null);
  const navigate = useNavigate();

  const handleDelete = async (id) => {
    

    try {
      const res = await apiDeleteAd(id);
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
    <section className="bg-white py-20 px-6 md:px-24">
      {recipes.length > 0 ? (
        // <Link to={`/user-adverts/${id}`}>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.map((recipe) => (
            <div
              key={recipe._id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
            >
              <img
                src={recipe.imageUrl}
                alt={recipe.recipeName}
                className="w-full h-64 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800 mb-1">
                  {recipe.recipeName}
                </h3>
                <p className="text-orange-600 font-bold mb-1">
                  ${recipe.price}
                </p>
                <p className="text-sm text-gray-600 mb-2 line-clamp-3">
                  {recipe.description}
                </p>
                <p className="text-xs text-gray-500 italic">
                  {recipe.courseType} • {recipe.countryOfOrigin} •{" "}
                  {recipe.specialDiet}
                </p>
                <button
                  className="mt-4 w-full py-2 bg-black text-white rounded-md hover:bg-red-600"
                  onClick={() => {
                    navigate(`/dashboard/ad/${recipe._id}`);
                  }}
                >
                  Edit
                </button>
                <br />
                <button
                  className="mt-4 w-full py-2 bg-black text-white rounded-md hover:bg-red-600"
                  onClick={() => {
                    handleDelete(recipe._id);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        // </Link>
        <p className="text-center text-gray-500">No recipes found.</p>
      )}
    </section>
  );
};

export default VendorAds;
