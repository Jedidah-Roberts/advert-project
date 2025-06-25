import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { apiFetchSingleAd } from "../../services/adverts";
import LoadingSpinner from "../../components/LoadingSpinner";

const BookChef = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    notes: "",
  });

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const res = await apiFetchSingleAd(id);
        setRecipe(res.data);
      } catch (err) {
        console.error("Failed to load recipe", err);
      }
    };
    fetchRecipe();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      recipeId: id,
      recipeName: recipe?.recipeName,
      chef: recipe?.postedBy,
      userName: form.name,
      userEmail: form.email,
      bookingDate: form.date,
      bookingTime: form.time,
      message: form.notes,
    };

    console.log("Booking Submitted:", payload);
    alert("Booking submitted (mocked)!");
    setForm({ name: "", email: "", date: "", time: "", notes: "" });
  };

  if (!recipe) return <LoadingSpinner />;

  return (
    <section className="bg-white py-20 px-6 md:px-24">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        Book {recipe.recipeName}
      </h2>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left: Booking Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-orange-50 p-6 rounded-xl shadow-md space-y-6"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              placeholder="you@example.com"
            />
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Booking Date
              </label>
              <input
                type="date"
                name="date"
                required
                value={form.date}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Time
              </label>
              <input
                type="time"
                name="time"
                required
                value={form.time}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Notes (Optional)
            </label>
            <textarea
              name="notes"
              value={form.notes}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              placeholder="Anything the chef should know?"
              rows="4"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition"
          >
            Confirm Booking
          </button>
        </form>

        {/* Right: Recipe Preview */}
        <div className="text-center">
          <img
            src={recipe.imageUrl}
            alt={recipe.recipeName}
            className="w-full max-w-md mx-auto rounded-xl shadow-md mb-6"
          />
          <h3 className="text-2xl font-bold text-gray-800">{recipe.recipeName}</h3>
          <p className="text-orange-600 text-lg font-semibold mb-2">
            ${recipe.price}
          </p>
          <p className="text-sm text-gray-600 mb-4 px-4">
            {recipe.description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default BookChef;
