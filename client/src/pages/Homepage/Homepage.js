import React from 'react'
import SearchForm from '../../components/SearchForm'
import BookContext from '../../utils/BookContext'

const Homepage = () => {
  
  return(
    <>
    <div>Homepage</div>
    <BookContext.Provider value={bookState}>
      <SearchForm />
    </BookContext.Provider>
    </>
  )
}

export default Homepage