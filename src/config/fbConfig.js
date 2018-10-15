import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCQ65QvrGOQnp9OmH3PgUelkDnPC0YxO2s",
  authDomain: "netninjareactwfirebase.firebaseapp.com",
  databaseURL: "https://netninjareactwfirebase.firebaseio.com",
  projectId: "netninjareactwfirebase",
  storageBucket: "netninjareactwfirebase.appspot.com",
  messagingSenderId: "19970744440"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase;