// =======================
// SCROLL HEADER EFFECT
// =======================
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (header) {
    header.classList.toggle("active", window.scrollY > 50);
  }
});

// =======================
// FIREBASE IMPORT (MODULE)
// =======================
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
  getFirestore,
  addDoc,
  collection
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// =======================
// FIREBASE CONFIG
// =======================
const firebaseConfig = {
  apiKey: "AIzaSyCwHTrXhyShGF4pde5rZdQvSRnqVTH4evw",
  authDomain: "novasport-8b7b2.firebaseapp.com",
  projectId: "novasport-8b7b2",
  storageBucket: "novasport-8b7b2.firebasestorage.app",
  messagingSenderId: "922288162095",
  appId: "1:922288162095:web:f400c6dd17641482af0dda",
  measurementId: "G-JHW2WF1XHD"
};

// =======================
// INITIALIZE FIREBASE
// =======================
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// =======================
// REGISTER
// =======================
window.register = async function () {
  const email = document.getElementById("email")?.value;
  const password = document.getElementById("password")?.value;

  if (!email || !password) {
    alert("Email dan password wajib diisi!");
    return;
  }

  try {
    await createUserWithEmailAndPassword(auth, email, password);
    alert("✅ Account created successfully!");

  } catch (error) {
    alert("❌ " + error.message);
  }
};

// =======================
// LOGIN
// =======================
window.login = async function () {
  const email = document.getElementById("email")?.value;
  const password = document.getElementById("password")?.value;

  if (!email || !password) {
    alert("Email dan password wajib diisi!");
    return;
  }

  try {
    await signInWithEmailAndPassword(auth, email, password);
    alert("🔥 Login successful!");

  } catch (error) {
    alert("❌ " + error.message);
  }
};

// =======================
// LOGOUT
// =======================
window.logout = async function () {
  try {
    await signOut(auth);
    alert("👋 Logged out!");
  } catch (error) {
    alert("❌ " + error.message);
  }
};

// =======================
// UPLOAD ARTICLE
// =======================
window.uploadArticle = async function () {
  const title = document.getElementById("title")?.value;
  const content = document.getElementById("content")?.value;

  if (!title || !content) {
    alert("Judul dan konten wajib diisi!");
    return;
  }

  try {
    await addDoc(collection(db, "articles"), {
      title: title,
      content: content,
      createdAt: new Date()
    });

    alert("🚀 Article uploaded!");

  } catch (error) {
    alert("❌ " + error.message);
  }
};
