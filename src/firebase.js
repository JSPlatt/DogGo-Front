// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDLxzy4ds1Snw7PB5yjRr9ccjm5Kja-frU",
    authDomain: "doggo-2e792.firebaseapp.com",
    projectId: "doggo-2e792",
    storageBucket: "doggo-2e792.appspot.com",
    messagingSenderId: "214525843866",
    appId: "1:214525843866:web:fce21023f9accad3930223",
    measurementId: "G-8KMD38Q80W"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth =firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export { auth, provider }
  export default db