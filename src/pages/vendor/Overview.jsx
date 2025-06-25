import React from 'react';
import AdDetails from "./AdDetails"

const Overview = () => {
  const stats = [
    { label: 'Total Ads Posted', value: 28 },
    { label: 'Profile Views', value: 1243 },
    { label: 'Sales Made', value: 17 },
    { label: 'Pending Bookings', value: 3 },
  ];

  const recentAds = [
    { title: 'Spicy Nigerian Jollof', category: 'West African', views: 56 },
    { title: 'Keto Vegan Cookbook', category: 'Special Diet', views: 102 },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-orange-600">Welcome back, Chef Roberts 👨‍🍳</h1>
        <p className="text-gray-600 mt-1">Here’s what’s happening today.</p>
      </div>
    

      {/* Stats Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded shadow p-4 border-l-4 border-orange-500">
            <h3 className="text-sm text-gray-500">{stat.label}</h3>
            <p className="text-2xl font-bold text-orange-700">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Grid layout: Left (ads), Right (summary + quick links) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="md:col-span-2 space-y-6">
          {/* Recent Ads */}
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold text-orange-600 mb-3">Recent Ads</h2>
            {recentAds.map((ad, i) => (
              <div key={i} className="flex justify-between items-center py-2 border-b">
                <div>
                  <h4 className="font-medium">{ad.title}</h4>
                  <p className="text-sm text-gray-500">{ad.category}</p>
                </div>
                <p className="text-sm text-gray-600">{ad.views} views</p>
              </div>
            ))}
            <p className="text-right text-sm text-orange-500 mt-2 hover:underline cursor-pointer">
              View all ads
            </p>
          </div>

          {/* Notifications */}
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold text-orange-600 mb-3">Reminders</h2>
            <ul className="list-disc ml-6 text-sm text-gray-700 space-y-1">
              <li>Respond to 2 new booking requests</li>
              <li>Update your cookbook pricing</li>
              <li>Review your profile settings</li>
            </ul>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Profile Summary */}
          <div className="bg-white p-4 rounded shadow text-center">
            <img
              src="https://via.placeholder.com/100"
              alt="Vendor"
              className="w-24 h-24 mx-auto rounded-full mb-3"
            />
            <h3 className="font-semibold text-lg">Chef Roberts</h3>
            <p className="text-sm text-gray-500">Nigerian Cuisine Specialist</p>
            <button className="mt-4 bg-orange-500 text-white py-1 px-4 rounded hover:bg-orange-600">
              Edit Profile
            </button>
          </div>

          {/* Quick Post Ad Shortcut */}
          <div className="bg-orange-100 border-l-4 border-orange-500 p-4 rounded shadow">
            <h3 className="font-semibold text-orange-700 mb-2">Quick Action</h3>
            <button className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600">
              + Post a New Ad
            </button>
          </div>
        </div>
      </div>
        <AdDetails/>
    </div>
  );
};

export default Overview;
