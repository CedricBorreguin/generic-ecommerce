import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCajuZTAGzvzRx4qzDG9pBMJv6YDLwlPWU',
  authDomain: 'generic-e-commerce.firebaseapp.com',
  databaseURL: 'https://generic-e-commerce.firebaseio.com',
  projectId: 'generic-e-commerce',
  storageBucket: 'generic-e-commerce.appspot.com',
  messagingSenderId: '70822437118',
  appId: '1:70822437118:web:206efa1ace14c0724a05af',
  measurementId: 'G-VM7NLZN2B1',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (e) {
      console.log(e);
    }

  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
