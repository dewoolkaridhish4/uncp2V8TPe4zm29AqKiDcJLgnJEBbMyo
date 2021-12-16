import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyB1uUADbKkuXpryA8n0kchTxoC51eOCnK0",
  authDomain: "pro---58-f2705.firebaseapp.com",
  databaseURL: "https://pro---58-f2705-default-rtdb.firebaseio.com",
  projectId: "pro---58-f2705",
  storageBucket: "pro---58-f2705.appspot.com",
  messagingSenderId: "352868525772",
  appId: "1:352868525772:web:1bbb6bf370fa891fcb4469"
};
firebase.initializeApp(firebaseConfig);

export default firebase.database()