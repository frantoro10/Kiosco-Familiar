import React from 'react'
import ReactDOM from 'react-dom/client'
// frebase
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import App from './App.jsx'
import './index.css'

const firebaseConfig = {
  apiKey: "AIzaSyAg9FXbDT9ofFa0-RAe9Deytb9Qq1KOUG4",
  authDomain: "react-kiosco-toro.firebaseapp.com",
  projectId: "react-kiosco-toro",
  storageBucket: "react-kiosco-toro.appspot.com",
  messagingSenderId: "564434695360",
  appId: "1:564434695360:web:dc4bcd9ee8bfc23fe56925",
  measurementId: "G-XVP9YWMFED"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
