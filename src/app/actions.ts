
"use server";
import type { AuthFormValues } from "@/lib/schemas";

// Account Creation Actions
export async function createAccountAction(values: AuthFormValues) {
  console.log("Form submitted for account creation:", values);
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Simulate success/error
  if (values.email === "error@example.com") {
    return { success: false, message: "This email is already taken. Please try another." };
  }
  return { success: true, message: "Account created successfully! You can now sign in." };
}

export async function signUpWithAppleAction() {
  console.log("Attempting Sign up with Apple");
  await new Promise(resolve => setTimeout(resolve, 500));
  return { success: true, message: "Initiating Apple sign-up..." };
}

export async function signUpWithGoogleAction() {
  console.log("Attempting Sign up with Google");
  await new Promise(resolve => setTimeout(resolve, 500));
  return { success: true, message: "Initiating Google sign-up..." };
}

export async function signUpWithXAction() {
  console.log("Attempting Sign up with X");
  await new Promise(resolve => setTimeout(resolve, 500));
  return { success: true, message: "Initiating X sign-up..." };
}

// Sign In Actions
export async function signInAction(values: AuthFormValues) {
  console.log("Form submitted for sign in:", values);
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Simulate success/error
  if (values.email === "test@example.com" && values.password === "password") {
    return { success: true, message: "Signed in successfully!", redirectTo: "/dashboard" };
  }
  return { success: false, message: "Invalid email or password. Please try again." };
}

export async function signInWithAppleAction() {
  console.log("Attempting Sign in with Apple");
  await new Promise(resolve => setTimeout(resolve, 500));
  // In a real app, this would also set redirectTo on success
  return { success: true, message: "Initiating Apple sign-in..." };
}

export async function signInWithGoogleAction() {
  console.log("Attempting Sign in with Google");
  await new Promise(resolve => setTimeout(resolve, 500));
  // In a real app, this would also set redirectTo on success
  return { success: true, message: "Initiating Google sign-in..." };
}

export async function signInWithXAction() {
  console.log("Attempting Sign in with X");
  await new Promise(resolve => setTimeout(resolve, 500));
  // In a real app, this would also set redirectTo on success
  return { success: true, message: "Initiating X sign-in..." };
}
