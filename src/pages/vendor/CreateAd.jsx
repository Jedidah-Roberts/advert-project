import { useForm } from "react-hook-form";
import { apiCreateAd } from "../../services/adverts";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";

export default function AddRecipeForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const submitForm = async (data) => {
    const payload = new FormData();
    payload.append("image", data.image[0]);
    payload.append("recipeName", data.recipeName);
    payload.append("description", data.description);
    payload.append("price", data.price);
    payload.append("countryOfOrigin", data.countryOfOrigin);
    payload.append("courseType", data.courseType);
    payload.append("cookingTechnique", data.cookingTechnique);
    payload.append("specialDiet", data.specialDiet);
    payload.append("ingredient", data.ingredient);
    payload.append("directions", data.directions);

    try {
      await apiCreateAd(payload);
      toast.success("Recipe has been added successfully!");
      navigate("/dashboard/vendor-ads");
    } catch (error) {
      console.log(error);
      toast.error("Failed to submit recipe.");
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit(submitForm)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-3xl mx-auto p-8 bg-white rounded-2xl shadow-2xl space-y-6 font-sans"
    >
      <h2 className="text-3xl font-extrabold text-center bg-gradient-to-r from-orange-500 to-pink-500 text-transparent bg-clip-text mb-2">
        Add a New Recipe
      </h2>
      <p className="text-center text-gray-500 text-sm">
        Share your unique flavors with the world.
      </p>

      <Field label="Image" error={errors.image?.message}>
        <input
          type="file"
          {...register("image", { required: "Image upload is required" })}
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
      </Field>

     
      <Field label="Recipe Name" error={errors.recipeName?.message}>
        <input
          {...register("recipeName", { required: "Recipe name is required" })}
          className="w-full p-2 border border-gray-300 rounded-lg"
          placeholder="E.g., Spicy Jollof Rice"
        />
      </Field>

      
      <Field label="Description" error={errors.description?.message}>
        <textarea
          {...register("description", { required: "Description is required" })}
          rows={3}
          className="w-full p-2 border border-gray-300 rounded-lg"
          placeholder="Tell us about the dish"
        />
      </Field>

     
      <Field label="Price" error={errors.price?.message}>
        <input
          {...register("price", { required: "Price is required" })}
          className="w-full p-2 border border-gray-300 rounded-lg"
          placeholder="e.g., $10"
        />
      </Field>

     
      <Field label="Country of Origin" error={errors.countryOfOrigin?.message}>
        <input
          {...register("countryOfOrigin", { required: "Country is required" })}
          className="w-full p-2 border border-gray-300 rounded-lg"
          placeholder="e.g., Nigeria"
        />
      </Field>

      
      <Field label="Course Type" error={errors.courseType?.message}>
        <select
          {...register("courseType", { required: "Course type is required" })}
          className="w-full p-2 border border-gray-300 rounded-lg"
        >
          <option value="">Select one</option>
          <option value="Appetizer">Appetizer</option>
          <option value="Main">Main</option>
          <option value="Dessert">Dessert</option>
          <option value="Snack">Snack</option>
        </select>
      </Field>

      <Field label="Cooking Technique" error={errors.cookingTechnique?.message}>
        <input
          {...register("cookingTechnique", {
            required: "Technique is required",
          })}
          className="w-full p-2 border border-gray-300 rounded-lg"
          placeholder="e.g., Grilling"
        />
      </Field>

      <Field label="Special Diet">
        <input
          {...register("specialDiet")}
          className="w-full p-2 border border-gray-300 rounded-lg"
          placeholder="e.g., Vegan, Gluten-Free"
        />
      </Field>

      
      <Field label="Ingredients" error={errors.ingredient?.message}>
        <textarea
          {...register("ingredient", { required: "Ingredients are required" })}
          rows={3}
          className="w-full p-2 border border-gray-300 rounded-lg"
          placeholder="List ingredients separated by commas"
        />
      </Field>

      
      <Field label="Directions" error={errors.directions?.message}>
        <textarea
          {...register("directions", { required: "Directions are required" })}
          rows={4}
          className="w-full p-2 border border-gray-300 rounded-lg"
          placeholder="Step-by-step cooking instructions"
        />
      </Field>

   
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3 rounded-lg text-white font-bold bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 transition-all"
      >
        {isSubmitting ? "Submitting..." : "Add Recipe"}
      </button>
    </motion.form>
  );
}

// Reusable field wrapper
function Field({ label, error, children }) {
  return (
    <div>
      <label className="block mb-1 font-medium text-gray-700">{label}</label>
      {children}
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}
