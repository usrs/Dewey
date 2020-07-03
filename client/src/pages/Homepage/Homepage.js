import React from 'react'
import SearchForm from '../../components/SearchForm'
import SearchedCard from '../../components/SearchedCard'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
// import BookContextProvider from '../../utils/BookContext'

const Homepage = () => {
  return (
    <>
      <br />
      <SearchForm />
      <SearchedCard />
      <Footer />
    </>
  );
}

export default Homepage