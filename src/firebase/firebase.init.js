// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyWxM-1pDL4zBhOusdJvYoZQkTQIlM86k",
  authDomain: "fruit-world-authentication.firebaseapp.com",
  projectId: "fruit-world-authentication",
  storageBucket: "fruit-world-authentication.appspot.com",
  messagingSenderId: "258933532898",
  appId: "1:258933532898:web:4f0d67223cf8470a5716bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;