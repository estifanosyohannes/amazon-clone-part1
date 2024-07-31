// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";

import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDq0pvwidmmpiy8okH7bRkSiW8WKrD1iYw",
  authDomain: "one1-fc34d.firebaseapp.com",
  projectId: "one1-fc34d",
  storageBucket: "one1-fc34d.appspot.com",
  messagingSenderId: "632061121050",
  appId: "1:632061121050:web:70cb6ce125bd58c30ff7a3",
};

// // Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
