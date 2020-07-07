import React from 'react'
import SearchForm from '../../components/SearchForm'
import BookCard from '../../components/BookCard/BookCard'
import BookShelf from '../../components/BookShelf/BookShelf'
// import BookContextProvider from '../../utils/BookContext'
import './Homepage.css'

const Homepage = () => {

  return (
    <>
      <SearchForm />
      <BookCard />
    </>
  )
}

export default Homepage