import React, { createContext } from 'react'
import axios from 'axios'
import BookContextProvider from "../../utils/BookContext"

import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Button from "@material-ui/core/Button"
import CardHeader from "@material-ui/core/CardHeader"


const BookCard = (props) => {

  const { book, showSaveButton, handleSaveBook } = props

  const handleSavebook = (book) => {
    axios
      .post("/api/bookshelf", {
        title: book.details.title,
        isbn: book.details.isbn_10[0],
        pages: book.details.number_of_pages,
        author: book.details.authors,
        image: book.details.thumbnail_url,
      })
      // .then(() => {
      //   const gifs = gifState.gifs;
      //   const gifsFiltered = gifs.filter((giph) => giph.id !== gif.id);
      //   setGifState({ ...gifState, gifs: gifsFiltered })
      // })
      .catch((err) => console.error(err));
  };

  return (
    <Card>
  <CardHeader
    title={book.details.title}
    subheader={
      book.details.authors.length ? `Created by ${book.details.authors}` : "Creator unknown"
    }
  />
  <CardMedia
    image={book.details.thumbnail_url}
    title={book.details.title}
  />
  <CardActions>
    {showSaveButton ? (
    <Button
      size="small"
      color="primary"
      onClick={() => handleSaveBook(book)}>
      Save
    </Button>) :null}
  </CardActions>
</Card>
  )
}

export default BookCard