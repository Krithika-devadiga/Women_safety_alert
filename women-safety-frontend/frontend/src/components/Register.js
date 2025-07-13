import React, { useState } from 'react';
<<<<<<< HEAD
import api from '../api';

function Register({ onRegister }) {
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleRegister = async () => {
    try {
      const res = await api.post('/users/register', form);
      alert(res.data.message);
      onRegister(res.data.userId); // Pass userId to App
=======
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import '../App.css';

function Register({ onRegister }) {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleRegister = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/users/register', form);
      alert(res.data.message);
      onRegister(res.data.userId);
      navigate('/home');
>>>>>>> 3f68a8b (added)
    } catch (err) {
      alert(err.response?.data?.error || 'Registration failed');
    }
  };

  return (
<<<<<<< HEAD
    <div className="mb-4">
      <h4>Register</h4>
      <input className="form-control my-1" name="name" placeholder="Name" onChange={handleChange} />
      <input className="form-control my-1" name="email" placeholder="Email" onChange={handleChange} />
      <input className="form-control my-1" type="password" name="password" placeholder="Password" onChange={handleChange} />
      <button className="btn btn-success mt-2" onClick={handleRegister}>Register</button>
=======
    <div className="auth-wrapper">
      <div className="auth-box">
        <div className="auth-title">Women Safety Alert App</div>
        <h5 className="text-center mb-3">Register</h5>
        <input
          className="form-control my-2"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
        />
        <input
          className="form-control my-2"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />
        <input
          className="form-control my-2"
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />
        <button className="btn btn-success w-100 mt-3" onClick={handleRegister}>
          Register
        </button>
        <div className="auth-link">
          Already have an account? <Link to="/login">Login here</Link>
        </div>
      </div>
>>>>>>> 3f68a8b (added)
    </div>
  );
}

export default Register;
