
// firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs, doc, setDoc } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyDGTOjWXiSK1E6_hNrUfGRV3mr8uNRmKEs",
    authDomain: "dtx-dandiya-80dde.firebaseapp.com",
    projectId: "dtx-dandiya-80dde",
    storageBucket: "dtx-dandiya-80dde.appspot.com",
    messagingSenderId: "1061484575966",
    appId: "1:1061484575966:web:aa64ca4abab6205f39964f",
    measurementId: "G-C0TQH9EQWT",
  };


const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const analytics = getAnalytics(firebaseApp);

export { db, collection, addDoc, getDocs, doc, setDoc};