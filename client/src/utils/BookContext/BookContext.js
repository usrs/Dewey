import { createContext } from 'react'

const BookContext = createContext({
  search:'',
  books:[],
  handleInputBookChange: () => { },
  handleBookSubmit: () => { },
  handleBookSave: () => { },
  handleDeleteBook: () => { },
  useEffect: () => { }
})
export default BookContext