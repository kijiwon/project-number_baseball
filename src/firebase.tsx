// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBvWyr1CK40qd3J8eDTAJnhMHDIgzrU_sI',
  authDomain: 'numberbaseball-bea96.firebaseapp.com',
  projectId: 'numberbaseball-bea96',
  storageBucket: 'numberbaseball-bea96.appspot.com',
  messagingSenderId: '305996010773',
  appId: '1:305996010773:web:01abd48db4c1a35d17c51c',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
