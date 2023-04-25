// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLPK6-hdWeQVDMQrMqPC9LBFuDeUEQdZw",
  authDomain: "kracksite.firebaseapp.com",
  projectId: "kracksite",
  storageBucket: "kracksite.appspot.com",
  messagingSenderId: "268170105832",
  appId: "1:268170105832:web:556041d65e15a964f6ca5d",
  measurementId: "G-90LR7QNBZM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics }
