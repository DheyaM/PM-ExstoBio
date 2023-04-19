import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDV3CMaPIUjfxH9I9Q3pPH7C8LTQmG2lMY",
  authDomain: "exstobio.firebaseapp.com",
  projectId: "exstobio",
  storageBucket: "exstobio.appspot.com",
  messagingSenderId: "875612237867",
  appId: "1:875612237867:web:042349d8605975e5c93a6e",
  measurementId: "G-20EFMHT5TZ"
};

// Initialize Firebase
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}else{
  firebase.app();
}

var db = firebase.firestore();
 
export default db;
