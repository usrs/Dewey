import React from 'react'
import SearchForm from '../../components/SearchForm'
import Navbar from '../../components/Navbar'
import BookCard from '../../components/BookCard/BookCard'
import BookShelf from '../../components/BookShelf/BookShelf'
// import BookContextProvider from '../../utils/BookContext'

const Homepage = () => {
  



  return (
    <>
      <SearchForm />
      <BookCard />
      <BookShelf />
    </>
  );
}

export default Homepage