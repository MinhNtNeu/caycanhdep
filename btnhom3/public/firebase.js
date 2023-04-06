// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIA1gK_kUFR9XGwb66eBAZlhO-FgeFcYU",
  authDomain: "caycanhdep-75ee6.firebaseapp.com",
  projectId: "caycanhdep-75ee6",
  storageBucket: "caycanhdep-75ee6.appspot.com",
  messagingSenderId: "349451331615",
  appId: "1:349451331615:web:154687aab127aae45bcd2a",
  measurementId: "G-2MT8ZJ73SM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);