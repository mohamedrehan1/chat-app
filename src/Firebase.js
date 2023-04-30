import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage} from "firebase/storage";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIQYcKh_DOSEtbBBFvNeTGrxl7MJCDsIA",
  authDomain: "chat-app-cab93.firebaseapp.com",
  projectId: "chat-app-cab93",
  storageBucket: "chat-app-cab93.appspot.com",
  messagingSenderId: "819820760594",
  appId: "1:819820760594:web:15b7ddbeea189c00aa92cb"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
