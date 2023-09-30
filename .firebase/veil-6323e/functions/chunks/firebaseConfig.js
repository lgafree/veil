import { getApps, initializeApp, getApp, deleteApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAmAzwLY6aNWDz5YMqTmnmsxuID0-x_ndM",
  authDomain: "veil-6323e.firebaseapp.com",
  projectId: "veil-6323e",
  storageBucket: "veil-6323e.appspot.com",
  messagingSenderId: "946700939013",
  appId: "1:946700939013:web:557fa104bc89b16dbbd16c",
  measurementId: "G-0QJKZEPH09"
};
let firebaseApp;
if (!getApps().length) {
  firebaseApp = initializeApp(firebaseConfig);
} else {
  firebaseApp = getApp();
  deleteApp(firebaseApp);
  firebaseApp = initializeApp(firebaseConfig);
}
const db = getFirestore(firebaseApp);
getAuth(firebaseApp);
export {
  db as d
};
