import firebase from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDsQ5kkVK14f6Ms7K38mFYdj7d_ibqJ0lI",
    authDomain: "lenny-s-cookbook.firebaseapp.com",
    projectId: "lenny-s-cookbook",
    storageBucket: "lenny-s-cookbook.appspot.com",
    messagingSenderId: "31487924796",
    appId: "1:31487924796:web:f866080c410e11bda1c139"
  };


//init firebase
firebase.initializeApp(firebaseConfig)

//init services
const projectFirestore =   firebase.firestore()

export { projectFirestore }