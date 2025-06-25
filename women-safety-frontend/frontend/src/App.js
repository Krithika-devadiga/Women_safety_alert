import React from 'react';
import AddContactForm from './components/AddContactForm';
import ContactList from './components/ContactList';
import AlertButton from './components/AlertButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="container container-box mt-5">
      <h1 className="text-center text-primary mb-4 fw-bold">
        Women Safety Alert App
      </h1>
      <AddContactForm />
      <ContactList />
      <AlertButton />
    </div>
  );
}

export default App;
