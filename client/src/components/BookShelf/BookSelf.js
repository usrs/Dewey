import React from 'react'
import axios from 'axios'
import bookCard from '../BookCard'

//gets all books saved to a user and creates cards for each
function BookShelf() {
  const [isLoading, setLoadingStatus] = React.useState(true)
  const [books, setBooks] = React.useState([])
  React.useEffect(async () => {
    const bookshelf = axios.get("/bookshelf")
    setLoadingStatus(false)
    setBooks(bookshelf)
  }, [])
  if (isLoading) {
    return <div />
  }
  return books.map((book) => <BookCard book={book} />)
}
export default Bookshelf
