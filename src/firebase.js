import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCOoquLockIxYZVE5nreKPDMDbVTh6KT-U",
  authDomain: "not-yt.firebaseapp.com",
  projectId: "not-yt",
  storageBucket: "not-yt.appspot.com",
  messagingSenderId: "713650135776",
  appId: "1:713650135776:web:3612f40b495bd9e6ef6685",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
