import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulated submission
    console.log('Support Message:', form);
    setStatus('Your message has been sent. We’ll get back to you shortly.');
    setForm({ subject: '', message: '' });
  };

  return (
    <div className="p-6 max-w-xl mx-auto bg-white rounded shadow">
      <h2 className="text-2xl font-bold text-orange-600 mb-4">Contact Support</h2>

      {status && <div className="bg-green-100 text-green-800 p-2 mb-4 rounded">{status}</div>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={form.subject}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

        <textarea
          name="message"
          placeholder="Describe your issue or question..."
          value={form.message}
          onChange={handleChange}
          rows={6}
          className="w-full border p-2 rounded"
          required
        />

        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
