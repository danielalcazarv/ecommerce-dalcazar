import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBJZOI0N4MzzKl7yInlmFEQTF7Ou21QngY",
    authDomain: "ecommerce-wheelies.firebaseapp.com",
    projectId: "ecommerce-wheelies",
    storageBucket: "ecommerce-wheelies.appspot.com",
    messagingSenderId: "916546639130",
    appId: "1:916546639130:web:c42451a6a336cba6cac8a3"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)