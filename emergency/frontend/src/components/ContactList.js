import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/contacts')
      .then((res) => setContacts(res.data))
      .catch(() => alert('Failed to fetch contacts'));
  }, []);

  const deleteContact = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/contacts/${id}`);
      setContacts(contacts.filter((c) => c._id !== id));
    } catch {
      alert('Failed to delete');
    }
  };

  return (
    <div className="space-y-6 mt-8">
      <h2 className="text-2xl font-bold text-cyan-600 border-b border-cyan-300 pb-2">
        📋 Saved Emergency Contacts
      </h2>

      <ul className="space-y-4">
        {contacts.map((contact) => (
          <li
            key={contact._id}
            className="bg-white/60 border border-gray-200 backdrop-blur-md shadow-md rounded-xl p-5 transition-all"
          >
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-black font-medium text-lg">
                  <span className="font-bold text-gray-700">Name: </span>
                  {contact.name}
                </p>
                <p className="text-black">
                  <span className="font-bold text-gray-700">Phone: </span>
                  {contact.phone}
                </p>
              </div>

              <button
                onClick={() => deleteContact(contact._id)}
                className="mt-3 sm:mt-0 px-4 py-2 bg-red-500 text-white rounded-full text-sm hover:bg-red-600 transition"
              >
                ❌ Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
