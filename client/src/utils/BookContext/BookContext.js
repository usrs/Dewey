import { createContext } from "react"

const BookContext = createContext({
  search:'',
  books:[],
  handleInputBookChange: () => { },
  handleBookSubmit: () => { },
  handleBookSave: () => { }
})
export default BookContext