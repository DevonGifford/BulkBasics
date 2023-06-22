import { promises } from 'dns';
import { initializeApp } from 'firebase/app';

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
  NextOrObserver,
  UserCredential,
} from 'firebase/auth';

import { 
  getFirestore,
  doc,
  getDoc,
  getDocs,
  setDoc,
  collection,
  writeBatch,
  query,
  QueryDocumentSnapshot
} from "firebase/firestore";

import { Category } from '../../store/categories/categories.types';



const firebaseConfig = {
    apiKey: "AIzaSyB-gtBHLGq1wnqWYFNudEpQk5WGqolGHUo",
    authDomain: "ecommerce-project-a7696.firebaseapp.com",
    projectId: "ecommerce-project-a7696",
    storageBucket: "ecommerce-project-a7696.appspot.com",
    messagingSenderId: "1076057083548",
    appId: "1:1076057083548:web:bb18bbc5399ea3513ca759"
};

// eslint-disable-next-line no-unused-vars
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();


//  Function for Firing-off Data to the FireStore DataBase (NoSQL)
export type ObjectToAdd = {
  title: string;
};

export const addCollectionAndDocuments = async <T extends ObjectToAdd> ( 
  collectionKey: string, 
  objectsToAdd: T[]
  ): Promise<void> => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);
  
  //creating the batches to fire off - key is the title, the object is the object itself
  objectsToAdd.forEach((object) => {
     const docRef = doc(collectionRef, object.title.toLowerCase());
     batch.set(docRef, object);
  });

  //waiting for the commit - thus we know it's been successfully pushed to the db
  await batch.commit();
  console.log('upload complete');
};


//  Function for retrieving the data in the FireStore Database
export const getCategoriesAndDocuments = async (): Promise<Category[]> => {
  //fetching the data
  const collectionRef = collection(db, 'product-categories');
  const q = query(collectionRef);

  //defining the data
  const querySnapshot = await getDocs(q);

  //manipulating the data into the format we want
  return querySnapshot.docs.map(
    (docSnapshot) => docSnapshot.data() as Category
    );
};



// Creating a user from the Google authentication 
export type AdditionalInformation = {
  displayName?: string;
}

export type UserData= {
  createdAt: Date;
  displayName: string;
  email: string;
}

export const createUserDocumentFromAuth = async (
  userAuth: User,  //type comes from Firbase
  additionalInformation: AdditionalInformation = {} as AdditionalInformation
): Promise<QueryDocumentSnapshot<UserData> | void > => {
  if (!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log('error creating the user', error);
    }
  }

  return userSnapshot as QueryDocumentSnapshot<UserData>;
};



// SIGN-UP - Creating a user from the Email&Password sign-up
export const createAuthUserWithEmailAndPassword = async (email: string, password: string): Promise<UserCredential | void> => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};



// SIGN-IN:  Signing a user in with existing Email&Password
export const signInAuthUserWithEmailAndPassword = async (email: string, password: string): Promise<UserCredential | void> => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};



// SIGN-OUT:
export const signOutUser = async (): Promise<void> => await signOut(auth);



//Observer 
export const onAuthStateChangedListener = (callback: NextOrObserver<User> ) =>
  onAuthStateChanged(auth, callback);


//Creating a single check ( as opposed to a listener checking the state every tim user state updates)
export const getCurrentUser = (): Promise<User | null> => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        unsubscribe();
        resolve(userAuth);
      },
      reject
    );
  });
};