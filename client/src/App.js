import React, { useState, Component } from 'react'
import Login from './pages/Login'
import Homepage from './pages/Homepage'
import BookContext from './utils/BookContext'
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

  return(
    <>
      <Homepage />
    <div>
      hello world
    </div>
    </>
  )
}

export default App
