// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuAtXwTpvRpnxMbSWMzG445OXsRf5h3f0",
  authDomain: "inventory-management-app-5cdb2.firebaseapp.com",
  projectId: "inventory-management-app-5cdb2",
  storageBucket: "inventory-management-app-5cdb2.appspot.com",
  messagingSenderId: "449469856174",
  appId: "1:449469856174:web:e1019e4b24c153e18e703f",
  measurementId: "G-D8LH9QW150"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore};