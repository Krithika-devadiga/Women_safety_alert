# 🚨 Women Safety Alert App

A full-stack web application to help users add emergency contacts and send quick alerts when in danger.

## 🔧 Tech Stack

- **Frontend:** React.js, Bootstrap
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose)

## ✨ Features Implemented

- 👩‍🦰 User Registration & Login
- 📞 Add Emergency Contacts
- 🆘 One-click Alert Button
- 🔐 Password Encryption with bcryptjs
- 🔐 Data stored securely using MongoDB

## 🚧 Upcoming Features (Not Yet Implemented)

- 📍 Share Current Location to Contacts via SMS or API
- 🗺️ View Emergency Contacts on Google Map

## 📁 Folder Structure

Women_safety_alert/
│
├── backend/                         # 🖥️ Node + Express Backend
│   ├── models/                      # Mongoose Models (User, Contact)
│   ├── routes/                      # API Routes
│   ├── controllers/ (optional)     # Optional: Separate route logic
│   ├── middleware/   (optional)    # Optional: Auth / error handling
│   └── server.js                   # Main backend entry
│
├── frontend/                        # 🌐 React Frontend
│   ├── public/
│   ├── src/
│   │   ├── components/             # All components: Login, Register, etc.
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   └── README.md (optional)
│
├── .gitignore
└── README.md                       # 📄 Project Overview


## 🛠️ Setup Instructions

### 1. Clone the Repository

git clone https://github.com/Krithika-devadiga/Women_safety_alert.git
cd Women_safety_alert

### 2. Setup Backend

cd women-safety-backend
npm install
node server.js

### 3. Setup Frontend

cd women-safety-backend
npm install
npm start
