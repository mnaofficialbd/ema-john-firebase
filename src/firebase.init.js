// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmLDsJuaARQthp2SNkxUIrQninakHjl4k",
  authDomain: "ema-john-7d367.firebaseapp.com",
  projectId: "ema-john-7d367",
  storageBucket: "ema-john-7d367.appspot.com",
  messagingSenderId: "260786163118",
  appId: "1:260786163118:web:38e043abd7ef67cbe44c3f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;