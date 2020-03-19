// firebase.js
import firebase from "firebase";

// Initialize Firebase
// USE YOUR CONFIG OBJECT
const firebaseConfig = {
    apiKey: "AIzaSyAXyvZKo-9LKaMPlENeo-HRoxKRMia-Buw",
    authDomain: "peers4help.firebaseapp.com",
    databaseURL: "https://peers4help.firebaseio.com",
    projectId: "peers4help",
    storageBucket: "peers4help.appspot.com",
    messagingSenderId: "88720997186",
    appId: "1:88720997186:web:b6718bb3be267ef637e6db",
    measurementId: "G-GC29HCFVB4"
};
firebase.initializeApp(firebaseConfig);

// this exports the CONFIGURED version of firebase
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;
