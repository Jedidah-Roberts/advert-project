import React, { useState } from "react";
import meet from "../../assets/meet.jpg";

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "Chef Roberts",
    email: "chef.roberts@example.com",
    bio: "West African cuisine specialist.",
    image: meet,
  });

  const [imagePreview, setImagePreview] = useState("");
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "image" && files.length > 0) {
      const file = files[0];
      setProfile({ ...profile, image: file });
      setImagePreview(URL.createObjectURL(file));
    } else {
      setProfile({ ...profile, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated profile:", profile);
    setStatus("Profile updated successfully!");
  };

  return (
    <div className="p-6 max-w-xl mx-auto bg-white rounded shadow">
      <h2 className="text-2xl font-bold text-orange-600 mb-4">Your Profile</h2>

      {status && (
        <div className="bg-green-100 text-green-800 p-2 mb-4 rounded">
          {status}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="text-center">
          <img
            src={imagePreview || "https://via.placeholder.com/100"}
            alt="Profile"
            className="w-24 h-24 mx-auto rounded-full mb-2 object-cover"
          />
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            className="block mx-auto text-sm text-gray-600"
          />
        </div>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={profile.name}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={profile.email}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

        <textarea
          name="bio"
          placeholder="Short bio"
          value={profile.bio}
          onChange={handleChange}
          rows={4}
          className="w-full border p-2 rounded"
        />

        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600"
        >
          Save Profile
        </button>
      </form>
    </div>
  );
};

export default Profile;
