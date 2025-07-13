// FuelList.jsx
import React, { useEffect, useState } from 'react';

const FuelList = ({ token }) => {
  const [fuels, setFuels] = useState([]);

  useEffect(() => {
    const fetchFuels = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/fuels', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        const data = await res.json();
        if (res.ok) {
          setFuels(data);
        } else {
          alert('❌ Failed to fetch fuel records.');
        }
      } catch (err) {
        alert('❌ Error: ' + err.message);
      }
    };

    fetchFuels();
  }, [token]);

  return (
    <div>
      <h3>Fuel Records</h3>
      <ul>
        {fuels.map((fuel) => (
          <li key={fuel._id}>
            {fuel.type} - ₦{fuel.price} - {fuel.quantityLiters} Liters
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FuelList;
