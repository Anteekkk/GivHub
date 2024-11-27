// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2fkMaG-ZI5_AQmG5YB22as43kpUU0-7E",
  authDomain: "loginauth-10239.firebaseapp.com",
  projectId: "loginauth-10239",
  storageBucket: "loginauth-10239.firebasestorage.app",
  messagingSenderId: "1096476874685",
  appId: "1:1096476874685:web:1081fae638586120e3e4d4"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);

export const db=getFirestore(app);
window.auth = auth;

export { auth };