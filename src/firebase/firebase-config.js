import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyB1kGwRNF-8slokGA5HkWIcyprRxQhQmj8",
    authDomain: "react-journal-app-8a732.firebaseapp.com",
    databaseURL: "https://react-journal-app-8a732.firebaseio.com",
    projectId: "react-journal-app-8a732",
    storageBucket: "react-journal-app-8a732.appspot.com",
    messagingSenderId: "764362482569",
    appId: "1:764362482569:web:f5a2375fa6114755c4b758"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}