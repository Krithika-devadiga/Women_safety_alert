import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const AddContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/contacts', { name, phone });
      setName('');
      setPhone('');
      window.location.reload();
    } catch (err) {
      alert('Error adding contact');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-9">
      <form
        onSubmit={handleSubmit}
        className="bg-white border shadow-lg rounded-4 p-5 w-100"
        style={{ maxWidth: '800px' }}
      >
        <h2 className="text-center mb-4 text-primary fw-bold">
          📞 Add Emergency Contact
        </h2>
        <div className="row g-4">
          <div className="col-md-4">
            <input
              type="text"
              placeholder="Full Name"
              className="form-control form-control-lg border-primary"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="col-md-4">
            <input
              type="tel"
              placeholder="Phone Number"
              className="form-control form-control-lg border-primary"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="col-md-4">
            <button
              type="submit"
              className="btn btn-lg btn-primary w-100 shadow-sm fw-semibold"
            >
              ➕ Add Contact
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddContactForm;
