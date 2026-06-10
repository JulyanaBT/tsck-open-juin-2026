import { auth, db } from "./firebase.js";

import {
  signInWithEmailAndPassword,
  signOut
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

import {
  doc,
  getDoc
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

/* =========================
   LOGIN
========================= */

export async function login(email, password){
  const credential = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );

  return credential.user;
}

/* =========================
   LOGOUT
========================= */

export async function logout(){
  await signOut(auth);
}

/* =========================
   ROLE
========================= */

export async function getRoleByEmail(email){

  if(!email) return null;

  const ref = doc(db, "roles", email.toLowerCase());
  const snap = await getDoc(ref);

  if(!snap.exists()) return null;

  return snap.data()?.role || null;
}

/* =========================
   ADMIN ?
========================= */

export async function isAdmin(){

  const user = auth.currentUser;

  if(!user) return false;

  const role = await getRoleByEmail(user.email);

  return role === "admin";
}
