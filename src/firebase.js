// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBmU61QjsGLEC6KuSAoL4lrAIs5qLgcWpk',
  authDomain: 'reactjs-chat-app-df3a3.firebaseapp.com',
  projectId: 'reactjs-chat-app-df3a3',
  storageBucket: 'reactjs-chat-app-df3a3.appspot.com',
  messagingSenderId: '607408517419',
  appId: '1:607408517419:web:2caa1f392bdefc0fe0556e',
  measurementId: 'G-CCVWE6H3N5',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
const analytics = getAnalytics(app);
