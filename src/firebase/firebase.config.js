// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdmBcKQLU0fhc5PRwjlZyt3zMz0qJd5fk",
  authDomain: "gameecho-ca02a.firebaseapp.com",
  projectId: "gameecho-ca02a",
  storageBucket: "gameecho-ca02a.firebasestorage.app",
  messagingSenderId: "786929432480",
  appId: "1:786929432480:web:49622a3e9ea22eea7496c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;