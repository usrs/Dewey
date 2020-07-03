import React, { useState, useContext } from 'react'
import BookContext from '../../utils/BookContext'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles'
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Button from "@material-ui/core/Button"
import CardHeader from "@material-ui/core/CardHeader"


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
    handleBookSubmit
  } = useContext(BookContext)

  return (
    <div>
      {
        books.map(book => (
          <div key={book.id}>
          <Card>
            <CardHeader
              title={book.title}
              subheader={book.author_name}
            />
            {/* <CardMedia>
              <img 
              className={classes.image}
              src={book.docs.cover_i}
              alt="book cover" />
            </CardMedia> */}
            <CardActions>
              {/* <Button
                size="small"
                color="primary"
                href={book.details.info_url}>
                View More Info
                >  
              </Button> */}
              <Button
                size="small"
                color="primary">
                Save
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