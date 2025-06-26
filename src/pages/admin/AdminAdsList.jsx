import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const AdsList = () => {
  const [ads, setAds] = useState([]);

  useEffect(() => {
    // axios.get('/admin/ads')
    //   .then((res) => setAds(res.data))
    //   .catch((err) => console.error('Failed to fetch ads', err));

    // Mock data for now
    setAds([
      {
        id: 1,
        title: "Keto Vegan Cookbook",
        vendor: "Chef Amaka",
        price: 18,
        image: "https://source.unsplash.com/400x300/?vegan,food",
      },
      {
        id: 2,
        title: "West African Jollof Recipe",
        vendor: "Chef Jedidah",
        price: 12,
        image: "https://source.unsplash.com/400x300/?jollof,african",
      },
    ]);
  }, []);

  const handleRemove = (id) => {
    const confirm = window.confirm("Are you sure you want to remove this ad?");
    if (confirm) {
      // Simulate removal
      setAds((prev) => prev.filter((ad) => ad.id !== id));
      alert("Ad removed successfully (mock behavior)");
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen font-sans">
      <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500 mb-8">
        All Vendor Ads
      </h2>

      {ads.length === 0 ? (
        <p className="text-gray-600">No ads found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ads.map((ad, index) => (
            <motion.div
              key={ad.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white rounded-2xl shadow hover:shadow-lg overflow-hidden transition-all"
            >
              <img
                src={ad.image}
                alt={ad.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-800">{ad.title}</h3>
                <p className="text-sm text-gray-500 mb-1">Vendor: {ad.vendor}</p>
                <p className="text-sm text-gray-700 mb-3 font-medium">
                  Price: ${ad.price}
                </p>

                <button
                  onClick={() => handleRemove(ad.id)}
                  className="text-sm text-red-500 hover:text-red-600 hover:underline transition"
                >
                  Remove Ad
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdsList;
