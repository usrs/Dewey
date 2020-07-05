// bring in react and useState hook
import React, { useState } from 'react'
// bring in axios
import axios from 'axios'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Navbar from './components/Navbar'
import Homepage from './pages/Homepage'
// bring in contexts
import BookContext from './utils/BookContext'
import LoanContext from './utils/LoanContext'
import LoanModal from './components/LoanModal/LoanModal'

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

  // function to get cover image
  // bookState.handleBookImage = event => {
  //   event.preventDefault()

  //   axios.get(`/api/books/${bookState.search}`)
  //     .then(({ data }) => {
            // can't set to bookState because will replace info above
  //     })
  //     catch (err => console.error(err))
  // }

  //function to save book
  bookState.handleBookSave = book => {
    // console log data when button clicked
    console.log(book)

    // sending book to user db
    axios.post('/api/bookshelf', {
      isbn: book.isbn[0],
      title: book.title,
      author: book.author,
      publishDate: book.publish_date,
      publisher: book.publisher,
      bookId: book.id_amazon
    })
      .then(() =>{
        const books = bookState.books
        const booksFiltered = books.filter(boock => boock.id !== book.id_amazon)
        setBookState({ ...bookState, books: booksFiltered})
        console.log(books)
      })
      .catch(err => console.log(err))
  }
  
  // creating loan state
  const [loanState, setLoanState ] = useState({
    loan:''
    //any information from the form
  })
  // state for LoanModal
  loanState.handleBookLoan = event => {

  }

  return(
    <>
    <Navbar />
    <BookContext.Provider value={bookState}>
      <Homepage />
    </BookContext.Provider>
    {/* <LoanContext.Provider value={loanState}>
      <LoanModal />
    </LoanContext.Provider> */}
    </>
  )
}

export default App
