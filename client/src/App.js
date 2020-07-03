import React, { useState } from 'react'
import { BrowserRouter as Router,
   Switch, 
   Route 
  } from "react-router-dom";
import Login from './pages/Login'
import Homepage from './pages/Homepage'
import UserDash from "./pages/UserDash";
import Navbar from './components/Navbar'
// import BookContext from './utils/BookContext'
import axios from 'axios'

const App = () => {

  //set state
  const [bookState, setBookState] = useState({
    search:'',
    books: []
  })

  // function to manage input
  bookState.handleInputChange = event => {
    setBookState({ ...bookState, [event.target.name]: event.target.value })
  }

  bookState.handleSearchBook = event => {
    event.preventDefault()

    axios.get(`/api/books/${bookState.search}`)
      .then(({ data }) => {
        console.log(data)
        setBookState({ ...bookState, books: data})
      })
      .catch(err => console.error(err))
  }

  return (
    <>
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route path="/home">
              <Homepage />
            </Route>
            <Route path="/dashboard">
              <UserDash />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App
