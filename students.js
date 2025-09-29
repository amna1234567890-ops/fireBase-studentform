import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyCYPVL95ah5KG4vAC5DoMp0DkGXmZ3-sMM",
  authDomain: "first-project-209.firebaseapp.com",
  projectId: "first-project-209",
  storageBucket: "first-project-209.firebasestorage.app",
  messagingSenderId: "84885344010",
  appId: "1:84885344010:web:520eef43afc1b52e2ef4f3",
  measurementId: "G-HDRBZRSSGK"
};

// Init Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Table body element
const studentsBody = document.getElementById("studentsBody");

// Fetch Firestore data
async function loadStudents() {
  try {
    const querySnapshot = await getDocs(collection(db, "students"));
    studentsBody.innerHTML = ""; // Clear old data

    querySnapshot.forEach((doc) => {
      const data = doc.data();
      const row = `
        <tr>
          <td>${data.fullName || "-"}</td>
          <td>${data.time || "-"}</td>
          <td>${data.campus || "-"}</td>
          <td>${data.teacher || "-"}</td>
          <td>${data.course || "-"}</td>
          <td>${data.createdAt?.toDate().toLocaleString() || "-"}</td>
        </tr>
      `;
      studentsBody.innerHTML += row;
    });
  } catch (err) {
    console.error("Error fetching students:", err);
  }
}

// Call function
loadStudents();
