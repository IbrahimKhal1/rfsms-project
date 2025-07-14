// AddFuelForm.jsx
import React, { useState } from 'react';
import axios from 'axios';

const AddFuelForm = ({ token }) => {
  const [formData, setFormData] = useState({
    type: '',
    price: '',
    quantityLiters: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      const res = await axios.post('http://localhost:5000/api/fuels', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setMessage('✅ Fuel added successfully!');
      setFormData({ type: '', price: '', quantityLiters: '' }); // Reset form
    } catch (err) {
      setMessage('❌ Failed to add fuel');
    }
  };

  return (
    <div className="card p-4 shadow-sm">
      <h3 className="mb-3">➕ Add New Fuel</h3>
      {message && (
        <div className={`alert ${message.includes('✅') ? 'alert-success' : 'alert-danger'}`}>
          {message}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Fuel Type</label>
          <input
            type="text"
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="form-control"
            placeholder="e.g. PMS"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Price (₦)</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="form-control"
            placeholder="e.g. 650"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Quantity (Liters)</label>
          <input
            type="number"
            name="quantityLiters"
            value={formData.quantityLiters}
            onChange={handleChange}
            className="form-control"
            placeholder="e.g. 3000"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Add Fuel
        </button>
      </form>
    </div>
  );
};

export default AddFuelForm;
