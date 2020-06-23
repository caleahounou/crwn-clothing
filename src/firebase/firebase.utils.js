import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyAg_LxLZGV55rSK0Kl9EEp4FbjAhBwcxUU",
    authDomain: "crwn-db-f6387.firebaseapp.com",
    databaseURL: "https://crwn-db-f6387.firebaseio.com",
    projectId: "crwn-db-f6387",
    storageBucket: "crwn-db-f6387.appspot.com",
    messagingSenderId: "687806440079",
    appId: "1:687806440079:web:75bf19abb6211c47b406fa"
};


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;