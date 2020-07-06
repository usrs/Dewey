import { createContext } from 'react'

const BookShelfContext = createContext({
  books: [],
  useEffect: () => { }
})

export default BookShelfContext