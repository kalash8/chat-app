import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const config = {
  apiKey: 'AIzaSyB_XY_plANyqAeoQPOYpxa9Sk5YXfbc-4g',
  authDomain: 'chat-web-app-a694a.firebaseapp.com',
  databaseURL: 'https://chat-web-app-a694a-default-rtdb.firebaseio.com',
  projectId: 'chat-web-app-a694a',
  storageBucket: 'chat-web-app-a694a.appspot.com',
  messagingSenderId: '958704637215',
  appId: '1:958704637215:web:87ebc5db01b71e438a0c2a',
};

const app = firebase.initializeApp(config);

export const auth = app.auth();
export const database = app.database();
export const storage = app.storage();
