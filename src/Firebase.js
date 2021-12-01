import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAITpFDEfumuBmUP3Nc-VLGawQ-tXQr6G0",
  authDomain: "react-ts-fire-marvel.firebaseapp.com",
  projectId: "react-ts-fire-marvel",
  storageBucket: "react-ts-fire-marvel.appspot.com",
  messagingSenderId: "381374514982",
  appId: "1:381374514982:web:82a00d763c6c7bd7e7a3e7",
  measurementId: "G-5M26JWCD68"
};

firebase.initializeApp(firebaseConfig);
export default firebase;
export const db = firebase.firestore();