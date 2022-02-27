// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyD1oK56jhbgLbmZuzHmHgm26H8S2u2RHnE",
	authDomain: "deco-time.firebaseapp.com",
	projectId: "deco-time",
	storageBucket: "deco-time.appspot.com",
	messagingSenderId: "853136905931",
	appId: "1:853136905931:web:65ef4af0aa5d240ddc2d4e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
