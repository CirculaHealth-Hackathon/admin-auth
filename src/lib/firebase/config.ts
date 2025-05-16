
// src/lib/firebase/config.ts
import { initializeApp, getApps, getApp, type FirebaseApp } from "firebase/app";
import { getAuth, type Auth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore"; // For later if we add Firestore DB

// IMPORTANT: Replace YOUR_WEB_APP_ID and YOUR_WEB_MEASUREMENT_ID with the values from your Firebase project's WEB APP configuration.
// The other values have been pre-filled based on your project settings.
const firebaseConfig = {
  apiKey: "AlzaSyDlliDq7rBPumbrFge9AmXTuEazrBLH0a4", // From your Firebase project
  authDomain: "circulahealth.firebaseapp.com", // Derived from your Project ID
  projectId: "circulahealth", // From your Firebase project
  storageBucket: "circulahealth.appspot.com", // Derived from your Project ID
  messagingSenderId: "500759118187", // From your Firebase Project number
  appId: "YOUR_WEB_APP_ID", // YOU NEED TO GET THIS FROM YOUR WEB APP'S SETTINGS IN FIREBASE
  measurementId: "YOUR_WEB_MEASUREMENT_ID" // Optional: YOU NEED TO GET THIS FROM YOUR WEB APP'S SETTINGS IF USING ANALYTICS
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
