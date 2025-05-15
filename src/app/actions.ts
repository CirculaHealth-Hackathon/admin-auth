
"use server";
import type { AuthFormValues } from "@/lib/schemas";
import { auth } from "@/lib/firebase/config"; // Import Firebase auth
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  // For social auth later:
  // GoogleAuthProvider,
  // OAuthProvider,
  // signInWithPopup,
} from "firebase/auth";

// Account Creation Actions
export async function createAccountAction(values: AuthFormValues) {
  console.log("Attempting Firebase account creation:", values);
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, values.email, values.password);
    console.log("Firebase user created:", userCredential.user.uid);
    return { success: true, message: "Account created successfully! You can now sign in." };
  } catch (error: any) {
    console.error("Firebase account creation error:", error.code, error.message);
    let message = "Failed to create account. Please try again.";
    if (error.code === 'auth/email-already-in-use') {
      message = "This email is already in use. Please try to sign in or use a different email.";
    } else if (error.code === 'auth/weak-password') {
      message = "The password is too weak. Please choose a stronger password.";
    } else if (error.code === 'auth/invalid-email') {
      message = "The email address is not valid.";
    }
    return { success: false, message };
  }
}

export async function signUpWithAppleAction() {
  console.log("Attempting Sign up with Apple");
  // Placeholder, Firebase integration needed
  await new Promise(resolve => setTimeout(resolve, 500));
  return { success: false, message: "Apple sign-up not yet implemented with Firebase." };
}

export async function signUpWithGoogleAction() {
  console.log("Attempting Sign up with Google");
  // Placeholder, Firebase integration needed
  await new Promise(resolve => setTimeout(resolve, 500));
  return { success: false, message: "Google sign-up not yet implemented with Firebase." };
}

export async function signUpWithXAction() {
  console.log("Attempting Sign up with X");
  // Placeholder, Firebase integration needed
  await new Promise(resolve => setTimeout(resolve, 500));
  return { success: false, message: "X sign-up not yet implemented with Firebase." };
}

// Sign In Actions
export async function signInAction(values: AuthFormValues) {
  console.log("Attempting Firebase sign in:", values);
  try {
    const userCredential = await signInWithEmailAndPassword(auth, values.email, values.password);
    console.log("Firebase user signed in:", userCredential.user.uid);
    return { success: true, message: "Signed in successfully!", redirectTo: "/dashboard" };
  } catch (error: any) {
    console.error("Firebase sign in error:", error.code, error.message);
    let message = "Invalid email or password. Please try again.";
    // More specific error handling based on Firebase error codes
    if (error.code === 'auth/user-not-found' || 
        error.code === 'auth/wrong-password' || 
        error.code === 'auth/invalid-credential' ||
        error.code === 'auth/invalid-email') {
      message = "Invalid email or password. Please check your credentials and try again.";
    }
    return { success: false, message };
  }
}

export async function signInWithAppleAction() {
  console.log("Attempting Sign in with Apple");
  await new Promise(resolve => setTimeout(resolve, 500));
  // In a real app, this would also set redirectTo on success
  return { success: false, message: "Apple sign-in not yet implemented with Firebase." };
}

export async function signInWithGoogleAction() {
  console.log("Attempting Sign in with Google");
  await new Promise(resolve => setTimeout(resolve, 500));
  // In a real app, this would also set redirectTo on success
  return { success: false, message: "Google sign-in not yet implemented with Firebase." };
}

export async function signInWithXAction() {
  console.log("Attempting Sign in with X");
  await new Promise(resolve => setTimeout(resolve, 500));
  // In a real app, this would also set redirectTo on success
  return { success: false, message: "X sign-in not yet implemented with Firebase." };
}
