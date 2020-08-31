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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
