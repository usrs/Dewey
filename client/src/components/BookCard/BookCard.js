import React, { createContext } from 'react'
import axios from 'axios'
import BookContextProvider from "../../utils/BookContext"

import { makeStyles } from "@material-ui/core/styles"
import TextField from "@material-ui/core/TextField"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import CardHeader from "@material-ui/core/CardHeader"
import Avatar from "@material-ui/core/Avatar"


const BookCard = (props) => {

  const { book, showSaveButton, handleSaveBook } = props

  const handleSavebook = (book) => {
    axios
      .post("/api/bookshelf", {
        title: book.title,
        isbn: book.identifiers.isbn_13,
        pages: book.number_of_pages,
        author: book.authors.name,
        image: book.cover.medium,
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
    title={book.title}
    subheader={
      //probably isn't book.author, need to see what actual data name is
      book.author.length ? `Created by ${book.author}` : "Creator unknown"
    }
  />
  <CardMedia
    image={book.images.original.url}
    title={book.title}
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