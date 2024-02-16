// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvHcM-KoAzTJDHLzTpTjLF2pG9VAJUzlg",
  authDomain: "netflixgpt-822ba.firebaseapp.com",
  projectId: "netflixgpt-822ba",
  storageBucket: "netflixgpt-822ba.appspot.com",
  messagingSenderId: "56447737582",
  appId: "1:56447737582:web:6ac7c9eb040faf899fddff",
  measurementId: "G-VWL4B8WKYC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();