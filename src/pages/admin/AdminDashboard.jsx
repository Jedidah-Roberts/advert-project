import React, { useEffect, useState } from 'react';

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
    { label: 'Total Users', value: stats.users },
    { label: 'Vendors', value: stats.vendors },
    { label: 'Total Ads', value: stats.ads },
    { label: 'Reports', value: stats.reports },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-blue-600 mb-6">Admin Dashboard</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-6">
        {cards.map((card, i) => (
          <div
            key={i}
            className="bg-white p-4 rounded-lg shadow border-l-4 border-blue-500"
          >
            <h3 className="text-sm text-gray-500">{card.label}</h3>
            <p className="text-2xl font-bold text-blue-700">{card.value}</p>
          </div>
        ))}
      </div>

      {/* Placeholder for chart/analytics */}
      <div className="bg-white rounded shadow p-6 text-center text-gray-400">
        📊 Analytics & Graphs will appear here
      </div>
    </div>
  );
};

export default AdminDashboard;
