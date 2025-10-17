'use client';

import { useFormData } from '@/hooks/useFormData';
import { useState } from 'react';
import { toast } from 'sonner'; // Make sure 'sonner' is installed

export default function Setting() {
  const { formData, handleChange, resetForm } = useFormData();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Simple validation
    const { firstName, lastName, email, phoneNumber, town, state, experience } = formData;
    if (!firstName || !lastName || !email || !phoneNumber || !town || !state || !experience) {
      toast.error('Please fill all fields!');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      console.log('API Response:', result);

      if (res.ok) {
        toast.success('Form submitted successfully!');
        resetForm();
      } else {
        toast.error('Failed to submit form.');
      }
    } catch (error) {
      console.error(error);
      toast.error('Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 px-9">
      <div className="flex space-x-4">
        <div className="flex-1">
          <label htmlFor="firstName" className="text-sm font-medium text-blue-700">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="mt-2 block w-full border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 bg-gray-100"
          />
        </div>

        <div className="flex-1">
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="mt-2 block w-full border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 bg-gray-100"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="mt-2 block w-full border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 bg-gray-100"
        />
      </div>

      <div>
        <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
          Phone Number
        </label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          className="mt-2 block w-full border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 bg-gray-100"
        />
      </div>

      <div className="flex space-x-4">
        <div className="flex-1">
          <label htmlFor="town" className="block text-sm font-medium text-gray-700">
            Town
          </label>
          <input
            type="text"
            id="town"
            name="town"
            value={formData.town}
            onChange={handleChange}
            className="mt-2 block w-full border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 bg-gray-100"
          />
        </div>

        <div className="flex-1">
          <label htmlFor="state" className="block text-sm font-medium text-gray-700">
            State
          </label>
          <input
            type="text"
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            className="mt-2 block w-full border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 bg-gray-100"
          />
        </div>
      </div>

      <div>
        <label htmlFor="experience" className="block text-sm font-medium text-gray-700">
          Experience
        </label>
        <textarea
          id="experience"
          name="experience"
          value={formData.experience}
          onChange={handleChange}
          className="mt-2 block w-full border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 bg-gray-100"
          rows={3}
        />
      </div>

      <div className="flex space-x-2">
        <button
          type="submit"
          disabled={loading}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? 'Submitting...' : 'Submit'}
        </button>
        <button
          type="button"
          onClick={resetForm}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
        >
          Reset
        </button>
      </div>
    </form>
  );
}
