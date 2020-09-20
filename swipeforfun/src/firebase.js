import firebase from "firebase";


var firebaseConfig = {
  apiKey: "AIzaSyB2rzGlSRBmOKVofggw2J5gIFnwQM0Oa7M",
  authDomain: "vidsforfun-43c34.firebaseapp.com",
  databaseURL: "https://vidsforfun-43c34.firebaseio.com",
  projectId: "vidsforfun-43c34",
  storageBucket: "vidsforfun-43c34.appspot.com",
  messagingSenderId: "131526784457",
  appId: "1:131526784457:web:7bfc92fa738e2e679ae418",
  measurementId: "G-PTEDNNC5SL"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
