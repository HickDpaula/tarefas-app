import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCCbUdrV7fsmfoTlxItz5-2SOAYEtAebWc",
    authDomain: "curso-67589.firebaseapp.com",
    projectId: "curso-67589",
    storageBucket: "curso-67589.appspot.com",
    messagingSenderId: "750240541890",
    appId: "1:750240541890:web:a95e03c3302026e5389f5b",
    measurementId: "G-6YG7XJX78D"
  };

  const firebaseApp = initializeApp(firebaseConfig);

  const db = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp);

  export {db, auth};