import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCairbXVBcLrcjKhSQjBSJ_SQvxm-gEoIE",
  authDomain: "borrowbuddy-a9062.firebaseapp.com",
  projectId: "borrowbuddy-a9062",
  storageBucket: "borrowbuddy-a9062.appspot.com",
  messagingSenderId: "17150073036",
  appId: "1:17150073036:web:cbc5bed21a429fbaecca69",
  measurementId: "G-9MWBDZVS6D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

  export const Firebase= firebase.initializeApp(firebaseConfig)//named export