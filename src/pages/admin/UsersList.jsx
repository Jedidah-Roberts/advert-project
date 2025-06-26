import React, { useEffect, useState } from "react";
// import axios from '../api/axiosInstance'; // Uncomment when backend is ready

const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // axios.get('/admin/users')
    //   .then((res) => setUsers(res.data))
    //   .catch((err) => console.error('Failed to fetch users', err));

    setUsers([
      { id: 1, name: "Jedidah Roberts", email: "jedidah@recipes.com", role: "vendor" },
      { id: 2, name: "Amaka Bello", email: "amaka@cookmail.com", role: "user" },
      { id: 3, name: "Chef Lin", email: "lin@thaihot.com", role: "vendor" },
    ]);
  }, []);

  return (
    <div className="p-6 bg-gray-50 min-h-screen font-sans">
      <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500 mb-8">
        All Registered Users
      </h2>

      <div className="overflow-x-auto bg-white rounded-2xl shadow-lg">
        <table className="min-w-full text-sm text-gray-700">
          <thead className="bg-orange-100 text-left uppercase text-xs tracking-wider">
            <tr>
              <th className="p-4 font-semibold">Name</th>
              <th className="p-4 font-semibold">Email</th>
              <th className="p-4 font-semibold">Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u, index) => (
              <tr
                key={u.id}
                className={`border-b transition-all duration-200 ${
                  index % 2 === 0 ? "bg-white" : "bg-orange-50"
                } hover:bg-orange-100/60`}
              >
                <td className="p-4">{u.name}</td>
                <td className="p-4">{u.email}</td>
                <td className="p-4 capitalize">{u.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersList;
