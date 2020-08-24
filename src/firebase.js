import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCgdc5tRBOT5iTy7j9wO9XwmrV-JjEb6Zk",
    authDomain: "spotify-clone-53de3.firebaseapp.com",
    databaseURL: "https://spotify-clone-53de3.firebaseio.com",
    projectId: "spotify-clone-53de3",
    storageBucket: "spotify-clone-53de3.appspot.com",
    messagingSenderId: "638145093681",
    appId: "1:638145093681:web:ab32b863743efed61c7510",
    measurementId: "G-0MJ3ZSP131"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;