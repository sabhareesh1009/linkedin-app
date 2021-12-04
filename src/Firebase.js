import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCARqSv5j-wQKfvHA_3q3KaM7if-b6-iHQ",
  authDomain: "linkedin-clone-91491.firebaseapp.com",
  projectId: "linkedin-clone-91491",
  storageBucket: "linkedin-clone-91491.appspot.com",
  messagingSenderId: "401501244676",
  appId: "1:401501244676:web:64e675597d7b4513f89451",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
