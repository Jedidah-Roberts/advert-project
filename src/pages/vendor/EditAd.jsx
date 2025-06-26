import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";
import { apiEditAd, apiFetchSingleAd } from "../../services/adverts";

export default function EditAd() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [recipe, setRecipe] = useState({});

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    values: {
      recipeName: recipe.recipeName,
      description: recipe.description,
      countryOfOrigin: recipe.countryOfOrigin,
      price: recipe.price,
      courseType: recipe.courseType,
      cookingTechnique: recipe.cookingTechnique,
      specialDiet: recipe.specialDiet,
      ingredient: recipe.ingredient,
      directions: recipe.directions,
    },
  });

  useEffect(() => {
    const fetchAd = async () => {
      try {
        const res = await apiFetchSingleAd(id);
        setRecipe(res.data);
      } catch (err) {
        toast.error("Failed to load ad data");
      } finally {
        setLoading(false);
      }
    };

    fetchAd();
  }, [id]);

  const submitForm = async (data) => {
    try {
      await apiEditAd(id, data);
      toast.success("Ad updated successfully!");
      navigate("/dashboard/vendor-ads");
    } catch (error) {
      toast.error("Failed to update ad");
    }
  };

  if (loading) return <p className="text-center py-8">Loading ad details...</p>;

  return (
    <form
      onSubmit={handleSubmit(submitForm)}
      className="max-w-lg mx-auto p-6 bg-white shadow rounded space-y-4"
    >
      <h2 className="text-2xl font-bold text-center text-orange-600">
        Edit Your Ad
      </h2>
      {/* <div>
        <label className="block mb-1 font-medium">imageUrl</label>
        <input
          {...register("image", { required: "image is required" })}
          className={`w-full p-2 border rounded ${
            errors.image && "border-red-500"
          }`}
        />
        {errors.image && (
          <p className="text-red-500 text-sm">{errors.image.message}</p>
        )}
      </div> */}
      <div>
        <label className="block mb-1 font-medium">Recipe Name</label>
        <input
          {...register("recipeName", { required: "Recipe name is required" })}
          className={`w-full p-2 border rounded ${
            errors.recipeName && "border-red-500"
          }`}
        />
        {errors.recipeName && (
          <p className="text-red-500 text-sm">{errors.recipeName.message}</p>
        )}
      </div>

      <div>
        <label className="block mb-1 font-medium">Description</label>
        <textarea
          {...register("description", { required: "Description is required" })}
          rows={3}
          className="w-full p-2 border rounded"
        />
        {errors.description && (
          <p className="text-red-500 text-sm">{errors.description.message}</p>
        )}
      </div>

      <div>
        <label className="block mb-1 font-medium">Price</label>
        <input
          {...register("price", { required: "Price is required" })}
          className="w-full p-2 border rounded"
        />
        {errors.price && (
          <p className="text-red-500 text-sm">{errors.price.message}</p>
        )}
      </div>

      <div>
        <label className="block mb-1 font-medium">Country of Origin</label>
        <input
          {...register("countryOfOrigin", {
            required: "Country is required",
          })}
          className="w-full p-2 border rounded"
        />
        {errors.countryOfOrigin && (
          <p className="text-red-500 text-sm">
            {errors.countryOfOrigin.message}
          </p>
        )}
      </div>

      <div>
        <label className="block mb-1 font-medium">Course Type</label>
        <select
          {...register("courseType", { required: "Course type is required" })}
          className="w-full p-2 border rounded"
        >
          <option value="">Select one</option>
          <option value="Appetizer">Appetizer</option>
          <option value="Main">Main</option>
          <option value="Dessert">Dessert</option>
          <option value="Snack">Snack</option>
        </select>
        {errors.courseType && (
          <p className="text-red-500 text-sm">{errors.courseType.message}</p>
        )}
      </div>

      <div>
        <label className="block mb-1 font-medium">Cooking Technique</label>
        <input
          {...register("cookingTechnique", {
            required: "Technique is required",
          })}
          className="w-full p-2 border rounded"
        />
        {errors.cookingTechnique && (
          <p className="text-red-500 text-sm">
            {errors.cookingTechnique.message}
          </p>
        )}
      </div>

      <div>
        <label className="block mb-1 font-medium">Special Diet</label>
        <input
          {...register("specialDiet")}
          className="w-full p-2 border rounded"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Ingredients</label>
        <textarea
          {...register("ingredient", {
            required: "Ingredients are required",
          })}
          rows={3}
          className="w-full p-2 border rounded"
        />
        {errors.ingredient && (
          <p className="text-red-500 text-sm">{errors.ingredient.message}</p>
        )}
      </div>

      <div>
        <label className="block mb-1 font-medium">Directions</label>
        <textarea
          {...register("directions", { required: "Directions are required" })}
          rows={4}
          className="w-full p-2 border rounded"
        />
        {errors.directions && (
          <p className="text-red-500 text-sm">{errors.directions.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600"
      >
        {isSubmitting ? "Updating..." : "Update Recipe"}
      </button>
    </form>
  );
}
