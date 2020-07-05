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
// bring in contexts
import BookContext from './utils/BookContext'
import LoanContext from './utils/LoanContext'
import LoginContext from './utils/LoginContext'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import SignUpContext from './utils/SignUpContext'
import LoginAlert from './components/LoginAlert'

const App = () => {

  // setting state to query for books
  const [ bookState, setBookState ] = useState({
    search:'',
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
        console.log(data)
        let newData = [data.docs[0]]
        console.log(newData)
        // let arrayData = Object.keys(newData)
        // console.log(arrayData)
        setBookState({ ...bookState, books: newData })
        // setBookState({ ...bookState, books: data })
    })
    .catch(err => console.error(err))
  }
  const [signUpState, setSignUpState] = useState({
    name: '',
    email: '',
    username: '',
    password: ''
  })

  signUpState.handleInputSignUpChange = event => {
    setSignUpState({ ...signUpState, [event.target.name]: event.target.value })
  }

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

  signUpState.handleLoginDivert = event => {
    event.preventDefault()
    window.location = '/Login'
  // function to get cover image
  // bookState.handleBookImage = event => {
  //   event.preventDefault()

  //   axios.get(`/api/books/${bookState.search}`)
  //     .then(({ data }) => {
            // can't set to bookState because will replace info above
  //     })
  //     catch (err => console.error(err))
  }

  //function to save book
  bookState.handleBookSave = book => {
    // console log data when button clicked
    console.log(book)

    // sending book to user db
    axios.post('/api/bookshelf', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('user')}`
      }
    }, {
      //needs all keys defined on Book
      isbn: book.isbn[0],
      title: book.title,
      author: book.author_name[0],
      publishDate: book.first_publish_year,
      publisher: book.publisher[0],
      bookId: book.id_amazon
    })
      .then(() =>{
        // remove book after saved
        //boock is intentional, feel free to ask Erika about it.
        const books = bookState.books
        const booksFiltered = books.filter(boock => boock.id !== book.id_amazon)
        setBookState({ ...bookState, books: booksFiltered})
        console.log(books)
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

  const [loginState, setLoginState] = useState({
    username: '',
    password: ''
  })

  loginState.handleInputLoginChange = event => {
    setLoginState({ ...loginState, [event.target.name]: event.target.value})
  }

  loginState.handleLoginSubmit = event => {
    event.preventDefault()
    axios.post('/api/users/login', loginState)
      .then(({ data }) => {
        if (data) {
          localStorage.setItem('user', data)
          window.location = '/Homepage'
        }  else {
          console.log('something')
          } 
        }
         
      )
      .catch(err => console.error(err))
  }

loginState.handleSignUpDivert = event => {
    event.preventDefault()
    window.location = '/'
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
          <Route path='/Login'>
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
