// FuelList.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FuelList = ({ token, readOnly = false }) => {
  const [fuels, setFuels] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editedFuel, setEditedFuel] = useState({ type: '', price: '', quantityLiters: '' });
  const [message, setMessage] = useState('');

  const fetchFuels = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/fuels');
      setFuels(res.data);
    } catch (err) {
      console.error('Failed to fetch fuels:', err);
    }
  };

  useEffect(() => {
    fetchFuels();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/fuels/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setMessage('✅ Fuel deleted');
      fetchFuels();
    } catch (err) {
      console.error('Delete failed:', err);
      setMessage('❌ Delete failed');
    }
  };

  const handleEdit = (fuel) => {
    setEditingId(fuel._id);
    setEditedFuel(fuel);
  };

  const handleEditChange = (e) => {
    setEditedFuel({ ...editedFuel, [e.target.name]: e.target.value });
  };

  const handleEditSave = async () => {
    try {
      await axios.put(`http://localhost:5000/api/fuels/${editingId}`, editedFuel, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setEditingId(null);
      setMessage('✅ Fuel updated successfully');
      fetchFuels();
    } catch (err) {
      console.error('Update failed:', err);
      setMessage('❌ Update failed');
    }
  };

  return (
    <div className="card p-4 shadow-sm">
      <h3 className="mb-3">⛽ Fuel Records</h3>
      {message && (
        <div className={`alert ${message.includes('✅') ? 'alert-success' : 'alert-danger'}`}>
          {message}
        </div>
      )}
      {fuels.length === 0 ? (
        <p>No fuel records found.</p>
      ) : (
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Type</th>
              <th>Price (₦)</th>
              <th>Quantity (Liters)</th>
              {!readOnly && <th>Actions</th>}
            </tr>
          </thead>
          <tbody>
            {fuels.map((fuel) => (
              <tr key={fuel._id}>
                {editingId === fuel._id ? (
                  <>
                    <td>
                      <input
                        type="text"
                        name="type"
                        value={editedFuel.type}
                        onChange={handleEditChange}
                        className="form-control"
                        disabled={readOnly}
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        name="price"
                        value={editedFuel.price}
                        onChange={handleEditChange}
                        className="form-control"
                        disabled={readOnly}
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        name="quantityLiters"
                        value={editedFuel.quantityLiters}
                        onChange={handleEditChange}
                        className="form-control"
                        disabled={readOnly}
                      />
                    </td>
                    {!readOnly && (
                      <td>
                        <button className="btn btn-success btn-sm me-2" onClick={handleEditSave}>
                          Save
                        </button>
                        <button
                          className="btn btn-secondary btn-sm"
                          onClick={() => setEditingId(null)}
                        >
                          Cancel
                        </button>
                      </td>
                    )}
                  </>
                ) : (
                  <>
                    <td>{fuel.type}</td>
                    <td>₦{fuel.price}</td>
                    <td>{fuel.quantityLiters}</td>
                    {!readOnly && (
                      <td>
                        <button
                          className="btn btn-primary btn-sm me-2"
                          onClick={() => handleEdit(fuel)}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => handleDelete(fuel._id)}
                        >
                          Delete
                        </button>
                      </td>
                    )}
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default FuelList;
