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




# How I built this:  

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

<br><br>

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

<br><br>

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
<br><br>    

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

4.  ##### Additionally, installed a package to handle the import of SVG Files
    -  `npm install vite-plugin-svgr`
    -   Updated the vite.config.js

<br><br>


### Experimenting with a Google Redirect Sign in 

<hr> 

1. #### Importing `GoogleRedirect` from `firebase/auth` into utils

2. #### Setting up Sign-in Component
    -  Using `useEffect` Hook from `react`
    -  Using `getRedirectResult` from `firebase/auth`
    -  Amended the SignIn method to incorporate the above

<br><br>

### Setting up email & password - sign-up & sign-in

<hr>

1.  ##### Adding a new provider in FireStore 

2.  ##### Creating new sign-up component 

3.  ##### Creating new sign-in component 

4.  ##### Refactoring Buttons into seperate component

4.  ##### Refactoring Form-inputs into seperate component

5.  ##### Renaming Sign-in to Authentication 

<br><br>

### Adding Context - using react-context

<hr>

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


<br><br>

### Adding Sign-Out Functionality 

<hr>

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

<br><br>

###  Just as I finished this I learned read about Observer's and onAuthStateChange

<hr>

[onAuthStateChanged](https://firebase.google.com/docs/auth/web/manage-users#get_the_currently_signed-in_user)

This is actually essential otherwise the user will have this unwanted persistent-signed-in-state - i.e. the user will remain signed-in, even if we refresh the page.

The problem being it will appear if we have to sign-in again but in the console if we log our user, it will show the last signed in user.

Additionally we dont need to hook into the sign and sign out components any longer and therefore don't have to re-run all those fucntions on a change - instead our onAuthStateChange listener will do this for us.  

Ultimatly saving some computing power.  Wish I read about this before coding all that. lol


1.  ##### In the fireBase utils file; 
    - imported this on AuthChange 
    - created an export for it

2.  ##### In the user.context file;
    - added the `useEffect` Hook 
    - added new functions from `firebase.utils`
    - created a hook that will track the authChange;
        - Needed to prevent a memory leak
        - Needed to use effect cleanup to dispose when no longer needed.

3.  ##### In the sign-in and sign-up components;
    no longer require to run the functions everytime a change in sign-in occurs , therefore;
    - removed all `context` imports
    - removed all `setCurrentUser` functions

    - Google sign in function;
        - removed `createUserDocumentFromAuth`
        - added this function to the user.context
        (the above can't be done with sign-up)

4.  ##### In the Navigation components;
    - no longer required to `setCurrentUser`
    - removed `signOutHandler` function


<br><br>