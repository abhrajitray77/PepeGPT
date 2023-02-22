import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDQ8wGoBOVfk7h7YOk88lgaODJop17Xu-k",
    authDomain: "custom-chatgpt.firebaseapp.com",
    projectId: "custom-chatgpt",
    storageBucket: "custom-chatgpt.appspot.com",
    messagingSenderId: "583891977100",
    appId: "1:583891977100:web:dfa04af6aeb9d100758ca9",
    measurementId: "G-7H0ZKL57BT"
  };
  
  // Initialize Firebase
  const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export { db };
