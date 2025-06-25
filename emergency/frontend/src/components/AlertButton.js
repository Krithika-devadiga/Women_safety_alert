import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const AlertButton = () => {
  const sendAlert = async () => {
    try {
      await axios.post('http://localhost:5000/api/contacts/alert');
      alert('🚨 Emergency alert sent!');
    } catch {
      alert('❌ Error sending alert');
    }
  };

  return (
    <div className="text-center mt-5">
      <button
        onClick={sendAlert}
        className="btn btn-danger btn-lg px-5 py-3 shadow fw-bold"
      >
        🚨 Send Emergency Alert
      </button>
    </div>
  );
};

export default AlertButton;
