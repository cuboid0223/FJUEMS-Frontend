import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBmD0hW8c3J2b65xPZMq4hiJUV7DrgXTl0",
  authDomain: "fjuems.firebaseapp.com",
  databaseURL: "https://fjuems.firebaseio.com",
  projectId: "fjuems",
  storageBucket: "fjuems.appspot.com",
  messagingSenderId: "587697445048",
  appId: "1:587697445048:web:2bb3aee3f5be7a6611bc4d",
  measurementId: "G-WDZF6374DD",
});

const db = firebaseApp.firestore();

export default db;

//
