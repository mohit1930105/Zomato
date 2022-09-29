import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDEnE8uIwMQbsktFikHSeQJWulHvEtnFZ0",
  authDomain: "mohit1-380f9.firebaseapp.com",
  projectId: "mohit1-380f9",
  storageBucket: "mohit1-380f9.appspot.com",
  messagingSenderId: "666145476448",
  appId: "1:666145476448:web:2bf8818a7f4d7fc3c25805"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.storage();
export { db };