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

### Scaffolding the Vite Project
<hr>

[Vite doc's](https://vitejs.dev/guide/)


1.  Using Vite (pronounced 'Veet'🤔) 
    `npm create vite@latest`

2.  Clearing up some of the unnecessary and boiler plate code

3.  Adding and setting up SASS - Syntactically Awesome Style Sheets
    `npm install sass`

4.  Setting up the most essential folder structure for components

### Setting up Routing with React-Router (v6.4)
<hr>

[React-Router Doc's](https://reactrouter.com/en/main)

1. Installilng the package
        -  `npm install react-router-dom localforage match-sorter sort-by`
        -   fixing any conflicts from `npm` audit

2.  Creating a Routes Folder and transferring the 'home' 

3.  In the `App.jsx
`    - Importing { Routes, Route } from 'react-router-dom' and 
    - Wrapping everything in Routes 
    - Creating a Route path to the Home page 

4.  In the `Main.jsx`
    - Importing `{ BrowserRouter } from 'react-router-dom'`
    - wrapping the "App" with `BrowserRouter`


### Basic FireBase Setup 
<hr>

[Cloud FireBase Doc's](https://firebase.google.com/docs/firestore)

1.  Created a Firebase project and registered the Ecommerce-projec/app in the FireBase web-console

2.  Installed the SDK and initialized Firebase
        -   `npm install firebase`
        -   Adding a `Utils` Folder with `FireBase folder` and a file called `firebase.utils`

3.  Created access for Firebase in the app - via  `firebase.utils`
        -   <code>import { initializeApp } from 'firebase/app';</code>
        -   Setting up authentication
            <code>Import {} from `firebase/auth`;</code>
                -  `getAuth`
                -  `signInWithRedirect,`
                -  `signInWithPopup,`
                -  `GoogleAuthProvider,`
        -   Created firebaseConfig with info from FireBase web-app
        -   Initialized the App with firebaseConfig
        -   Enforcing account selection 
        -   In the Firebase console - enabled the Google Sign in method

4.  Setting up the `sign-in route` page                              
        -   <code>import { signInWithGooglePopup, createUserProfileDocument } from 'firebase.utils';</code>
        -   Creating Async Sign-in Function/Method to get access token
    

### Setting up Firestore Data Model

<hr>

[Cloud Firestore Doc's](https://firebase.google.com/docs/firestore)

Obviously we are just using FireBase for authentication.  To be able to store the users, I will need a database.
Enter Cloud FireStore.

1.  Created a production FireStore database in the web-console and amended the rules - based in EU

2.  Imported the necessary methods into Firebase utils (`{ getFirestore,  doc, getDoc,  setDoc }`)

3.  Created a method to store users data from authentication
        - used an if statement with try block, so as if user does not exist do 'x' or else return user.
        - used a catch block , so as if an error occurs console.log the error.
        - logging date data for creation of new users (new Data()).

#### Additionally, installed a package to handle the import of SVG Files
    -  `npm install vite-plugin-svgr`
    -   Updated the vite.config.js

