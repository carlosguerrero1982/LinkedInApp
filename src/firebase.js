// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyDSPJP06jhOZctM0teFw0-ma3Z3vJ8wwOQ",
    authDomain: "linkedinapp-34c84.firebaseapp.com",
    projectId: "linkedinapp-34c84",
    storageBucket: "linkedinapp-34c84.appspot.com",
    messagingSenderId: "112657933001",
    appId: "1:112657933001:web:24ebe7d808275b8ed6a318",
    measurementId: "G-F5JNYF9CMP"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  const auth=firebase.auth();

  export {db, auth};