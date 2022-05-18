import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAev3wOW6uqL6nR1clFssJB6IJFpAFdmRs",
    authDomain: "ecommerce-wheelies2.firebaseapp.com",
    projectId: "ecommerce-wheelies2",
    storageBucket: "ecommerce-wheelies2.appspot.com",
    messagingSenderId: "705591868006",
    appId: "1:705591868006:web:fa5013a19b063ae68fcba7"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)