import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import {
  initializeFirestore,
  persistentLocalCache,
  persistentMultipleTabManager,
} from "firebase/firestore";
import { getStorage } from "firebase/storage";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBxTeESdTLGtGRhiBBwO5ihjHl_N0g1GRE",
  authDomain: "sarjana-geprek.firebaseapp.com",
  projectId: "sarjana-geprek",
  storageBucket: "sarjana-geprek.firebasestorage.app",
  messagingSenderId: "311081600749",
  appId: "1:311081600749:web:fce8dbf8c0fa098eda2ee4",
  measurementId: "G-YG8M3E0SDZ",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const storage = getStorage(app);
const firestore = initializeFirestore(app, {
  localCache: persistentLocalCache({
    tabManager: persistentMultipleTabManager(),
  }),
});

let analytics;
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

export {
  app,
  analytics,
  auth,
  firestore,
  storage,
  googleProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
};
