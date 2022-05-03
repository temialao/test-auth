import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC27HBwsDT-ZBM6WxclIcRYzC3kmKM7eDo",
  authDomain: "fir-login-6d62a.firebaseapp.com",
  projectId: "fir-login-6d62a",
  storageBucket: "fir-login-6d62a.appspot.com",
  messagingSenderId: "825156365201",
  appId: "1:825156365201:web:3e46d244ef3e9f4185c830",
  measurementId: "G-Y60YH3BYB5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
