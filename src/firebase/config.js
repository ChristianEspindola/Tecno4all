import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDoxlSLy5-q5pTfqYgkURMANYfF1Z9Xh8w",
  authDomain: "tecno4all-cc7e8.firebaseapp.com",
  projectId: "tecno4all-cc7e8",
  storageBucket: "tecno4all-cc7e8.appspot.com",
  messagingSenderId: "649600460730",
  appId: "1:649600460730:web:161986e8dd6cf72dac9f83",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
