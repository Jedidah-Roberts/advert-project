import React, { useState } from 'react';

const Settings = () => {
  const [settings, setSettings] = useState({
    publicProfile: true,
    emailNotifications: true,
    language: 'English',
  });

  const [status, setStatus] = useState('');

  const handleToggle = (key) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleChange = (e) => {
    setSettings({ ...settings, language: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate saving
    console.log('Saved Settings:', settings);
    setStatus('Settings updated successfully!');
  };

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white rounded shadow">
      <h2 className="text-2xl font-bold text-orange-600 mb-4">Vendor Settings</h2>

      {status && <div className="bg-green-100 text-green-800 p-2 mb-4 rounded">{status}</div>}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Toggle: Public Profile */}
        <div className="flex items-center justify-between">
          <label className="text-gray-700 font-medium">Public Profile</label>
          <input
            type="checkbox"
            checked={settings.publicProfile}
            onChange={() => handleToggle('publicProfile')}
            className="w-5 h-5 text-orange-500 rounded"
          />
        </div>

        {/* Toggle: Email Notifications */}
        <div className="flex items-center justify-between">
          <label className="text-gray-700 font-medium">Email Notifications</label>
          <input
            type="checkbox"
            checked={settings.emailNotifications}
            onChange={() => handleToggle('emailNotifications')}
            className="w-5 h-5 text-orange-500 rounded"
          />
        </div>

        {/* Language Dropdown */}
        <div className="flex flex-col">
          <label className="text-gray-700 font-medium mb-1">Language Preference</label>
          <select
            value={settings.language}
            onChange={handleChange}
            className="border p-2 rounded"
          >
            <option>English</option>
            <option>French</option>
            <option>Spanish</option>
            <option>Arabic</option>
          </select>
        </div>

        {/* Save Button */}
        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600"
        >
          Save Settings
        </button>
      </form>
    </div>
  );
};

export default Settings;
