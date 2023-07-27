import { initializeApp } from 'firebase/app';
import { initializeFirestore } from 'firebase/firestore';

const firebaseConfig = {
      apiKey: "AIzaSyBRTf7LVJO1nSXID1HF9QwE3FyPOuv1-3s",
      authDomain: "chatappv2-4f842.firebaseapp.com",
      databaseURL: "https://chatappv2-4f842-default-rtdb.firebaseio.com",
      projectId: "chatappv2-4f842",
      storageBucket: "chatappv2-4f842.appspot.com",
      messagingSenderId: "249467052721",
      appId: "1:249467052721:web:ef0aa24af9d6fb088b7890"
    };
  
const appnew = initializeApp(firebaseConfig);


const db = initializeFirestore(appnew, {experimentalForceLongPolling: true});

export {
    db,
    appnew
};