// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBgimwpuyTrShFR3dyQUykBiNCIg_RGT7I",
  authDomain: "maths-tutorial-f36ff.firebaseapp.com",
  projectId: "maths-tutorial-f36ff",
  storageBucket: "maths-tutorial-f36ff.appspot.com",
  messagingSenderId: "581312395533",
  appId: "1:581312395533:web:577f157288fce355d5d844"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app); // Optional
export default db;

