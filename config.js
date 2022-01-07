import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
 //Add configuration here
 apiKey: "AIzaSyDIAqADG5TCo8ziCYJi02XoobrgDq0NcRE",
  authDomain: "c-71-ef93e.firebaseapp.com",
  projectId: "c-71-ef93e",
  storageBucket: "c-71-ef93e.appspot.com",
  messagingSenderId: "345709931133",
  appId: "1:345709931133:web:cb126b4b36daabe0cd9f14"
 
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

