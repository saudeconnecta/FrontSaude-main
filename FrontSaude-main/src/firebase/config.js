// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbfz_aw0XmqYC_5O72AexCaJf7x4pjzzg",
  authDomain: "saudeconnect-a636c.firebaseapp.com",
  projectId: "saudeconnect-a636c",
  storageBucket: "saudeconnect-a636c.appspot.com",
  messagingSenderId: "391609250347",
  appId: "1:391609250347:web:c1ef40646984a0cd48f06e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
