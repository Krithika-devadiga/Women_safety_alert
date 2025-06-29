import React, { useState } from 'react';
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
  );
}

export default App;
