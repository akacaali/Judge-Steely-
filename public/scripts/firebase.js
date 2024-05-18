// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-analytics.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-storage.js";
import { getFunctions } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-functions.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZ5HrlT2FlNY5tWkNV0yQdCbj6EWPpsuk",
  authDomain: "judge-steely.firebaseapp.com",
  projectId: "judge-steely",
  storageBucket: "judge-steely.appspot.com",
  messagingSenderId: "33184051649",
  appId: "1:33184051649:web:7099a58c97b14c4ca43f40",
  measurementId: "G-QNDZLYXQ5Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);
const functions = getFunctions(app);
