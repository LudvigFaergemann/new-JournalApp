import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAqKB47eAZj75z66JyyXZBJ77IuRyuBniw",
    authDomain: "journalapp-ludvig.app.com",
    projectId: "journalapp-ludvig",
    storageBucket: "journalapp-ludvig.appspot.com",
    messagingSenderId: "158638895767",
    appId: "1:158638895767:web:b4ece042363d77b2c2efd2",
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { auth };
export default app;

