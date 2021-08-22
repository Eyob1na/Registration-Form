import firebase from "firebase";

const firebaseApp= firebase.initializeApp({

    apiKey: "AIzaSyCHrAcCuGKrUI_SMAiu9R6bZGOC9R8mdQM",
    authDomain: "etflix-1bafc.firebaseapp.com",
    projectId: "etflix-1bafc",
    storageBucket: "etflix-1bafc.appspot.com",
    messagingSenderId: "1047174093104",
    appId: "1:1047174093104:web:5b0988dc58e50b9db1d0f5"
    
});

const db =firebaseApp.firestore();

export { db };