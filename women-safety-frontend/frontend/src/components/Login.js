import React, { useState } from 'react';
<<<<<<< HEAD
import api from '../api';

function Login({ onLogin }) {
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleLogin = async () => {
    try {
      const res = await api.post('/users/login', form);
      alert(res.data.message);
      onLogin(res.data.userId); // Pass userId to App
=======
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import '../App.css';

function Login({ onLogin }) {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleLogin = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/users/login', form);
      alert(res.data.message);
      onLogin(res.data.userId);
      navigate('/home');
>>>>>>> 3f68a8b (added)
    } catch (err) {
      alert(err.response?.data?.error || 'Login failed');
    }
  };

  return (
<<<<<<< HEAD
    <div className="mb-4">
      <h4>Login</h4>
      <input className="form-control my-1" name="email" placeholder="Email" onChange={handleChange} />
      <input className="form-control my-1" type="password" name="password" placeholder="Password" onChange={handleChange} />
      <button className="btn btn-primary mt-2" onClick={handleLogin}>Login</button>
=======
    <div className="auth-wrapper">
      <div className="auth-box">
        <div className="auth-title">Women Safety Alert App</div>
        <h5 className="text-center mb-3">Login</h5>
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
        <button className="btn btn-primary w-100 mt-3" onClick={handleLogin}>
          Login
        </button>
        <div className="auth-link">
          Don’t have an account? <Link to="/register">Register here</Link>
        </div>
      </div>
>>>>>>> 3f68a8b (added)
    </div>
  );
}

export default Login;
