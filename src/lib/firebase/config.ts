
// src/lib/firebase/config.ts
import { initializeApp, getApps, getApp, type FirebaseApp } from "firebase/app";
import { getAuth, type Auth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore"; // For later if we add Firestore DB

const firebaseConfig = {
  apiKey: "AIzaSyDlIiDq7rBPumbrFge9AmXTuEazrBLH0a4",
  authDomain: "circulahealth.firebaseapp.com",
  projectId: "circulahealth",
  storageBucket: "circulahealth.firebasestorage.app",
  messagingSenderId: "500759118187",
  appId: "1:500759118187:web:0a152eb045804b29238c2e",
  measurementId: "G-PVEK4H7C27"
};

// Initialize Firebase
let app: FirebaseApp;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}

const auth: Auth = getAuth(app);
// const db = getFirestore(app); // For later

export { app, auth /*, db */ };
