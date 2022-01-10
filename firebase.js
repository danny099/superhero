// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDl7EgYqbtnWdYcyG2OqQC-VdNCMd4uQUA",
  authDomain: "superherosauth.firebaseapp.com",
  projectId: "superherosauth",
  storageBucket: "superherosauth.appspot.com",
  messagingSenderId: "1042757804344",
  appId: "1:1042757804344:web:6f9cb1b4495d06cbd021cd"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };
