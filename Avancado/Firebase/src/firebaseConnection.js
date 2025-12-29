// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyDmYr4tn91yUUcF9ex8VlxiJSSB_WNAyyQ',
	authDomain: 'devcurso-a0c5c.firebaseapp.com',
	projectId: 'devcurso-a0c5c',
	storageBucket: 'devcurso-a0c5c.firebasestorage.app',
	messagingSenderId: '413820107880',
	appId: '1:413820107880:web:7976103dc7e22153a20fdd',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
