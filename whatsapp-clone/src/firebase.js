import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBU8p_5HNV1hYPRN19UM9xNU77_EdxBeKQ",
    authDomain: "whats-app-clone-279b5.firebaseapp.com",
    databaseURL: "https://whats-app-clone-279b5-default-rtdb.firebaseio.com/",
    projectId: "whats-app-clone-279b5",
    storageBucket: "whats-app-clone-279b5.appspot.com",
    messagingSenderId: "909037458989",
    appId: "1:909037458989:web:8d62442a939194261b4aa4",
    measurementId: "G-DXRDX956XH"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();


  export { auth,provider};
  export default db;