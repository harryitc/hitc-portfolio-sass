// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8pbK0hpWS6mgswYW0J9ZxcP_m_bOMpS4",
  authDomain: "career-portfolio-9fb95.firebaseapp.com",
  projectId: "career-portfolio-9fb95",
  storageBucket: "career-portfolio-9fb95.appspot.com",
  messagingSenderId: "213283849225",
  appId: "1:213283849225:web:396ee0087abecab6df64d8",
  measurementId: "G-DCF9BQZX0T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);