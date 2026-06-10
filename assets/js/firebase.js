import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDLrWOKRb9bR0L_5XE_nV6Y16sUPYtFONU",
  authDomain: "julyana-bt-tsck.firebaseapp.com",
  projectId: "julyana-bt-tsck",
  storageBucket: "julyana-bt-tsck.firebasestorage.app",
  messagingSenderId: "777396494325",
  appId: "1:777396494325:web:fdbb11afd2a4ee19768abc"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
