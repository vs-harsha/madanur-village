// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey:            "AIzaSyAQMNor7CW3hjCJmQdB6PDiIpk6KbUkerg",
  authDomain:        "madanur-village.firebaseapp.com",
  databaseURL:       "https://madanur-village-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId:         "madanur-village",
  storageBucket:     "madanur-village.firebasestorage.app",
  messagingSenderId: "23770822379",
  appId:             "1:23770822379:web:8ab955835ee32b09a7b0ae",
};

const app  = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db   = getDatabase(app);
export default app;
