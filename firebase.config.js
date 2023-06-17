import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

export const firebaseConfig = {
    apiKey: "AIzaSyDBUDh68FyDPVLvceBSfVlRJ6ET3M3so3I",
    authDomain: "twinmarket-b21d9.firebaseapp.com",
    databaseURL: "https://twinmarket-b21d9-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "twinmarket-b21d9",
    storageBucket: "twinmarket-b21d9.appspot.com",
    messagingSenderId: "1022037886871",
    appId: "1:1022037886871:web:24194cedf3b3020de526d2"
};

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig)
}
else {
    firebase.app()
}

