import { useEffect, useState } from "react";
import { apiFetchAdverts } from "../../services/adverts";
import { useNavigate } from "react-router";

const AllAdverts = () => {
  const navigate = useNavigate();

  const [recipes, setRecipes] = useState([]);
  const [filteredCategory, setFilteredCategory] = useState("All");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      navigate("/login");
    }
  }, []);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const res = await apiFetchAdverts();
        console.log("Fetched adverts:", res.data);

        setRecipes(res.data);

        const tagSet = new Set();
        res.data.forEach((item) => {
          tagSet.add(item.countryOfOrigin);
          tagSet.add(item.courseType);
          tagSet.add(item.cookingTechnique);
          tagSet.add(item.specialDiet);
        });

        const cleanedTags = Array.from(tagSet).filter(Boolean);
        setCategories(["All", ...cleanedTags]);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    fetchRecipes();
  }, []);

  const filteredRecipes =
    filteredCategory === "All"
      ? recipes
      : recipes.filter(
          (r) =>
            r.countryOfOrigin === filteredCategory ||
            r.courseType === filteredCategory ||
            r.cookingTechnique === filteredCategory ||
            r.specialDiet === filteredCategory
        );

  return (
    <section className="bg-white py-20 px-6 md:px-20 font-sans">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-4">
          Explore Recipes
        </h2>
        <p className="text-center text-gray-600 mb-10 max-w-xl mx-auto">
          Browse chef-submitted recipes by category, course, or diet.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilteredCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                filteredCategory === cat
                  ? "bg-gradient-to-r from-orange-500 to-pink-500 text-white"
                  : "bg-orange-100 text-orange-700 hover:bg-orange-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {filteredRecipes.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredRecipes.map((recipe) => (
              <div
                key={recipe._id}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition cursor-pointer relative"
                onClick={() => navigate(`/adverts/${recipe._id}`)}
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
                  </div>

                  <p className="text-orange-600 font-semibold">
                    ${recipe.price}
                  </p>

                  <p className="text-sm text-gray-600 line-clamp-3">
                    {recipe.description}
                  </p>

                  <p className="text-xs text-gray-500 italic pt-2">
                    {recipe.courseType} • {recipe.countryOfOrigin} •{" "}
                    {recipe.specialDiet}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 mt-10">No recipes found.</p>
        )}
      </div>
    </section>
  );
};

export default AllAdverts;
