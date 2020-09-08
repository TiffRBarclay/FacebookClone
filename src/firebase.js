import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAlrPHhzgXGuNHFa1-NoOeP8ydJ0drKoaY",
  authDomain: "facebook-clone-f498b.firebaseapp.com",
  databaseURL: "https://facebook-clone-f498b.firebaseio.com",
  projectId: "facebook-clone-f498b",
  storageBucket: "facebook-clone-f498b.appspot.com",
  messagingSenderId: "630849970770",
  appId: "1:630849970770:web:90811a694cf7050661f58b",
  measurementId: "G-EG93HGR56W",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
