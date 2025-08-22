'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';

export default function ProductAddForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    quantity: '',
    image: '',
    nutritional_value: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.description) newErrors.description = 'Description is required';
    if (!formData.price || isNaN(formData.price)) newErrors.price = 'Valid price is required';
    if (!formData.image) newErrors.image = 'Image URL is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    const nutritionalArray = formData.nutritional_value
      ? formData.nutritional_value.split(',').map((item) => item.trim())
      : [];

    const payload = {
      name: formData.name,
      description: formData.description,
      price: parseFloat(formData.price),
      quantity: formData.quantity,
      image: formData.image,
      nutritional_value: nutritionalArray,
    };


    try {
      // For now, just console.log the payload instead of posting
      console.log('Submitting:', payload);

    
      const res = await fetch(`/api/products`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.message || 'Failed to add product');
      }
    
      // SweetAlert2 success alert
      Swal.fire({
        title: 'Success!',
        text: 'Product added successfully!',
        icon: 'success',
        confirmButtonText: 'OK',
        timerProgressBar: true,
      });
      //  Redirecting to home after successful product post
      router.push('/products')

      setFormData({
        name: '',
        description: '',
        price: '',
        quantity: '',
        image: '',
        nutritional_value: '',
      });
    } catch (err) {
      console.error(err);
      setErrorMessage(err.message || 'Something went wrong');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-lg space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Add New Product</h2>

      {errorMessage && <p className="text-red-500">{errorMessage}</p>}

      {/* Name */}
      <div>
        <label htmlFor="name" className="block font-medium text-gray-700 mb-1">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter product name"
          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
      </div>

      {/* Description */}
      <div>
        <label htmlFor="description" className="block font-medium text-gray-700 mb-1">Description</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows="4"
          placeholder="Enter product description"
          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 ${errors.description ? 'border-red-500' : 'border-gray-300'}`}
        />
        {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
      </div>

      {/* Price */}
      <div>
        <label htmlFor="price" className="block font-medium text-gray-700 mb-1">Price ($)</label>
        <input
          type="number"
          step="0.01"
          min="0"
          id="price"
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="Enter price"
          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 ${errors.price ? 'border-red-500' : 'border-gray-300'}`}
        />
        {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price}</p>}
      </div>

      {/* Quantity */}
      <div>
        <label htmlFor="quantity" className="block font-medium text-gray-700 mb-1">Quantity</label>
        <input
          type="text"
          id="quantity"
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
          placeholder="Enter quantity (e.g., 100g)"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 border-gray-300"
        />
      </div>

      {/* Image */}
      <div>
        <label htmlFor="image" className="block font-medium text-gray-700 mb-1">Image URL</label>
        <input
          type="url"
          id="image"
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="Enter image URL"
          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 ${errors.image ? 'border-red-500' : 'border-gray-300'}`}
        />
      </div>

      {/* Nutritional Value */}
      <div>
        <label htmlFor="nutritional_value" className="block font-medium text-gray-700 mb-1">Nutritional Value (comma-separated)</label>
        <input
          type="text"
          id="nutritional_value"
          name="nutritional_value"
          value={formData.nutritional_value}
          onChange={handleChange}
          placeholder="e.g., Protein: 5g, Carbs: 20g, Fat: 10g"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 border-gray-300"
        />
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-4">
        <Link
          href="/products"
          className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-all"
        >
          Cancel
        </Link>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {isSubmitting ? 'Adding...' : 'Add Product'}
        </button>
      </div>
    </form>
  );
}
