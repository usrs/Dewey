import { createContext } from 'react'

const BookContext = 
  createContext({
    handleInputChange: () => { },
    handleSearchBook: () => { }
  })
  
export default BookContext