import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBl0O-CUZWAUHSd53ost0_SpdKO0e1OFQE",
  authDomain: "chat-app-d3d41.firebaseapp.com",
  projectId: "chat-app-d3d41",
  storageBucket: "chat-app-d3d41.appspot.com",
  messagingSenderId: "663265317788",
  appId: "1:663265317788:web:d43afa727636f5ab38ae59",
  measurementId: "G-6CLW5FQ0K6",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
