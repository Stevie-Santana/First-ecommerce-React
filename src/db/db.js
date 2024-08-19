import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2SH86H8B7J7Imu-ha_V6AsS0lQ6nBGKQ",
  authDomain: "e-commerce-bookshop-react.firebaseapp.com",
  projectId: "e-commerce-bookshop-react",
  storageBucket: "e-commerce-bookshop-react.appspot.com",
  messagingSenderId: "386044419127",
  appId: "1:386044419127:web:eb038b58f4279640a6f3b2"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore()

export default db;