// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCBaKhokYid3nqOhL0xgJPaHKdie_WokMo",
  authDomain: "skillswap-6f398.firebaseapp.com",
  projectId: "skillswap-6f398",
  storageBucket: "skillswap-6f398.firebasestorage.app",
  messagingSenderId: "114220971293",
  appId: "1:114220971293:web:a491f7dbd6321fabeb5df4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const  auth =  getAuth(app)
export const db = getFirestore(app)