import React, { useEffect, useState } from 'react';
// import axios from '../api/axiosInstance'; // Use when ready to connect to backend

const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // axios.get('/admin/users')
    //   .then((res) => setUsers(res.data))
    //   .catch((err) => console.error('Failed to fetch users', err));

    // Temporary mock data
    setUsers([
      { id: 1, name: 'Jedidah Roberts', email: 'jedidah@recipes.com', role: 'vendor' },
      { id: 2, name: 'Amaka Bello', email: 'amaka@cookmail.com', role: 'user' },
      { id: 3, name: 'Chef Lin', email: 'lin@thaihot.com', role: 'vendor' },
    ]);
  }, []);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">All Registered Users</h2>

      <div className="overflow-x-auto bg-white rounded shadow">
        <table className="min-w-full table-auto text-sm">
          <thead className="bg-blue-100 text-left text-gray-700">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id} className="border-b hover:bg-blue-50">
                <td className="p-3">{u.name}</td>
                <td className="p-3">{u.email}</td>
                <td className="p-3 capitalize">{u.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersList;
