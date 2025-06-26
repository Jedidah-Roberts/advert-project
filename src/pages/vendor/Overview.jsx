import React from "react";
import { motion } from "framer-motion";
import AdDetails from "./AdDetails";
import { Link } from "react-router";

const Overview = () => {
  const stats = [
    { label: "Total Ads Posted", value: 28 },
    { label: "Profile Views", value: 1243 },
    { label: "Sales Made", value: 17 },
    { label: "Pending Bookings", value: 3 },
  ];

  const recentAds = [
    { title: "Spicy Nigerian Jollof", category: "West African", views: 56 },
    { title: "Keto Vegan Cookbook", category: "Special Diet", views: 102 },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen font-sans">
      {/* Header */}
      <motion.div
        className="mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">
          Welcome back, Chef Roberts 👨‍🍳
        </h1>
        <p className="text-gray-600 mt-1">Here’s what’s happening today.</p>
      </motion.div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl shadow p-4 border-l-4 border-orange-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
          >
            <h3 className="text-sm text-gray-500">{stat.label}</h3>
            <p className="text-2xl font-bold text-orange-700">{stat.value}</p>
          </motion.div>
        ))}
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
       
        <div className="md:col-span-2 space-y-6">
        
          <motion.div
            className="bg-white p-5 rounded-2xl shadow"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 text-transparent bg-clip-text mb-4">
              Recent Ads
            </h2>
            {recentAds.map((ad, i) => (
              <div
                key={i}
                className="flex justify-between items-center py-2 border-b last:border-none"
              >
                <div>
                  <h4 className="font-medium">{ad.title}</h4>
                  <p className="text-sm text-gray-500">{ad.category}</p>
                </div>
                <p className="text-sm text-gray-600">{ad.views} views</p>
              </div>
            ))}
            <Link to = "/dashboard/vendor-ads">
              <p className="text-right text-sm text-orange-500 mt-3 hover:underline cursor-pointer">
                View all ads
              </p>
            </Link>
          </motion.div>

          
          <motion.div
            className="bg-white p-5 rounded-2xl shadow"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h2 className="text-xl font-bold text-orange-600 mb-3">
              Reminders
            </h2>
            <ul className="list-disc ml-6 text-sm text-gray-700 space-y-1">
              <li>Respond to 2 new booking requests</li>
              <li>Update your cookbook pricing</li>
              <li>Review your profile settings</li>
            </ul>
          </motion.div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Profile Summary */}
          <motion.div
            className="bg-white p-5 rounded-2xl shadow text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <img
              src="https://via.placeholder.com/100"
              alt="Vendor"
              className="w-24 h-24 mx-auto rounded-full mb-3"
            />
            <h3 className="font-semibold text-lg">Chef Roberts</h3>
            <p className="text-sm text-gray-500 mb-4">
              Nigerian Cuisine Specialist
            </p>
            <button className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-2 rounded hover:from-orange-600 hover:to-pink-600 transition-all">
              Edit Profile
            </button>
          </motion.div>

          {/* Quick Action */}
          <motion.div
            className="bg-gradient-to-br from-orange-100 to-white border-l-4 border-orange-500 p-4 rounded-xl shadow"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <h3 className="font-semibold text-orange-700 mb-3">Quick Action</h3>
            <Link to="/dashboard/create-ad">
              <button className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white py-2 rounded hover:from-orange-600 hover:to-pink-600 transition-all">
                + Post a New Ad
              </button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Extra details */}
      <AdDetails />
    </div>
  );
};

export default Overview;
