// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAZSn4VCkO0uJ7i5p02i5NeHzToJ6HOMaU",
    authDomain: "chat-ec7f1.firebaseapp.com",
    projectId: "chat-ec7f1",
    storageBucket: "chat-ec7f1.appspot.com",
    messagingSenderId: "538993902938",
    appId: "1:538993902938:web:bd4791d50353f5694e5f63"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();