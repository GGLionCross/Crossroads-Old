// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/database";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXlfHiMaX5BmCmfnHwS9E14_ohGvFmO3Q",
  authDomain: "crossroads-f170f.firebaseapp.com",
  databaseURL: "https://crossroads-f170f-default-rtdb.firebaseio.com",
  projectId: "crossroads-f170f",
  storageBucket: "crossroads-f170f.appspot.com",
  messagingSenderId: "818271246635",
  appId: "1:818271246635:web:b7e4b9f4e0d86b6977cd6e",
  measurementId: "G-KEFZLL5RPG"
};

let firebaseApp = firebase.initializeApp(firebaseConfig);
let firebaseAuth = firebaseApp.auth();
let firebaseDb = firebaseApp.database();
let pGoogle = new firebase.auth.GoogleAuthProvider();

export { firebaseAuth, firebaseDb, pGoogle };