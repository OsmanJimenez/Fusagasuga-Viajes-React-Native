import firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyB1O_b3cXj6Yc1VOMv8M8O_Jpex-5Q-0oQ",
    authDomain: "fusagasuga-viajes.firebaseapp.com",
    databaseURL: "https://fusagasuga-viajes.firebaseio.com",
    projectId: "fusagasuga-viajes",
    storageBucket: "fusagasuga-viajes.appspot.com",
    messagingSenderId: "722435102032",
    appId: "1:722435102032:web:f3649fdce7e4491eb50855",
    measurementId: "G-YBVSQD59S5"
  };

export const firebaseApp = firebase.initializeApp(firebaseConfig);