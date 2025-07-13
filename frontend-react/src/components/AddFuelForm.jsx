// AddFuelForm.jsx
import React, { useState } from 'react';

const AddFuelForm = ({ token }) => {
  const [type, setType] = useState('');
  const [price, setPrice] = useState('');
  const [quantityLiters, setQuantityLiters] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:5000/api/fuels', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ type, price, quantityLiters })
      });

      const data = await res.json();
      if (res.ok) {
        alert('✅ Fuel added successfully!');
        setType('');
        setPrice('');
        setQuantityLiters('');
      } else {
        alert('❌ Failed to add fuel: ' + data.message);
      }
    } catch (err) {
      alert('❌ Error: ' + err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add New Fuel</h3>
      <input
        type="text"
        placeholder="Fuel Type (e.g., PMS)"
        value={type}
        onChange={(e) => setType(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Quantity (Liters)"
        value={quantityLiters}
        onChange={(e) => setQuantityLiters(e.target.value)}
        required
      />
      <button type="submit">Add Fuel</button>
    </form>
  );
};

export default AddFuelForm;
