import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDntxpoi7DdmXCsEGix3QrQIAUtYB9KXO8",
  authDomain: "fireblog-a56d4.firebaseapp.com",
  projectId: "fireblog-a56d4",
  storageBucket: "fireblog-a56d4.appspot.com",
  messagingSenderId: "392293515376",
  appId: "1:392293515376:web:5893041c870cba759874b5",
  measurementId: "G-RWZK1ELTFQ",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
