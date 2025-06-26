import { useEffect, useState } from "react";
import { apiFetchAdverts } from "../../services/adverts";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";

const AllAdverts = () => {
  const navigate = useNavigate();

  const [recipes, setRecipes] = useState([]);
  const [filteredCategory, setFilteredCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const res = await apiFetchAdverts();
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

  const filteredRecipes = recipes.filter((recipe) => {
    const matchesCategory =
      filteredCategory === "All" ||
      recipe.countryOfOrigin === filteredCategory ||
      recipe.courseType === filteredCategory ||
      recipe.cookingTechnique === filteredCategory ||
      recipe.specialDiet === filteredCategory;

    const matchesSearch =
      recipe.recipeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.description.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <section className="bg-gradient-to-b from-orange-50 to-white py-24 px-6 md:px-20">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-3">
        Explore Recipes
      </h2>
      <p className="text-center text-gray-600 mb-12 max-w-xl mx-auto text-lg">
        Browse chef-submitted recipes by category, course, or diet.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
        <input
          type="text"
          placeholder="Search recipes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-5 py-3 w-full sm:w-1/3 border border-gray-300 rounded-xl shadow focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
        />

        <select
          value={filteredCategory}
          onChange={(e) => setFilteredCategory(e.target.value)}
          className="px-5 py-3 w-full sm:w-1/4 border border-gray-300 rounded-xl shadow focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {filteredRecipes.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredRecipes.map((recipe, index) => (
            <motion.div
              key={recipe._id}
              onClick={() =>
                navigate(`/adverts/${recipe._id}`, {
                  state: { redirectTo: `/adverts/${recipe._id}` },
                })
              }
              className="cursor-pointer bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 hover:scale-[1.03] overflow-hidden group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="relative w-full h-64">
                <img
                  src={recipe.imageUrl}
                  alt={recipe.recipeName}
                  className="w-full h-full object-cover group-hover:brightness-90 transition"
                />
                <div className="absolute top-3 left-3 bg-white/90 px-3 py-1 text-xs font-medium text-orange-600 rounded-full shadow">
                  {recipe.countryOfOrigin}
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800 mb-1">
                  {recipe.recipeName}
                </h3>
                <p className="text-orange-600 font-bold mb-2 text-lg">
                  ${recipe.price}
                </p>
                <p className="text-sm text-gray-600 mb-3 line-clamp-3">
                  {recipe.description}
                </p>
                <div className="flex flex-wrap gap-2 text-xs text-white font-medium">
                  <span className="bg-purple-500 px-2 py-1 rounded">
                    {recipe.courseType}
                  </span>
                  <span className="bg-green-500 px-2 py-1 rounded">
                    {recipe.specialDiet}
                  </span>
                  <span className="bg-blue-500 px-2 py-1 rounded">
                    {recipe.cookingTechnique}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 text-lg">
          No matching recipes found.
        </p>
      )}
    </section>
  );
};

export default AllAdverts;
