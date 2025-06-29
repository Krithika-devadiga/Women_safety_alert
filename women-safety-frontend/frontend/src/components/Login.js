import React, { useState } from 'react';
import api from '../api';

function Login({ onLogin }) {
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleLogin = async () => {
    try {
      const res = await api.post('/users/login', form);
      alert(res.data.message);
      onLogin(res.data.userId); // Pass userId to App
    } catch (err) {
      alert(err.response?.data?.error || 'Login failed');
    }
  };

  return (
    <div className="mb-4">
      <h4>Login</h4>
      <input className="form-control my-1" name="email" placeholder="Email" onChange={handleChange} />
      <input className="form-control my-1" type="password" name="password" placeholder="Password" onChange={handleChange} />
      <button className="btn btn-primary mt-2" onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
