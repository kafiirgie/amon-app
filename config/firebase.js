import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyACZJ28FTLny7A1SK3susiblXLX2Bmlw7Y",
  authDomain: "amon-app-bc890.firebaseapp.com",
  projectId: "amon-app-bc890",
  storageBucket: "amon-app-bc890.appspot.com",
  messagingSenderId: "713226831928",
  appId: "1:713226831928:web:71f812995af9e358effecd",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);