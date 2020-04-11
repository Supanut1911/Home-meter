import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/storage'

var firebaseConfig = {
    apiKey: "AIzaSyAVtcZs5PEcYQcBOvt27QBbir713n_LJTg",
    authDomain: "my-home-meter.firebaseapp.com",
    databaseURL: "https://my-home-meter.firebaseio.com",
    projectId: "my-home-meter",
    storageBucket: "my-home-meter.appspot.com",
    messagingSenderId: "498832576420",
    appId: "1:498832576420:web:acf8b41bf88a9eb337fb31",
    measurementId: "G-Z161JXK8T2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const database = firebase.database()
const storage = firebase.storage()

export { firebase, database, storage as default}