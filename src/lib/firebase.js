import Firebase from "firebase/compat/app";
import firebaseAuthServices from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth"
import "firebase/compat/storage";

const config = {
  apiKey: "AIzaSyBh2mSL89OofnoyANgs6NTF3vnfEp3S2iI",
  authDomain: "instagramm-1f58d.firebaseapp.com",
  databaseURL: "https://instagramm-1f58d-default-rtdb.firebaseio.com",
  projectId: "instagramm-1f58d",
  storageBucket: "instagramm-1f58d.appspot.com",
  messagingSenderId: "132502149494",
  appId: "1:132502149494:web:ae08e22b36f4df51fac257"
}

const firebase = Firebase.initializeApp(config);

const { FieldValue } = Firebase.firestore;

export const storage = firebase.storage();
export { firebase, FieldValue };
