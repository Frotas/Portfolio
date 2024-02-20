import { initializeApp } from "firebase/app";
import { initializeFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.GCP_FIREBASE_APIKEY,
  authDomain: process.env.GCP_FIREBASE_AUTHDOMAIN,
  projectId: process.env.GCP_FIREBASE_PROJECTID,
  storageBucket: process.env.GCP_FIREBASE_STORAGEBUKET,
  messagingSenderId: process.env.GCP_FIREBASE_MESSASINGSENDERID,
  appId: process.env.GCP_FIREBASE_APPID,
  measurementId: process.env.GCP_FIREBASE_MEASUREMENTID,
};

const app = initializeApp(firebaseConfig);
export const database = initializeFirestore(app, {
  localCache: {
    kind: "memory",
  },
});
