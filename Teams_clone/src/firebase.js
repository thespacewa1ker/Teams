import firebase from 'firebase/app';
import 'firebase/auth';        // for authentication
import 'firebase/storage';     // for storage
import 'firebase/database';    // for realtime database
import 'firebase/firestore';   // for cloud firestore

const firebaseConfig = {
  apiKey: "AIzaSyAqI6-XItMGpJUcMVzgBj5XecX-0SSs5O4",
  authDomain: "teams-firebase.firebaseapp.com",
  projectId: "teams-firebase",
  storageBucket: "teams-firebase.appspot.com",
  messagingSenderId: "628632913215",
  appId: "1:628632913215:web:c135f293d7bff8e89eff8a"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db