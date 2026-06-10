import { auth, db } from "./firebase.js";

import {
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

import {
  doc,
  getDoc
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

export async function login(email, password){
  const credential = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );

  return credential.user;
}

export async function register(email, password){
  const credential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );

  return credential.user;
}

export async function logout(){
  await signOut(auth);
}

export async function getRoleByUid(uid){
  if(!uid) return null;

  const ref = doc(db, "roles", uid);
  const snap = await getDoc(ref);

  if(!snap.exists()) return null;

  return snap.data()?.role || null;
}

export async function getRoleByEmail(email){
  if(!email) return null;

  const ref = doc(db, "rolesByEmail", email.toLowerCase());
  const snap = await getDoc(ref);

  if(!snap.exists()) return null;

  return snap.data()?.role || null;
}
