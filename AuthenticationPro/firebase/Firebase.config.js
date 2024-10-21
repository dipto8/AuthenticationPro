// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDL6vWNIUIdbEBj4ipm8ZYywKHpOE4NYs",
  authDomain: "authenticationpro-ef2a6.firebaseapp.com",
  projectId: "authenticationpro-ef2a6",
  storageBucket: "authenticationpro-ef2a6.appspot.com",
  messagingSenderId: "838766344928",
  appId: "1:838766344928:web:01715a58bb1acafb092e85"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;