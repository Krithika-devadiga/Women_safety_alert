import React, { useState } from 'react';
import api from '../api';

function Register({ onRegister }) {
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleRegister = async () => {
    try {
      const res = await api.post('/users/register', form);
      alert(res.data.message);
      onRegister(res.data.userId); // Pass userId to App
    } catch (err) {
      alert(err.response?.data?.error || 'Registration failed');
    }
  };

  return (
    <div className="mb-4">
      <h4>Register</h4>
      <input className="form-control my-1" name="name" placeholder="Name" onChange={handleChange} />
      <input className="form-control my-1" name="email" placeholder="Email" onChange={handleChange} />
      <input className="form-control my-1" type="password" name="password" placeholder="Password" onChange={handleChange} />
      <button className="btn btn-success mt-2" onClick={handleRegister}>Register</button>
    </div>
  );
}

export default Register;
