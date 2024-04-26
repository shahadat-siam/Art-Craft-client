// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4yup7HsFM7B2l-3knNjcilcgJG8Zxcuk",
  authDomain: "artistry-atelier.firebaseapp.com",
  projectId: "artistry-atelier",
  storageBucket: "artistry-atelier.appspot.com",
  messagingSenderId: "452054195052",
  appId: "1:452054195052:web:6239ad9e1f58ceb9a43149"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)