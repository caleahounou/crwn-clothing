import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyAHfDZZgc2rYi0FZORm6a2T8CpwaW9SVdw",
    authDomain: "crwn-db-d2c40.firebaseapp.com",
    databaseURL: "https://crwn-db-d2c40.firebaseio.com",
    projectId: "crwn-db-d2c40",
    storageBucket: "crwn-db-d2c40.appspot.com",
    messagingSenderId: "323004517086",
    appId: "1:323004517086:web:af4010f2c89b5ee7a2904f"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const { displayName, email } = userAuth;
        const createAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createAt,
                ...additionalData
            })
        }catch(error){
            console.log('error creating user', error.message);
        }
    }
    return userRef;

    // console.log(snapShot);
    // console.log(firestore.doc('users/J87GjbTFy9TPExa1I8y7TrdPM0K3'))
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;