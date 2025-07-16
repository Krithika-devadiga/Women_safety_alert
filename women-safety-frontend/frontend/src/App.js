import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AddContactForm from './components/AddContactForm';
import ContactList from './components/ContactList';
import AlertButton from './components/AlertButton';
import Register from './components/Register';
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [userId, setUserId] = useState(null);

  return (
    <Router>
      <div className="container container-box mt-5">
        <h1 className="text-center text-primary mb-4 fw-bold">
          Women Safety Alert App
        </h1>

        <Routes>
          <Route path="/register" element={<Register onRegister={setUserId} />} />
          <Route path="/login" element={<Login onLogin={setUserId} />} />
          <Route
            path="/home"
            element={
              userId ? (
                <>
                  <AddContactForm userId={userId} />
                  <ContactList userId={userId} />
                  <AlertButton userId={userId} />
                </>
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          {/* Default route to redirect to login */}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
