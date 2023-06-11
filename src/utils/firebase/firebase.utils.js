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
} from 'firebase/auth';

import { 
  getFirestore,
  doc,
  getDocs,
  setDoc,
  collection,
  writeBatch,
  query,
} from "firebase/firestore";



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


export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

export const db = getFirestore();


//  Function for Firing-off Data to the FireStore DataBase (NoSQL)
export const addCollectionAndDocuments = async ( collectionKey, objectsToAdd ) => {
  const batch = writeBatch(db);
  const collectionRef = collection(db, collectionKey);
  
  //creating the batches to fire off - key is the title, the object is the object itself
  objectsToAdd.forEach((object) => {
     const docRef = doc(collectionRef, object.title.toLowerCase());
     batch.set(docRef, object);
  });

  //waiting for the commit - thus we know it's been successfully pushed to the db
  await batch.commit();
  console.log('done');
};


/*PRE-REDUX 
  Function for retrieving the data in the FireStore Database
--------------------------------------------------------------
export const getCategoriesAndDocuments = async () => {
  //fetching the data
  const collectionRef = collection(db, 'product-categories');
  const q = query(collectionRef);

  //defining the data
  const querySnapshot = await getDocs(q);

  //manipulating the data into the format we want
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});

  //Return the catergory map
  return categoryMap;
};

*/


//  Function for retrieving the data in the FireStore Database
export const getCategoriesAndDocuments = async () => {
  //fetching the data
  const collectionRef = collection(db, 'product-categories');
  const q = query(collectionRef);

  //defining the data
  const querySnapshot = await getDocs(q);

  //manipulating the data into the format we want
  return querySnapshot.docs.map((docSnapshot) => docSnapshot.data());

};


// Creating a user from the Google authentication 
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDocs(userDocRef);

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
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
};

// SIGN-UP - Creating a user from the Email&Password sign-up
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

// SIGN-IN:  Signing a user in with existing Email&Password
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

// SIGN-OUT:
export const signOutUser = async () => await signOut(auth);

//Observer
export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);