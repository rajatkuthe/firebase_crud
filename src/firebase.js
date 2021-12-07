import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAxstTagOviXfN1vOAVDseyp6OuwPmuZN4",
  databaseURL: "https://fir-crud-bd0bb-default-rtdb.firebaseio.com",
  authDomain: "fir-crud-bd0bb.firebaseapp.com",
  projectId: "fir-crud-bd0bb",
  storageBucket: "fir-crud-bd0bb.appspot.com",
  messagingSenderId: "34411073747",
  appId: "1:34411073747:web:5d208fbc021908f8ce8426"
};
  // Initialize Firebase
  var fireDb = firebase.initializeApp(firebaseConfig);
  
  export default fireDb.database().ref();


  