// app.js
import { db, auth } from "./Firebase.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";

let fullNameEl = document.getElementById("fullName");
let classTimingsEl = document.getElementById("time");
let campusEl = document.getElementById("campus");
let teacherEl = document.getElementById("teacher");
let courseEl = document.getElementById("course");
let dashboredEl = document.getElementById("dashbored");
let btn = document.getElementById("btn");

btn.addEventListener("click", async (e) => {
  e.preventDefault();

  let fullName = fullNameEl.value;
  let time = classTimingsEl.value;
  let campus = campusEl.value;
  let teacher = teacherEl.value;
  let course = courseEl.value;

  const user = auth.currentUser;

  if (!user) {
    alert("Please login first!");
    return;
  }

  try {
    await setDoc(doc(db, "students", user.uid), {
      fullName,
      time,
      campus,
      teacher,
      course,
      createdAt: new Date()
    });

    console.log("Data saved!");
    dashboredEl.style.display = "block";
  } catch (err) {
    console.error("Error saving data:", err.message);
  }
});
