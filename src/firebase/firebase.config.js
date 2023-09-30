// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeM3vgODietST4I-2kjsbnOt-ZY8TmyMQ",
  authDomain: "auth-moha-milon-d082f.firebaseapp.com",
  projectId: "auth-moha-milon-d082f",
  storageBucket: "auth-moha-milon-d082f.appspot.com",
  messagingSenderId: "831591774420",
  appId: "1:831591774420:web:9381549efcb17797eb6341"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;