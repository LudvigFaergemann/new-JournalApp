import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import firebase from "firebase/compat/app";
import "firebase/compat/storage";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqKB47eAZj75z66JyyXZBJ77IuRyuBniw",
  authDomain: "journalapp-ludvig.app.com",
  projectId: "journalapp-ludvig",
  storageBucket: "journalapp-ludvig.appspot.com",
  messagingSenderId: "158638895767",
  appId: "1:158638895767:web:b4ece042363d77b2c2efd2",
};

firebase.initializeApp(firebaseConfig);
const auth = getAuth();

export { auth, firebase };
