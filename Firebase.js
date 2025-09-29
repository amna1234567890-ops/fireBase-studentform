// Firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCYPVL95ah5KG4vAC5DoMp0DkGXmZ3-sMM",
  authDomain: "first-project-209.firebaseapp.com",
  projectId: "first-project-209",
  storageBucket: "first-project-209.firebasestorage.app",
  messagingSenderId: "84885344010",
  appId: "1:84885344010:web:520eef43afc1b52e2ef4f3",
  measurementId: "G-HDRBZRSSGK"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
