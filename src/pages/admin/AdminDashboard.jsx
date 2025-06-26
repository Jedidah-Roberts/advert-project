import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    users: 0,
    vendors: 0,
    ads: 0,
    reports: 0,
  });

  useEffect(() => {
    setStats({
      users: 204,
      vendors: 62,
      ads: 138,
      reports: 4,
    });
  }, []);

  const cards = [
    { label: "Total Users", value: stats.users },
    { label: "Vendors", value: stats.vendors },
    { label: "Total Ads", value: stats.ads },
    { label: "Reports", value: stats.reports },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen font-sans">
      <motion.h2
        className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500 mb-8"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Admin Dashboard
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            className="bg-white p-5 rounded-xl shadow border-l-4 border-orange-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
          >
            <h3 className="text-sm text-gray-500">{card.label}</h3>
            <p className="text-2xl font-bold text-orange-700">{card.value}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="bg-white rounded-2xl shadow p-10 text-center text-gray-400"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        📊 Analytics & Graphs will appear here
      </motion.div>
    </div>
  );
};

export default AdminDashboard;
