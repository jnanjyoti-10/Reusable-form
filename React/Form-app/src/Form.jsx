import React, { useState } from 'react';

function Form() {
  
    const [formData, setFormData] = useState({ name: '', email: '' });
    const [message, setMessage] = useState('');
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prev => ({ ...prev, [name]: value }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const trimmedName = formData.name.trim();
      const trimmedEmail = formData.email.trim();
  
      if (!trimmedName || !trimmedEmail) {
        setMessage('Please fill in both fields.');
        return;
      }
  
      setMessage(`Hello, ${trimmedName}! We’ll contact you at ${trimmedEmail}.`);
    };

  return (
  
    <div className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow-md">
    <h2 className="text-2xl font-semibold mb-4 text-gray-800">Contact Form</h2>
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
      >
        Submit
      </button>
    </form>
    {message && <p className="mt-4 text-green-600 font-medium">{message}</p>}
  </div>
  )
}

export default Form;
