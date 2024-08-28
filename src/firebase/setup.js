import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const configs = {
    apiKey: "AIzaSyAVLY6vAwQgMX_vDQES467kh3__agg74M4",
    authDomain: "rakamin-mini-project.firebaseapp.com",
    projectId: "rakamin-mini-project",
    storageBucket: "rakamin-mini-project.appspot.com",
    messagingSenderId: "163747837384",
    appId: "1:163747837384:web:5972400bc1993447a6fcfd"
}

const firebaseConfig = configs;
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider;