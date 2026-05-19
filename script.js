import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "...",
  authDomain: "...",
  projectId: "..."
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
window.register = async function () {
  const email = document.getElementById("email")?.value.trim();
  const password = document.getElementById("password")?.value.trim();

  await createUserWithEmailAndPassword(auth, email, password);
  alert("Daftar berhasil!");
};
window.login = async function () {
  const email = document.getElementById("email")?.value.trim();
  const password = document.getElementById("password")?.value.trim();

  await signInWithEmailAndPassword(auth, email, password);
  alert("Login berhasil!");
};
window.logout = async function () {
  await signOut(auth);
  alert("Logout berhasil!");
};
