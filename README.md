# Ecommerce_Showcase (in progress)
This is one of my portfolio projects - a fully fledged ecommerce website.
This is a full stack app (MERN stack) using Firebase.

## The Goal of this project

Firstly I am using this project to further familiarize myself with React Library - However there are a few new things I want to familiarize myself with, namely:

<li> Style Components
<li> Firebase
<li> Stripe API & Context API
<li> Redux & Redux Saga & Thunk
<li> GraphQL & Apollo


Further there are a few things I want to do to simulate some real world practice.
<li> Initially build this with Vanilla JavaScript and later convert it into a TypeScript Project
<li> Initially style this project with Styled Components and then later convert to JS library
<li> I want to practice writing some tests for this project with Jest and Snapshot Testing




## How I built this:  

This is supposed to be a sort of "Code with me - Diary".
As well as a way for me to remember what I have done while building this project. 

### Scaffolding the Vite/React Project
<hr>

[Vite doc's](https://vitejs.dev/guide/)

1.  #### Using Vite (pronounced 'Veet'🤔) 
    `npm create vite@latest`

2.  #### Clearing up some of the unnecessary and boiler plate code

3.  #### Adding and setting up SASS - Syntactically Awesome Style Sheets
    `npm install sass`

4.  #### Setting up the most essential folder structure for components

### Setting up Routing with React-Router (v6.4)
<hr>

[React-Router Doc's](https://reactrouter.com/en/main)

1. #### Installilng the package
        -  `npm install react-router-dom localforage match-sorter sort-by`
        -   fixing any conflicts from `npm` audit

2.  #### Creating a Routes Folder and transferring the 'home' 

3.  #### In the `App.jsx
    - Importing { Routes, Route } from 'react-router-dom' ` 
    - Wrapping everything in Routes 
    - Creating a Route path to the Home page 

4.  #### In the `Main.jsx`
    - Importing `{ BrowserRouter } from 'react-router-dom'`
    - wrapping the "App" with `BrowserRouter`


### Basic FireBase Setup 
<hr>

[Cloud FireBase Doc's](https://firebase.google.com/docs/firestore)

1.  #### Created a Firebase project 
    registered the Ecommerce-projec/app in the FireBase web-console

2.  #### Installed the SDK and initialized Firebase
        -   npm install firebase
        -   Added a `Utils` Folder with `FireBase folder` 
        -   Added file called `firebase.utils`

3.  #### Created access for Firebase in the app - via  `firebase.utils`
        -   import { initializeApp } from 'firebase/app';
        -   Setting up authentication
            Import {} from `firebase/auth`;
                -  getAuth
                -  signInWithRedirect,
                -  signInWithPopup,
                -  GoogleAuthProvider,

        -   Created firebaseConfig with info from FireBase web-app
        -   Initialized the App with firebaseConfig
        -   Enforcing account selection 
        -   In the Firebase console - enabled the Google Sign in method

4.  #### Setting up the `sign-in route` page                              
        -   import {signInWithGooglePopup, createUserProfileDocument} from 'firebase.utils';        
        -   Creating Async Sign-in Function/Method to get access token
    

### Setting up Firestore Data Model

<hr>

[Cloud Firestore Doc's](https://firebase.google.com/docs/firestore)
Obviously we are just using FireBase for authentication.  To be able to store the users, I will need a database.
Enter Cloud FireStore.

1.  ##### Created a production FireStore database 
    via web-console and based in EU
    amended the rules 

2.  ##### Imported the necessary methods into Firebase utils 
    -  { getFirestore,  doc, getDoc,  setDoc }

3.  ##### Created a method to store users data from authentication
    -  used an if statement with try block, 
       so as if user does not exist do 'x' or else return user.
    - used a catch block , so as if an error occurs console.log the error.
    - logging date data for creation of new users (new Data()).

#### Additionally, installed a package to handle the import of SVG Files
    -  `npm install vite-plugin-svgr`
    -   Updated the vite.config.js


### Experimenting with a Google Redirect Sign in 

1. #### Importing `GoogleRedirect` from `firebase/auth` into utils

2. #### Setting up Sign-in Component
    -  Using `useEffect` Hook from `react`
    -  Using `getRedirectResult` from `firebase/auth`
    -  Amended the SignIn method to incorporate the above


### Setting up email & password - sign-up & sign-in

1.  ##### Adding a new provider in FireStore 

2.  ##### Creating new sign-up component 

3.  ##### Creating new sign-in component 

4.  ##### Refactoring Buttons into seperate component

4.  ##### Refactoring Form-inputs into seperate component

5.  ##### Renaming Sign-in to Authentication 



### Adding Context - using react-context

The users profile will be present in many components throughout the app
(Such as a Signing-in, profile management, shopping cart etc.)
Will require having to have access to the 'user' context through out the app

1.  ##### Creating a Context Folder
    -  Created a user.context.jsx file, using; 
        -  useState  
        -  createContext

    -  Created UserContext to store the users data (& null as defaults),
       as well as export into components.

    -  Create `userProvider` to pass this into/wrap the entire app. 
    -  Obviously wrapped the app inside <userProvider> in Main.jsx
    
2. ##### Giving Sign-in Form access to the context
    -  When 'user' signs in, store the 'user' into the context
    -  Added `useContext` &  imported the `context` object
    -  Added the `SetCurrentUser` functionality to the Sign-in method
    -  Running `SetCurrent` user if sign-in promise returns a 'user'.
    -  (Both For google and email sign in)  

3.  ##### Accessing Context in the Navigation component 
    -  Added `UseContext` & imported the `context` object
    -  Added the currentUser = useContext(UserContext)

4.  ##### Giving Sign-up Form access to the context
    -  When 'user' creates an account, store 'user' into the context
    -  Added `useContext` &  imported the `context` object
    -  Added the `SetCurrentUser` functionality to the Sign-in method
    -  Running `SetCurrent` user if sign-in promise returns a 'user'

5.  ##### Updating Navigation bar with conditional (ternary)
    -  If user signed in, 'sign-in' link should turn into 'sign-out'
    -  Simple Conditional (ternary) operator in the jsx

### Adding Sign-Out Functionality 

Obviously once the user is signed in, they will need to be able to sign-out.

1.  #####  Adding Sign-Out Functionality in FireBase Utils
    [Sign-Out Doc's](https://firebase.google.com/docs/reference/js/auth#signout)
    -  imported `signOut` from firebase/auth
    -  Created an export for `signOutUser`


2.  #####  Import signout user into Navigation component 
    -  Imported the `SignOut` Function from `FireBase Utils`
    -  Updated the conditional sign-out link with an onClick with `signOutUser`


3.  ##### Created Sign-Out Handler Function 
    -  await `signOutUser`
    -  then `setCurrentUser` = null;  
    -  updated the sign-out link to use the `signOutHandler`


4.  #####  Just as I finished this I learned read about Observer's and onAuthStateChange