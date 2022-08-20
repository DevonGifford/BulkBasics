import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyB-gtBHLGq1wnqWYFNudEpQk5WGqolGHUo",
    authDomain: "ecommerce-project-a7696.firebaseapp.com",
    projectId: "ecommerce-project-a7696",
    storageBucket: "ecommerce-project-a7696.appspot.com",
    messagingSenderId: "1076057083548",
    appId: "1:1076057083548:web:bb18bbc5399ea3513ca759"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  console.log(userAuth);
};

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);