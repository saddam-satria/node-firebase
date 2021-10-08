const { initializeApp } = require('firebase/app');
const firestore = require('firebase/firestore');
require('dotenv').config();

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: 'fir-practice-b5082.appspot.com',
  messagingSenderId: '118970666355',
  appId: '1:118970666355:web:fd5ca2238da7fcc2018906',
};

const firebaseApp = initializeApp(firebaseConfig);
const db = firestore.getFirestore(firebaseApp);
const studentsCollection = firestore.collection(db, 'students');

module.exports = { studentsCollection, firestore };
