import firebase from 'firebase/app';

import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAj9Iv3Vm5L-NSumWSPtX1vClePz2k_R8s",
  authDomain: "ckd--project.firebaseapp.com",
  projectId: "ckd--project",
  storageBucket: "ckd--project.appspot.com",
  messagingSenderId: "892997290405",
  appId: "1:892997290405:web:4606cdb5db0ba868b4c04c",
  measurementId: "G-VMQKDQ2QJM",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

if (window.location.hostname === 'localhost') {
  // auth.useEmulator('http://localhost:9099');
  // db.useEmulator('localhost', '8080');
}

export { db, auth };
export default firebase;
