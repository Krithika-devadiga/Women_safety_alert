import React, { useState } from 'react';
<<<<<<< HEAD
=======
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
>>>>>>> 3f68a8b (added)
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
<<<<<<< HEAD
    <div className="container container-box mt-5">
      <h1 className="text-center text-primary mb-4 fw-bold">
        Women Safety Alert App
      </h1>

      {!userId ? (
        <>
          <Register onRegister={setUserId} />
          <Login onLogin={setUserId} />
        </>
      ) : (
        <>
          <AddContactForm userId={userId} />
          <ContactList userId={userId} />
          <AlertButton userId={userId} />
        </>
      )}
    </div>
=======
    <Router>
      <div className="container container-box mt-5">
        

        <Routes>
          <Route
            path="/register"
            element={<Register onRegister={setUserId} />}
          />
          <Route
            path="/login"
            element={<Login onLogin={setUserId} />}
          />
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
          <Route
            path="*"
            element={<Navigate to="/login" replace />}
          />
        </Routes>
      </div>
    </Router>
>>>>>>> 3f68a8b (added)
  );
}

export default App;
