import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCuMe3421uaupLCzik_67ncABZUCxD2llU",
  authDomain: "react-cursito.firebaseapp.com",
  projectId: "react-cursito",
  storageBucket: "react-cursito.appspot.com",
  messagingSenderId: "327058510715",
  appId: "1:327058510715:web:cb3fe095af4be40b5ee3de"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
