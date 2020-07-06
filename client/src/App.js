// bring in react and useState hook
import React, { useState, useEffect } from 'react'
// bring in axios
import axios from 'axios'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import Navbar from './components/Navbar'
import Homepage from './pages/Homepage'
import UserDash from './pages/UserDash'
// bring in contexts
import BookContext from './utils/BookContext'
import LoanContext from './utils/LoanContext'
import LoginContext from './utils/LoginContext'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import SignUpContext from './utils/SignUpContext'
import LoginAlert from './components/LoginAlert'
import BookShelfContext from './utils/BookShelfContext'

const App = () => {

  // set signUp state for user to register
  const [signUpState, setSignUpState] = useState({
    name: '',
    email: '',
    username: '',
    password: ''
  })

  // handles change in signUp inputs
  signUpState.handleInputSignUpChange = event => {
    setSignUpState({ ...signUpState, [event.target.name]: event.target.value })
  }

  // function to send user signUp data to db
  signUpState.handleSignUpSubmit = event => {
    event.preventDefault()
    axios.post('/api/users/register', signUpState)
      .then(({ data }) => {
        console.log(data)
        // If data equals new user, then window.location to homepage
        // Else, alert "User already exists, please sign in"
      })
      .catch(err => console.error(err))
  }

  // function to redirect user if credentials not valid
  signUpState.handleLoginDivert = event => {
    event.preventDefault()
    window.location = '/Login'
  }

  // set user login state
  const [loginState, setLoginState] = useState({
    username: '',
    password: ''
  })

  // handles change in login inputs
  loginState.handleInputLoginChange = event => {
    setLoginState({ ...loginState, [event.target.name]: event.target.value })
  }

  // submits login credentials to db
  loginState.handleLoginSubmit = event => {
    event.preventDefault()
    axios.post('/api/users/login', loginState)
      .then(({ data }) => {
        if (data) {
          localStorage.setItem('id', data)
          window.location = '/Homepage'
        } else {
          console.log('something')
        }
      }

      )
      .catch(err => console.error(err))
  }

  // if valid user send them to homepage
  loginState.handleSignUpDivert = event => {
    event.preventDefault()
    window.location = '/'
  }

  // setting state to query for books
  const [bookState, setBookState] = useState({
    search: '',
    books: []
  })

  // handling search input for books
  bookState.handleInputBookChange = event => {
    setBookState({ ...bookState, [event.target.name]: event.target.value })
  }

  // function to search api for books based on isbn
  bookState.handleBookSubmit = event => {
    event.preventDefault()

    axios.get(`/api/books/${bookState.search}`)
      .then(({ data }) => {
        if (data) {
          console.log(data)
          let newData = [data.docs[0]]
          console.log(newData)
          // let arrayData = Object.keys(newData)
          // console.log(arrayData)
          setBookState({ ...bookState, books: newData })
        // setBookState({ ...bookState, books: data })
        } else {
          console.log('nothin here chief')
          let newData = {
            title: 'No Book Found!',
            author: 'try searching again'
          }
          setBookState({ ...bookState, books: newData })
        }
      })
      .catch(err => console.error(err))
  }

  // function to get cover image
  bookState.handleBookImage = event => {
    event.preventDefault()

    axios.get(`/api/books/${bookState.search}`)
      .then(({ data }) => {
            //can't set to bookState because will replace info above
      })
      .catch (err => console.error(err))
  }

  //function to save book
  bookState.handleBookSave = book => {
    // console log data when button clicked
    console.log(book)

    // sending book to user db
    axios.post('/api/bookshelf', {
      //needs all keys defined on Book
      isbn: book.isbn[0],
      title: book.title,
      author: book.author_name[0],
      publishDate: book.first_publish_year,
      publisher: book.publisher[0],
      bookId: book.isbn[0]
    }, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('id')}`
      }
    })
      .then(() =>{
        // remove book after saved
        //boock is intentional, feel free to ask Erika about it.
        const books = bookState.books
        const booksFiltered = books.filter(boock => boock.id !== book.bookId)
        setBookState({ ...bookState, books: booksFiltered})
        console.log(book)
        console.log('this is as far as we got')
      })
      .catch(err => console.log(err))
  }

  bookState.handleDeleteBook = book => {
    console.log(book)
    // remove from id that mongoose provides
    axios.delete(`/api/bookshelf/${book._id}`)
      .then(() => {
        // remove it from frontend array
        // create local version on book
        const books = JSON.parse(JSON.stringify(bookState.books))
        const booksFiltered = books.filter(boock => boock._id !== book._id)
        setBookState({ ...bookState, books: booksFiltered })
      })
      .catch (err => console.error(err))
  }

  return(
    <Router>
      <div>
        <Switch>
          <Route exact path='/'>
            <SignUpContext.Provider value={signUpState}>
              <SignUp />
            </SignUpContext.Provider>
          </Route>
          <Route exact path='/Login'>
            <LoginContext.Provider value={loginState}>
              <Login />
            </LoginContext.Provider>
          </Route>
          <Route path='/Homepage'>
            <Navbar />
            <BookContext.Provider value={bookState}>
            <Homepage />
            </BookContext.Provider>
          </Route>
          <Route path='/UserDash'>
            <Navbar />
            <UserDash />
            
          </Route>
        </Switch>
      </div>
    </Router>
    // <>
    // <Login />
    // <div>
    //   hello world
    // </div>
    // </Router>
    )
}

export default App
