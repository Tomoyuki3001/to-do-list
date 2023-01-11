import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBCutZnyBpcUGalMFH1S4h_xagQKnf9lIQ",
  authDomain: "to-do-list-5457e.firebaseapp.com",
  projectId: "to-do-list-5457e",
  storageBucket: "to-do-list-5457e.appspot.com",
  messagingSenderId: "415272771925",
  appId: "1:415272771925:web:57535b905e482e7673cfdc",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
