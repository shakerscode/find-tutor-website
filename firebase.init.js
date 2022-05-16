// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth"
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMemwYeDViHa5P535Ap21p3H8K4Zk0pZ4",
  authDomain: "find-tutor-e9b12.firebaseapp.com",
  projectId: "find-tutor-e9b12",
  storageBucket: "find-tutor-e9b12.appspot.com",
  messagingSenderId: "939817971927",
  appId: "1:939817971927:web:73eabbdbc273efaa34c092"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;