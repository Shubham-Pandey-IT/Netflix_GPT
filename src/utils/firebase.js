// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcChKROJF5SLM927WdH-jDFTPstJXBi10",
  authDomain: "netflixgpt-46e3b.firebaseapp.com",
  projectId: "netflixgpt-46e3b",
  storageBucket: "netflixgpt-46e3b.firebasestorage.app",
  messagingSenderId: "295840386102",
  appId: "1:295840386102:web:8671a0ca9163374375dc97",
  measurementId: "G-73PCSZDEVP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();