# Dewey
This interactive library application allows a user to securely sign-in and add books that they have in their personal . query and display books based on their search parameters.
<br>
<br>
dewey.works

![](/filepath.png)
<br>

## Installation
The software used to create this generator include: React, React-Router, Material-UI (styling library for React), Node.js, Mongo, Axios, ENV, Express-Validator, Passport and Express.  

**Please use 'npm init -y' followed by npm-i to install the NPM dependencies. Upon installation, confirm that all the packages were installed and appear in your package.json file.**
<br>
<br> 
If the dependencies listed above did not appear in your package.json file after running npm init-i, please run the following commands (for each of the missing packages):
<br>
Packages for the backend:
<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MONGO: npm i mongoose
<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ENV: npm i dotenv
<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
IF ENV, CONCURRENTLY: npm i if-env concurrently
<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EXPRESS: npm i express
<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EXPRESS-VALIDATOR: npm i express-validator
<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AXIOS: npm i axios
<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
PASSPORT (with Mongo): npm i passport-local-mongoose
<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
PASSPORT (& associated webtokens): npm i passport passport-jwt
<br>
<br>
Packages for the frontend:
<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
REACT ROUTER: npm i react-router 
<br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
MATERIAL-UI: npm i @material-ui/core @material-ui/icons
<br>

## Usage
Using the OpenLibrary api, Dewey is able to create and store an online personal library. 

It allows users to keep track of all of their books, which is perfect for the reader that has a large collection lining their shelves at home. 

Simply sign-in and search for a book by name or ISBN. Once presented with their search results, the user can 'Save to Library.' 

The saved books can be viewed on the user's profile page, their digital bookshelf. At the bookshelf, a user can decide if they would like to 'loan' their book to a friend. If the user decides to loan a book they can enter the information. The book will move from their library shelf to the 'loaned book' shelf.

<br>
<br>
<br>
