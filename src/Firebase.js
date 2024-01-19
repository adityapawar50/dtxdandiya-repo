
// firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs, doc, setDoc } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import * as firebaseui from 'firebaseui'

import 'firebase/auth'; // import the authentication module

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional



const firebaseConfig = {
  apiKey: process.env.REACT_APP_DTX_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_DTX_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_DTX_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_DTX_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_DTX_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_DTX_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_DTX_FIREBASE_MEASUREMENT_ID
};


const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const analytics = getAnalytics(firebaseApp);
const auth = getAuth(firebaseApp);

const ui = new firebaseui.auth.AuthUI(auth);

export { db, collection, addDoc, getDocs, doc, ui, setDoc, auth};