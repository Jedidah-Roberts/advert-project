import { useEffect, useState } from "react";
import { apiFetchAdverts, apiFetchSingleAd } from "../../services/adverts";
import { useNavigate } from "react-router";

const AllAdverts = () => {
  const navigate = useNavigate();

  // useEffect(() => {
  //   //retrieve from local storage
  //   const token = localStorage.getItem("accessToken");

  //   //if there's no token,take them to login
  //   if (!token) {
  //     navigate("/login");
  //   }
  // }, []);
  const [recipes, setRecipes] = useState([]);
  const [filteredCategory, setFilteredCategory] = useState("All");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const res = await apiFetchAdverts();
        console.log("Fetched adverts:", res.data);

        setRecipes(res.data);

        // Extract tags from 4 fields
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
    <section className="bg-white py-20 px-6 md:px-20">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">
        Explore Recipes
      </h2>
      <p className="text-center text-gray-600 mb-10 max-w-xl mx-auto">
        Browse chef-submitted recipes by category, course, or diet.
      </p>

      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilteredCategory(cat)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition ${
              filteredCategory === cat
                ? "bg-orange-500 text-white"
                : "bg-orange-100 text-orange-700 hover:bg-orange-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {filteredRecipes.length > 0 ? (
        // <Link to={`/user-adverts/${id}`}>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRecipes.map((recipe) => (
            <div
              key={recipe._id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
              onClick={() => navigate(`/adverts/${recipe._id}`)}
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

export default AllAdverts;