import React, { useState, useContext } from 'react'
import BookContext from '../../utils/BookContext'
import axios from 'axios'
// material-ui elements
import { makeStyles } from '@material-ui/core/styles'
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Button from "@material-ui/core/Button"
import CardHeader from "@material-ui/core/CardHeader"
import { Typography } from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  image: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}))

const BookCard = () => {

  const classes = useStyles()

  const {
    search,
    books,
    handleInputBookChange,
    handleBookSubmit,
    handleBookSave
  } = useContext(BookContext)

  return (
    <div>
      {
        books.map(book => (
          <div key={book.id}>
            <Card>
              <CardHeader
                title={book.title}
                subheader={book.isbn[0]}
              />
              <Typography>
                {book.author}
              </Typography>
              <Typography>
                {book.publish_date}
              </Typography>
              <Typography>
                {book.publisher}
              </Typography>
              <CardMedia>
                <img
                  className={classes.image}
                  src={book.cover_i}
                  alt="book cover" />
              </CardMedia>
              <CardActions>
                <Button
                  size="small"
                  onClick={() => handleBookSave(book)}>
                  Add to library
              </Button>
              </CardActions>
            </Card>
          </div>
        ))
      }
    </div>
  )
}

export default BookCard