# Ecommerce_Showcase (in progress)
This is one of my portfolio projects - a fully fledged ecommerce website.
This is a full stack app (MERN stack) using Firebase.

## The Goal of this project

Firstly I am using this project to further familiarize myself with React Library - However there are a few new things I want to familiarize myself with, namely:

<li> Style components
<li> Firebase
<li> Stripe API & Context API
<li> Redux & Redux Saga & Thunk
<li> GraphQL & Apollo


Further there are a few things I want to do to simulate some real world practice.
<li> Initially build this with Vanilla JavaScript and later convert it into a TypeScript Project
<li> Initially style this project with Styled components and then later convert to JS library
<li> I want to practice writing some tests for this project with Jest and Snapshot Testing




# How I built this:  

This is supposed to be a sort of "Code with me - Diary".
As well as a way for me to remember what I have done while building this project. 

## Scaffolding the Vite/React Project
<hr>

[Vite doc's](https://vitejs.dev/guide/)

1.  #### Using Vite (pronounced 'Veet'🤔) 
    `npm create vite@latest`

2.  #### Clearing up some of the unnecessary and boiler plate code

3.  #### Adding and setting up SASS - Syntactically Awesome Style Sheets
    `npm install sass`

4.  #### Setting up the most essential folder structure for components

<br><br>

## Setting up Routing with React-Router (v6.4)
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

## Basic FireBase Setup 
<hr>

[Cloud FireBase Doc's](https://firebase.google.com/docs/firestore)

1.  ### Created a Firebase project 
    registered the Ecommerce-projec/app in the FireBase web-console

2.  ### Installed the SDK and initialized Firebase
        -   npm install firebase
        -   Added a `Utils` Folder with `FireBase folder` 
        -   Added file called `firebase.utils`

3.  ### Created access for Firebase in the app - via  `firebase.utils`
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

4.  ### Setting up the `sign-in route` page                              
        -   import {signInWithGooglePopup, createUserProfileDocument} from 'firebase.utils';        
        -   Creating Async Sign-in Function/Method to get access token
<br><br>    

## Setting up Firestore Data Model

<hr>

[Cloud Firestore Doc's](https://firebase.google.com/docs/firestore)
Obviously we are just using FireBase for authentication.  To be able to store the users, I will need a database.
Enter Cloud FireStore.

1.  #### Created a production FireStore database 
    via web-console and based in EU
    amended the rules 

2.  #### Imported the necessary methods into Firebase utils 
    -  { getFirestore,  doc, getDoc,  setDoc }

3.  #### Created a method to store users data from authentication
    -  used an if statement with try block, 
       so as if user does not exist do 'x' or else return user.
    - used a catch block , so as if an error occurs console.log the error.
    - logging date data for creation of new users (new Data()).

4.  #### Additionally, installed a package to handle the import of SVG Files
    -  `npm install vite-plugin-svgr`
    -   Updated the vite.config.js

<br><br>


## Experimenting with a Google Redirect Sign in 

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

##  Just as I finished this I learned read about Observer's and onAuthStateChange

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


##  Mocking Shop-Data and scaffolding the actual 'Shop' page

<hr>

1.  #####  Mocking Shop Data and building functionality 
    Created a simple JSON file with some simple clothing store items (just hats).  I will use this to mock having content for the store temporarily while I finish building some of the essential functionality, then later I will remove/replace the hard coded shop data. 


2.  #####  Creating a Shop Page Route
    -  Imported React-Context
    -  Imported the ProductsContext and destructuring to get the 'products' source 
    -  Mapping over the Products to display individual items on the site 

3.  #####  Creating a Products.Context File
    -  Imported `create context` and `shop-data`
    -  Created ProductsContext export 
    -  Created ProducsProvider export to wrap the app inside

4.    ##### Amending the Main.jsx
    -  I want the products be able to access the user context
    (this could be a debate but for my app, I think this would be the simplest)
    -  Wrapped the <App> inside <ProductsProvider>

5.    ##### Amending the APP.jsx
    -  Removed the old temporary 'blank' shop page
    -  Imported the newly created shop component 


6.  #####  Creating a 'product-card' component - basic styling
    -  Imported Button component
    -  Created basic scss styling sheet and imported into the component 
    -  Getting individual clothing items from passing in the products and destructuring (This will rely on receiving the individual items in the Shop.route file - via mapping)
    -  Created layout of the card and returning the following in the card;
        -  Image
        -  Name
        -  Price
        -  Button 

<br><br>


##  Creating Cart-Icon with a DropDown Menu

<hr>

1.  #####  Created a Cart Icon
    -  Added SVG image to the assets folder

2.  #####  Creating Cart-icon Component
    -  Imported styles sheet, SVG file, 
    -  Created a function to set the cartContext from false to true 
    -  Function is run with an onClick (Cart-Icon Button) 

3.  ##### Updating the Navigation to include the Cart -Icon
    -  updated the overall styling to make things easier to look at.
    -  added the cart-component 
    -  added the drop-down component

4.  #####  Creating Cart-Dropdown Component 
    - simple layout with button for a checkout (future)
    - created simple styling 

5.  #####  Creating Cart Context
    - Very simple setup - is the cart open set to false by default
    - Set the cart open 

    - Imported CardProvider to App.js
    - Imported isCartOpen to Navigation using a short-circuit operator (&&)


<br><br>


##  Adding Basic Functionality to the Cart

<hr>

1.  #####  Create a CartItem Component 
    -  Created simple cart item that will return, using `destructuring` ;
        -  the `Image` of the item
        -  the `Name` of item
        -  the `Price` of the item (`Quantity x Price`)

2.  #####  Amending the CartContext 
    -  In the `CartContext`;
        -  Added `CartItems Array` 
        -  Added `addItemToCart` function 
    
    -  In the `CartProvider`;
        -  Added useState  `[cartItems, setCartItems] = useState([]);`
        -  Added `addItemToCart` function 
        -  Updated the value to include `cartItems` & `addItemToCart`

    -  Created new export `addCartItem` helper funciton;
        -  This will be a helper function to see if newly added items exist in the cart already.
        -  Therefore will know how to handle the quantity inside in the cart.
        -  (i.e. - if product exists in the cart: plus quantity by 1, else add item to the cart)


3.  #####  Added CartItem into the Cart-Dropdown component
    -  Imported the `Cart-Item` compnent 
    -  Imported the `useContext` & `Cart.Context`
    -  From the CartContext I used destructuring to get the `cartItems`

    -  In the return, created a function to map over the cartItems 🤔🤔🤔
    
    -  Wrapped the above in a ternary conditional using `cartItems.length`
        - if there is a length, return the above
        - if there is no length, thus empty = return a message cart is empty
            - added styling for empty cart message.

4.  #####  Updated Button functionality in Product.Card Component 
    -  Imported `useContext` & `Cart.Context`
    -  Added the `AddItemToCart` method via destructing from `Cart.Context`
    -  In the Button, 
        -  added onClick handler to call the `AddItemToCart` as a fucntion
        -  passing the `product` through the function 
    
    - In Hindsight I took the above button function and made it a function called `addProductToCart`
    - Then passed it into the onClick Handler
    (better for readability and optimization)


<br><br>

##  Adding count to the Cart.Icon

<hr>

1.  #####  Initial Approach
    -  Created a simple count of the items 
    -  Created an empty array
    -  Created a for loop to loop over cartItems and extract the quantity  and push to the empty array
    -  Using reducer to get the total of the array 

    This is working, however in hindsight I might want to be able to use this functionality in the checkout.(still to be built)
    
    "If an item should be removed from the cart ( this functionality has not yet been implemented), the number should decrease."

    It would be better if this functionality was in the cart.context.
    It could also be solved by using the useEffect Hook 
    Back to the drawing board - lets undo this messy approach.  

2. #####  Second Attempt - using useEffect 
    Because we are recounting the total quantity every time the `cartItems` changes, it makes sense to use the useEffect Hook.  
    - Imported useEffect
    - Added `cartItemCount` (default 0) to CartContext
    - Added `[cartItemCount, setCartItemCount] = useState(0);`

    -  Using the useEffect 
        - dependancy = `[cartItems]`
        - created `count` using the reduce method
        - `total` + `cartItem.quantity`
        - `setCartItemCount` using the `count` funciton 
    
    - Added the `cartItemCount` to the value to be passed into the provider

3.  #####  Finally, adding the `cartItemCount` to Cart.Icon
    -  Added `carItemCount` via destructuring 
    -  Using the above in the span inside the `ShoppingIcon`

<br><br>


## Create a checkout page 

<hr>

####  Creating a route for the checkout page

- [] The _Checkout Button_ in the _Cart.Icon-DropDown_ should take you to this new page

1.  ######  Creating a new folder in Routes Folder 
    -  Created a simple `checkout.component.jsx `
    -  Created and imported an empty scss style sheet (updated with styling later )
    
    -  In the main `App.jsx` ;
        - imported the checkout component 
        - added a route to the new checkout component 
    
    -  In the `cart-dropdown` ;
        -  imported the `useNavigate` from `react-dom-router`;
        -  had to create a const that calls the useNavigate 🤔
        -  created a `gotToCheckoutHandler` to handle the navigation to new component 
        -  Used onClick method to call `goToCheckoutHandler`
    
    - Scaffolded the `checkout.component` return (productsm descruotion etc.)
    -  Added some basic styling to the scss





#### This new page should have the following functionality and styling :

- [x]  Quantity Increase
- [x]  Quantity Decrease
- [x]  Total Price (Quantity x Price)
- [x]  Ability to remove the item entirely (Item and Quantity)
- [x]  Total  Amount of all Items in the Cart.


2. ##### Think of a way to pass Items in Cart into the Checkout 
    
    🤔
    Need to create a way to pass the products in the cart into the Checkout...
    These items will need to be passed into a row/card sort of way...

    What I am thinking is I can map over the cartItems and pass them into a checkoutCard component (thats imported in this checkout.component)


3.  ##### Creating a `CheckoutItem Component` to receive `cartItems` and display them in the `CheckOut-Component` page
    -  Created a simple `checkout.component.jsx `
    -  Created and imported an empty scss style sheet (updated with styling later)

🤔  I am going to neeed some new functions to handle the:
    -  increasing and decreasing the quantity 
    -  removing the item from the cart  

    -  Destructured the `cartItems` Objects (name, image etc.)
    -  Imported `CartContext` 
    -  Destructured the function from `CartContext` (inlcuding newly created)
    -  Created handlers to pass `CartContext` funcitons into the return 

    -  Finished creating the return 
    -  Finished the basic styling for the component
        

4.  #####  Adding new functions to the `CartContext`
    -  `removeItemToCart`
        (I want this to be named similaryly to the `addItemToCart` )
        -  find the cart item to remove
        -  check if this is the last item 
            - if so remove entire item from cart
        -  If more than 1 of this item in cart, 
            -return back cartitems with matching cart item with reduced quantity


    -  `clearItemFromCart` 
        -  Remove entire Item from the cart
    
    -  updated the `CartContext` export 

    - updated the `CartProvider` export  
        - updating `cartItemCount` and `SetCartItemCount` to `cartCount` and `setCartCount`
        - added `cartTotal` 
        - minor naming updates to the `newCartCount` - `useEffect`
        - added useEffect to handle the cost of the total cart 
        - minor naming updates to `addItemToCart`
        - added `removeItemToCart`
        - added `clearITemFromCart`
        - updated the values accordingly 
        - Getting the total cost of an item. (Quantity x Price)
        
        
5.  #####  Updating the Checkout Page to use new Component 

    - Imported `useContext` & `CartContext`
    - Used `cartItems` from `CartContext` via destructuring 

5.  #####  Other Minor Changes 
    -  Updating the CartIcon with changes made to Context 


6.  #####  Created styling for all the new components 

<br><br>

## Storing the data on the backend - Setting up FireStoreDB
<hr>

<br>

1. ####  Adding some new mock data
    -   As a test run I am going to add a bit more mock data with different types 
        (i.e. Mens, Jackets, Shoes etc.)
    -   Updating the `shop-data` json file 
    -   Reflecting changes in `products.context` 
        (Temporarily breaks the shop page but after pushing the data up we will access the data via FireSotre)

<br>

2.  ####  Creating a way to push this data to the FireStore DB

##### In the `FireBase.utils`;   
-   Bringing in two new methods 
        -   [collections](https://firebase.google.com/docs/firestore/data-model#collections)
        -   [writeBatch](https://firebase.google.com/docs/reference/js/firestore_.writebatch)


    -   Created a `addCollectionandDocuments` function 
        -   This is an async function that will take two params 
            -   `key` - this wll be the name of the collection
            -   `object` - this will be the data  
        -   Obviously uses the `batch` and `collection` methods
        -   As this could be a large file, it's broken into batches to be sent
        -   Await's a batch.commit() in return 

<br>

##### In the `Products.Context` ;

-   Imported the new `SHOP_DATA`
-   Imported teh new `addCollectionandDocuments`
-   Imported teh `useEffect` Hook

-   Using the useEffect as I only want this to run literally once, thus commenting out after it's single use
    -   Passing in product-categories as the key
    -   Passing in SHOP_DATA as the object
    -   I realise this is not a normal way to push data but I just need to push some data up there one time and it gets the job done.

-   Saving - confirming the useEffect and function worked - it Did! 

-   Commenting out the useEffect

<br>


3.  ####  Pulling our data from the FireBase DB  ;

##### In the `FireBase.utils`; 

-   Bringing in the [querey](https://firebase.google.com/docs/reference/js/firestore_.query) method

-   Created a `getCategoriesAndDocuments` function
    -   definining the `collectionRef` we want access too
    -   using the `querey` on our `collectionRef`
    -   creating a const for the raw data
    -   manipulating the data to return in a format we can work with

<br>

##### In the `Products.Context` ;

-   Imported the new `getCategoriesAndDocuments` function

- Created a useEffect Hook to fetch the data
    -  async function 
    -  returns the categoryMap
    -  Checking the console log if everything worked

<br><br>

## Implementing new FireStore Database
<hr>

<br>

1. ####  Utilizing the `CategoryMap` data

-   In the `ProductsContext`
    
    - renaminng the file from `ProductsContext` to `CategoriesContext` 
    - updating `main.jsx` to reflect change
    - updating the `shop.component` to reflect change (more required)
    <br> 
    -   renaming some of the exports - makes more sense now;
        -   `ProductsContext` to `CategoriesContext` 
        -   `ProducstProvider` to `CategoriesProvider`
    <br>
    -  updating functions to reflect `categoriesMap` as an object
    -  updating return values to reflect name changes
    <br>
    -  updating the useEffect Hook;
        -  include `setCategoriesMap` function using (`CategoryMap`)


<br>

2. ####  Updating the `shop.component` return structure
-   updated to reflect name change of `ProductsContext`
-   Created a method to map through data from FireStore db.
    -   Used `Fragment` to wrap the entire return
    -   Used `Object.keys` to turn keys into an array 
    -   Then mapped over the array to find the title
    -   Passed the tile into another `fragment` 
        -   created heading for category item
        -   copy pasted the old mapping function for each product
            -   Updated naming convention to utilise `categoriesMap`

<br><br>


## Updating the Category Preview Component 
<hr>
<br>

###  Created Category Preview Component :

<br>

This is how I will have the shop page display all the categories with a limited number of items ...

-  In the new `category-preview.component`;
    -  Imported the `Product.Card` component and `StylesSheet`.
    -  Passing in the `{title, products}`
    -  Created a heading div with just the text being clickable 
    -  Creating the preview of products
        -  passed in the products 
        -  using filter to decided what products we want 
        -  use `_` to ignore product
        -  use `idx` for the index of the prouduct
        -  `idx < 4` so we only take in the first 4 products
        -  then map through the remainging products and pas them into the `Product.Card Component`
    
    <br>

-  In the `shop.component`;
    -  replaced the `ProductCard` import with the new  `category-preview.component`
    -  


<br><br>

###  Created Nested Routes in the shop :

<br>

#### In the `App.jsx` ;

<br>

-  Added `/*` as a wildcard to the end of the shop path

<br>

#### In the `Routes` folder :
<br>

Created `categories-preview` folder
-  This will replace what was formly the shop.route
-  Essentially a copy paste from the shop component 
-  Minor changes to make use of the `category-preview` component 

Created `category` folder 
-  Created Style sheet blank, will complete later

-  Imported the `{ useParams }` hook from `react-router-dom`

-  destructuring `category` via `useParams()` hook

-  Imported the `{ useContext }` hook from `react`

-  Imported the `CategoriesContext` in order to get the `categoriesMap` (i.e. all the data)

    <br>

    Initally I just got all the data from the `categoriesMap`   
    <code>const products = categoriesMap[category];</code> <br>
    However this was causing an issue in that this was re-loading all the products on each re-render.  This making things slow and sluggish - products would dissapear and have to reload. <br>
    <br>

    The solution... Using the `useEffect` and `useState` hook's
    
    This way we can ensure the data will only rerender on our terms.
    Specifcally when the category changes or if the actual data changes (from `categoriesmap`)

    <code>
    const [products, setProducts] = useState(categoriesMap[category]);
    </code>
    <br>
    <br>
    <code>
    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);
    </code>

Finally,
-  Imported the `ProductContainer`
-  Added basic styling to the styles sheet
    
<br><br>

#### In the `shop.component` :

<br>

-  Deleted almost all the no longer needed imports 
-  Imported `CategoriesPreview` & `Category` components
-  Created paths for the different categories `path=':category' element={<Category />}`

<br>

### Bug-fix - Creating a safegaurd for the products.map
<hr>
<br>

The error:   

<code> cannot read properties of undefined (reading 'map') in `catergory.components`</code>

<br>

The issue was that when our application mounts for the first time it is trying to load our categoriesMap 

(i.e. the data from the back end )

Obviously this is async code and we are still waiting for the data to come through 

Therefore we need to only load this data once it has arrived.
<br><br><br>
Luckily this was an easy fix after I figured out the issue,

- In the return of the `catergory.components`;

    To ensure that products exists before we map over the products we can use `&&` and have the products 

- Also updated the useStat hook to instead of being a default empty array, to infact include the 
`(categoriesMap[category])`


<br><br>

### Bug-fix - Clashing Styling 
<hr>
The error:  

<code> cannot read properties of undefined (reading 'map') in `catergory.components`</code>

<br>

Because of how we named some of our classes and how the website has changed over time, currently we have some classnames that are clashing

<br>

Simple solution:
<br>

-  Updated the naming convention of the `category-item` to `directory-item`
-  Updated the styling and classnames
-  Updated corresponding references.  


<br><br>

### Bug-fix - Clickable Category Headings
<hr>
<br>
The problem:
<br>
<code> category headings are not routing through to their corresponding path </code>
<br>
Simple solution:
<br>

-  Importing the Link method from react-router-dom
-  Replacing the `span` with `Link` 
-  Passing in the title with backticks 
-  Minor updates to classnames and styling to prevent clashing



<br><br>


## Switching from SASS to Styled-components 
<hr>
<br>

[Styled-components Documentation](https://styled-components.com/docs)

- Imported the library into the project

    <code> npm install styled-components</code>

<br>

Now comes the fun of converting all the previouse scss files ....

<br>

### COMPONENTS

- [x] button
- [x] cart-dropdown
- [x] cart-icon
- [x] cart-item
- [x] category-preview
- [x] Checkout-item
- [x] directory
- [x] directory-item
- [x] form-input
- [x] product-card
- [x] sign-in-form
- [x] sign-up-form

<br>

### ROUTES

- [x] navigation
- [x] authentication
- [x] categories-preview
- [x] category
- [x] checkout
- [x] home
- [x] shop

<br>

### INDEX

- [x] index

<br>

This took way too long lol
Strictly converted the scss files, some other features/updates required and updates to styling will be updated accordingly.

<br><br>


## Refactoring the UI

<hr>
<br>

####  THE GOAL

The objective is to create an aesthetically pleasing and user-friendly interface that aligns with contemporary design trends while enhancing usability and engagement.

###  Major UI Update 

Refactored the user interface of the website 

Involved the following:

-  implementing substantial design enhancements to improve aesthetics, readability, and user experience. 

-  Overhauled the visual design, optimized layout and typography, and enhanced usability. 

-  Employed modern design principles, intuitive interactions, and visually appealing elements to elevate the website's visual appeal. 

-  Optimized the information hierarchy to ensure a seamless user journey. 

<br/>

New Componenets added:

- [x]  Footer 

- [x]  Front Splash

- [x]  Image Carousel

- [x]  About Page


## Implementing useReducer instead of useState & useEffect

<hr/>

Converted the cart to rather use reducers instead of useState and useEffect -  Cart and Sign-in 


Files touched in the process: 
-  CartContext

-  UserContext 

Created a reducer utils folder with a very simple helper function making reading and writing slightly easier 


## Implementing Redux with Redux-Thunk
<hr/>

I have been given the advice to learn redux the hard way and not use the redux toolkit until I fully understand Redux.  
I have been told that to fully understand what redux is doing I should implement using the legacy Redux way. 

So that's what I will do - I will first convert this website to manage the state using Redux, then later I will do the same with Redux Toolkit 


<code>npm install redux react-redux and redux-logger</code>

Creating a store folder to house all the redux related content
-  Setting up the root reducer & store.js
-  Creating the user store boiler plate code
-  Creating the categories boiler plate code
-  Creating the cart store boiler plate code
-  Updating the App.jsx and Main.jsx to utilize redux - replacing usercontext.

-  Hooking into and replacing references from useContext to useRedux 

-  Updating Selectors for the cart state.


###  Redux-Persist & Redux-Thunk
<hr/>

#### Persisting state with Redux Persist

[redux persist documentation](https://www.npmjs.com/package/redux-persist)

`npm i redux-persist`



-  modifications to our store.js file to use Redux Persist - replaced the value of the reducer property in the store from userReducer to persistedReducer

- modifcation to the main.jsx, wrapped root component with PersistGate. 
This delays the rendering of your app's UI until your persisted state has been retrieved and saved to redux. 
NOTE the PersistGate loading prop can be null, or any react instance, e.g. loading={<Loading />}

-  included the Thunk middleware, which will intercept and stop non-serializable values in action before they get to the reducer

-   passed our store as a parameter to persistStore, which is the function that persists and rehydrates the state. With this function, our store will be saved to the local storage, and even after a browser refresh, our data will still remain.

- Specify how the incoming state is merged

- Customize what’s persisted


#### Redux Thunk

[Redux-Thunk](https://www.npmjs.com/package/redux-thunk)

If I was using the Redux Toolkit package, there would be nothing to install - RTK's configureStore API already adds the thunk middleware by default.
But because I am using the basic Redux createStore API and need to set this up manually, I first need to add the redux-thunk package:

`npm install redux-thunk`

-  updated the Redux store to use the MiddleWare
-  Created a function that makes an AJAX call to FireBase Server
-  Updating the `Main.jsx` 
-  Creating a loading-spinner componenet 
-  Updating the category actions and types types
-  Rewriting the category reducer & updating selectors
-  Implementing the loading animation in category componenets 




## Replacing Thunk with Redux-Saga

<hr/>

[Redux-Saga Documentation](https://redux-saga.js.org/)

`npm install redux-saga`

-  Creating a `root-saga.js` file in the `store`
-  Importing and setting up `createSagaMiddleware` and the `root-saga.js` into the store.

Converting Categories State files into a Saga
    -  Creating New Types
    -  Creating New Actions 
    -  Updating Selectors & Reducers
    -  Creating the Saga file

-  Setting up `cateforeis.saga.js` file 
-  Importing into the `root-saga` file

-  Converting fetchCategoriesAsynch Function (Redux-Thunk) into a a Saga
-  Converting onAuthStateChanged Listener to Promise 

- Creating a single check, opposed to a listener checking the state every time user state updates

Converting User Session files into Saga
    -  Creating New Types
    -  Creating New Actions 
    -  Updating Selectors & Reducers
    -  Creating the Saga file

-  Updating the sign-in and sign-up component
-  Updating the navigation componenet 


##  Setting up Stripe API

[STIPE API DOCUMENTATION](https://stripe.com/docs/stripe-js/react)

[Stripe Elements](https://stripe.com/docs/stripe-js/react#available-element-components)

[Stripe Test Cards](https://stripe.com/docs/testing#cards)

<hr/>

`npm install --save @stripe/react-stripe-js @stripe/stripe-js`

-  Creating an Elements provider in the `main.jsx`

-  Creating a `stripe.utils.js` file in the utils folder
    -  importing loadStripe
    -  passing the publishable key (hiddent)

-  Creating a `.env` folder for the API keys

-  Created a Local Neltify Development Server - for testing purpose 
    -   `npm install netlify-cli -g`
    -   [NETLIFY CLI](https://docs.netlify.com/cli/get-started/)

-  Creating Netlify Functions folder 

-  Creating a payment-form component (basic)
    -  Building the basic layout of the component
    -  Creating and Importing styling
    -  Imported `CardElement, useStripe, useElements` from `stripe`
    -  Created payment handler 
        -  preventDefault method 
        -  ensure hooks are loaded before proceeded
        -  Call to API through netlify functions
        -  Alert for success of failure (temporary)
    
    -  Using selectors to get:
        -   CartTotal (amount to pay)
        -   User's name (else defaults to guest)

    -  Used useState for Processing Payment Animation
        -  Created loading animation on button 
        -  Updated button component and styling 


-  Rendering the componenet in the checkout section (temporary for testing)


##  Running the project on Netlify 🎯 🎯 🎯

<hr/>

##  Converting the project from JavaScript to TypeScript 🎯 🎯 🎯

<hr/>


## Migrating to Modern Redux 🎯🎯🎯
<hr/>

[Redux Toolkit Documentation](https://redux-toolkit.js.org/)

[Migrating to Modern Redux](https://redux.js.org/usage/migrating-to-modern-redux)
