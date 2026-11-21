// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD3CFRwsL9raSMXt9S0EYiTh1Q2GpXLA4M",
  authDomain: "tpnoviembre.firebaseapp.com",
  projectId: "tpnoviembre",
  storageBucket: "tpnoviembre.firebasestorage.app",
  messagingSenderId: "626919577015",
  appId: "1:626919577015:web:4d43cb2dee733d9eac8432",
  measurementId: "G-7Y4DLRVV9R"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };