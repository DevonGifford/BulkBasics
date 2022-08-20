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

1.  Using Vite (pronounced 'Veet') 
    npm create vite@latest

2.  Clearing up some of the unnecessary and boiler plate code

3.  Adding and setting up SASS - Syntactically Awesome Style Sheets
    npm install sass

4.  Setting up the most essential folder structure for components

### Setting up Routing with React-Router (v6.4)

[React-Router Documentation](https://reactrouter.com/en/main)

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


### Setting up FireBase 

[FireBase](https://firebase.google.com/docs/web/setup#add-sdks-initialize)

1.  Create a Firebase project and register your app

2.  Installing the SDK and initialize Firebase
        -   `npm install firebase`
        -   Adding a `Utils` Folder with `FireBase folder` and a file called `firebase.utils`

3.  Accessing Firebase in the app - in the `firebase.utils`
        -   <code>import { initializeApp } from 'firebase/app';</code>
        -   Setting up authentication
            <code>Import {} from `firebase/auth`;</code>
                -  `getAuth`
                -  `signInWithRedirect,`
                -  `signInWithPopup,`
                -  `GoogleAuthProvider,`
        -   Create firebaseConfig with info from FireBase web-app
        -   InitializeApp with firebaseConfig
        -   Enforce account selection 
        -   In the Firebase console - enable the Google Sign in method

4.  Setting up the `sign-in route` page                              
        -   <code>import { signInWithGooglePopup, createUserProfileDocument } from 'firebase.utils';</code>
        -   Creating Async Sign-in Function/Method to get access token
    


