import * as firebase from 'firebase';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyA8OTSwHv6KddkxsmeoB9KX1M36Rl191ps",
    authDomain: "anotherdb-bdb7a.firebaseapp.com",
    databaseURL: "https://anotherdb-bdb7a.firebaseio.com",
    projectId: "anotherdb-bdb7a",
    storageBucket: "anotherdb-bdb7a.appspot.com",
    messagingSenderId: "980601162508",
    appId: "1:980601162508:web:11b0cc4ba7d7b517461729"
};

if (firebase.apps.length === 0) {   
    firebase.initializeApp(config);
}

export const db = firebase.firestore()

export default firebase
