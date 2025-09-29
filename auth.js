// auth.js
import { auth } from "./Firebase.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } 
from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";

// elements
const signUp = document.getElementById("signUp");
const logIn = document.getElementById("logIn");
const signupMessage = document.getElementById("signup-message");
const loginMessage = document.getElementById("login-message");

// signup
signUp?.addEventListener("click", () => {
  const email = document.getElementById("signup-email")?.value;
  const password = document.getElementById("signup-password")?.value;
  const confirmPassword = document.getElementById("confirm-password")?.value;

  if (password !== confirmPassword) {
    if (signupMessage) {
      signupMessage.textContent = "Passwords do not match!";
      signupMessage.className = "message error";
      signupMessage.style.display = "block";
    }
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then(userCred => {
      if (signupMessage) {
        signupMessage.textContent = "Signup Successful 🎉";
        signupMessage.className = "message success";
        signupMessage.style.display = "block";
      }
      console.log("Signup success:", userCred.user);
    })
    .catch(err => {
      if (signupMessage) {
        signupMessage.textContent = "Signup Failed: " + err.message;
        signupMessage.className = "message error";
        signupMessage.style.display = "block";
      }
    });
});

// login
logIn?.addEventListener("click", () => {
  const email = document.getElementById("login-email")?.value;
  const password = document.getElementById("login-password")?.value;

  signInWithEmailAndPassword(auth, email, password)
    .then(userCred => {
      if (loginMessage) {
        loginMessage.textContent = "Login Successful 🎉";
        loginMessage.className = "message success";
        loginMessage.style.display = "block";
      }
      console.log("Login success:", userCred.user);

      setTimeout(() => {
        window.location.assign("registration.html");
      }, 1000);
    })
    .catch(err => {
      if (loginMessage) {
        loginMessage.textContent = "Login Failed: " + err.message;
        loginMessage.className = "message error";
        loginMessage.style.display = "block";
      }
    });
});

//////// Toggle between login & signup ////////
const signupForm = document.getElementById("signup-form");
const loginForm = document.getElementById("login-form");

const switchToLogin = document.getElementById("switch-to-login");
const switchToSignup = document.getElementById("switch-to-signup");

switchToLogin?.addEventListener("click", (e) => {
  e.preventDefault();
  signupForm?.classList.remove("active");
  loginForm?.classList.add("active");
});

switchToSignup?.addEventListener("click", (e) => {
  e.preventDefault();
  loginForm?.classList.remove("active");
  signupForm?.classList.add("active");
});
