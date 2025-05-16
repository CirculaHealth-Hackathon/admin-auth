
// src/lib/firebase/config.ts
import { initializeApp, getApps, getApp, type FirebaseApp } from "firebase/app";
import { getAuth, type Auth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore"; // For later if we add Firestore DB

// IMPORTANT: Replace YOUR_APP_ID and YOUR_MEASUREMENT_ID with your actual Firebase project configuration.
// The other values have been pre-filled based on your project settings.
const firebaseConfig = {
  apiKey: "AlzaSyDlliDq7rBPumbrFge9AmXTuEazrBLH0a4", // From your screenshot
  authDomain: "circulahealth.firebaseapp.com", // Derived from your Project ID
  projectId: "circulahealth", // From your screenshot
  storageBucket: "circulahealth.appspot.com", // Derived from your Project ID
  messagingSenderId: "500759118187", // From your Project number
  appId: "YOUR_APP_ID", // YOU NEED TO FIND THIS IN YOUR FIREBASE CONSOLE
  measurementId: "YOUR_MEASUREMENT_ID" // Optional: YOU NEED TO FIND THIS IF USING ANALYTICS
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
