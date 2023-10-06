
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyD_h7zEzX-ntjsFU6Vrtu2-A2NhIJcZWno",
  authDomain: "event-management-55395.firebaseapp.com",
  projectId: "event-management-55395",
  storageBucket: "event-management-55395.appspot.com",
  messagingSenderId: "151225606111",
  appId: "1:151225606111:web:25a5e53c0e354f01c7ae6a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);