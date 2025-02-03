// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBePI2fS3JI5SF4QRm71LeDn8jIYtFDoe4",
  authDomain: "auth-moha-milon-93cbd.firebaseapp.com",
  projectId: "auth-moha-milon-93cbd",
  storageBucket: "auth-moha-milon-93cbd.firebasestorage.app",
  messagingSenderId: "47424998458",
  appId: "1:47424998458:web:c9f84c9ef2e80354367903"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);