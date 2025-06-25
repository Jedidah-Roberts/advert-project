import React, { useEffect, useState } from 'react';
// import axios from '../api/axiosInstance'; // Uncomment when backend ready

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
        title: 'Keto Vegan Cookbook',
        vendor: 'Chef Amaka',
        price: 18,
        image: 'https://source.unsplash.com/400x300/?vegan,food',
      },
      {
        id: 2,
        title: 'West African Jollof Recipe',
        vendor: 'Chef Jedidah',
        price: 12,
        image: 'https://source.unsplash.com/400x300/?jollof,african',
      },
    ]);
  }, []);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">All Vendor Ads</h2>

      {ads.length === 0 ? (
        <p className="text-gray-600">No ads found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ads.map((ad) => (
            <div key={ad.id} className="bg-white rounded shadow overflow-hidden">
              <img
                src={ad.image}
                alt={ad.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{ad.title}</h3>
                <p className="text-sm text-gray-500 mb-1">Vendor: {ad.vendor}</p>
                <p className="text-sm text-gray-700 mb-2">Price: ${ad.price}</p>

                {/* Future: Add admin actions here (ban, remove, etc.) */}
                <button
                  className="text-red-500 text-sm hover:underline"
                  onClick={() => alert('Coming soon: delete ad')}
                >
                  Remove Ad
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdsList;
