// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getDatabase } from 'firebase/database';

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD09OCqwgRUQoi4mdGcRkWMdxsIlKoMqFA",
  authDomain: "veldje14-63bdd.firebaseapp.com",
  databaseURL: "https://veldje14-63bdd-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "veldje14-63bdd",
  storageBucket: "veldje14-63bdd.appspot.com",
  messagingSenderId: "481531415129",
  appId: "1:481531415129:web:8b96f8ed22aefebb5d3f48",
  measurementId: "G-2KSJHQDYRH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getDatabase(app);

export { db };
