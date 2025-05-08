import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB8A3F1VrnPFdZZL4JojpBhCgiYf9BZFj4",
  authDomain: "proyecto-react-e45a6.firebaseapp.com",
  projectId: "proyecto-react-e45a6",
  storageBucket: "proyecto-react-e45a6.firebasestorage.app",
  messagingSenderId: "751110048501",
  appId: "1:751110048501:web:c3f4829643043ff31193bc"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);