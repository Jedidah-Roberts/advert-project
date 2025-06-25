import { useForm } from "react-hook-form";
import { apiCreateAd } from "../../services/adverts";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

export default function AddRecipeForm({ onSubmit }) {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const submitForm = async (data) => {
    console.log(data);

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
      const res = await apiCreateAd(payload);
      toast.success("Recipe has been added successfully!");
      navigate("/dashboard/vendor-ads")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(submitForm)}
      className="max-w-lg mx-auto p-6 bg-white shadow rounded space-y-4"
    >
      <h2 className="text-2xl font-bold text-center">Add a Recipe</h2>
      <div>
        <label className="block mb-1 font-medium">Image</label>
        <input
          type="file"
          {...register("image", { required: "image upload is required" })}
          className={`w-full p-2 border rounded ${
            errors.image && "border-red-500"
          }`}
          placeholder="image upload is required"
        />
        {errors.image && (
          <p className="text-red-500 text-sm">{errors.image.message}</p>
        )}
      </div>

      <div>
        <label className="block mb-1 font-medium">Recipe Name</label>
        <input
          {...register("recipeName", { required: "Recipe name is required" })}
          className={`w-full p-2 border rounded ${
            errors.recipeName && "border-red-500"
          }`}
          placeholder="E.g., Spicy Jollof Rice"
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
          placeholder="Tell us about the dish"
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
          placeholder="e.g., $10"
        />
        {errors.price && (
          <p className="text-red-500 text-sm">{errors.price.message}</p>
        )}
      </div>

      <div>
        <label className="block mb-1 font-medium">Country of Origin</label>
        <input
          {...register("countryOfOrigin", { required: "Country is required" })}
          className="w-full p-2 border rounded"
          placeholder="e.g., Nigeria"
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
          placeholder="e.g., Grilling"
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
          placeholder="e.g., Vegetarian, Gluten-free"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Ingredients</label>
        <textarea
          {...register("ingredient", { required: "Ingredients are required" })}
          rows={3}
          className="w-full p-2 border rounded"
          placeholder="List ingredients separated by commas"
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
          placeholder="Describe the cooking steps..."
        />
        {errors.directions && (
          <p className="text-red-500 text-sm">{errors.directions.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
      >
        {isSubmitting ? "Submitting..." : "Add Recipe"}
      </button>
    </form>
  );
}

// import React, { useState } from 'react';

// const CreateAd = () => {
//   const [formData, setFormData] = useState({
//     title: '',
//     description: '',
//     category: '',
//     price: '',
//     location: '',
//     images: [],
//   });

//   const [status, setStatus] = useState('');

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;

//     if (name === 'images') {
//       setFormData({ ...formData, images: Array.from(files) });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Normally you'd post to backend here
//     console.log('Submitting:', formData);

//     setStatus('Ad posted successfully!');
//     setFormData({
//       title: '',
//       description: '',
//       category: '',
//       price: '',
//       location: '',
//       images: [],
//     });

//     // Reset file input manually if needed
//     e.target.reset();
//   };

//   const categoryOptions = [
//     'Course - Appetizer',
//     'Course - Main',
//     'Course - Dessert',
//     'Cuisine - Nigerian',
//     'Cuisine - Italian',
//     'Technique - Grilling',
//     'Special Diet - Vegan',
//   ];

//   return (
//     <div className="p-6 max-w-2xl mx-auto bg-white rounded shadow">
//       <h2 className="text-2xl font-bold text-orange-600 mb-4">Post a New Recipe or Cookbook</h2>

//       {status && <div className="bg-green-100 text-green-800 p-2 mb-4 rounded">{status}</div>}

//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input
//           type="text"
//           name="title"
//           placeholder="Title"
//           value={formData.title}
//           onChange={handleChange}
//           required
//           className="w-full border p-2 rounded"
//         />

//         <textarea
//           name="description"
//           placeholder="Description"
//           value={formData.description}
//           onChange={handleChange}
//           rows={5}
//           required
//           className="w-full border p-2 rounded"
//         />

//         <select
//           name="category"
//           value={formData.category}
//           onChange={handleChange}
//           required
//           className="w-full border p-2 rounded"
//         >
//           <option value="">-- Select Category --</option>
//           {categoryOptions.map((opt, idx) => (
//             <option key={idx} value={opt}>
//               {opt}
//             </option>
//           ))}
//         </select>

//         <input
//           type="number"
//           name="price"
//           placeholder="Price (e.g., 15)"
//           value={formData.price}
//           onChange={handleChange}
//           required
//           className="w-full border p-2 rounded"
//         />

//         <input
//           type="text"
//           name="location"
//           placeholder="Location (e.g., Lagos, Nigeria)"
//           value={formData.location}
//           onChange={handleChange}
//           required
//           className="w-full border p-2 rounded"
//         />

//         <input
//           type="file"
//           name="images"
//           accept="image/*"
//           multiple
//           onChange={handleChange}
//           className="w-full border p-2 rounded"
//         />

//         <button
//           type="submit"
//           className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600"
//         >
//           Submit Ad
//         </button>
//       </form>
//     </div>
//   );
// };

// export default CreateAd;
