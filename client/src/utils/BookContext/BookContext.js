import { createContext } from "react"

const BookContext = createContext({
  search:'',
  books:[],
  handleInputBookChange: () => { },
  handleBookSubmit: () => { }
})
export default BookContext