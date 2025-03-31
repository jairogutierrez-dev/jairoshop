// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//nos permite obtener los datos de la base de datos de firebase
import { getFirestore } from "firebase/firestore";
const apiKey = import.meta.env.VITE_API_KEY;

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: apiKey,
  authDomain: "jairoshop-11ca0.firebaseapp.com",
  projectId: "jairoshop-11ca0",
  storageBucket: "jairoshop-11ca0.firebasestorage.app",
  messagingSenderId: "394519485589",
  appId: "1:394519485589:web:fe3223a67c0499a5900f9c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)