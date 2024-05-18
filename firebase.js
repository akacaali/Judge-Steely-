// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

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
const storage = getStorage(app);
const analytics = getAnalytics(app);

export { storage };

