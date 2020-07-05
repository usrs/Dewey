import React, { useContext } from 'react'
import BookContext from '../../utils/BookContext'
// bring in BookCard component
import BookCard from '../BookCard'
// material-ui elements
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import CardActions from '@material-ui/core/CardActions'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    // margin: '20px',
    maxWidth: 500,
  },
  image: {
    marginRight: '25px',
    display: 'inline-block',
    maxWidth: '75%',
    maxHeight: '75%',
  },
  contains: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: '25px',
  },
  typograph: {
    marginLeft: '20px',
  },
}))

const BookShelf = () => {

  const classes = useStyles()

  const {
    search,
    books,
    handleInputBookChange,
    handleBookSubmit,
    handleBookSave,
    handleDeleteBook,
    useEffect
  } = useContext(BookContext)

  // when page loads want to get all cards
  // useEffect(() => {
  //   axios.get('/api/bookshelf')
  //     .then(({ data }) => {
  //       console.log(data)
  //       //if all data from cards appears above, should be able to setState to build cards from db
  //       setBookState({ ...bookState, books: data })
  //     })
  //     .catch(err => console.log(err))
  // })

  // below book. needs to match keys in book model
  return(
    <div>
      {
        books.map(book => (
          <div key={book.bookId} className={classes.root}>
            <Container component="main" maxWidth="s" className={classes.contains}>
              <CssBaseline />
              <Paper className={classes.paper}>
                <Grid container spacing={12}>
                  <Grid item xs={6}>
                    <CardMedia>
                      <img
                        className={classes.image}
                        src="http://covers.openlibrary.org/b/isbn/9781593275846.jpg"
                        alt="book cover" />
                    </CardMedia>
                  </Grid>
                  <Grid item xs={6} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                      <Grid item xs>
                        <Typography className={classes.typograph} gutterBottom variant="h5">
                          {book.title}
                        </Typography>
                        <Typography className={classes.typograph} gutterBottom variant="h6">
                          {book.isbn}
                        </Typography>
                        <Typography className={classes.typograph} variant="body2" gutterBottom>
                          {book.author}
                        </Typography>
                        <Typography className={classes.typograph} variant="body2" color="textSecondary">
                          {book.publishDate}
                        </Typography>
                        <Typography className={classes.typograph} variant="body2" color="textSecondary">
                          {book.publisher}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <CardActions>
                          <Button
                            size='small'
                            color='danger'
                            onClick={() => handleDeleteBook(book)}>
                            Remove from Library
                          </Button>
                          <Button
                            size='small'
                            onClick={console.log('update me')}
                          >
                            Loan
                        </Button>
                        </CardActions>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Container>
          </div>
        ))
      }
    </div>
  )

}

export default BookShelf

//gets all books saved to a user and creates cards for each
// const BookShelf = () => {
//   const [isLoading, setLoadingStatus] = React.useState(true)
//   const [books, setBooks] = React.useState([])
//   React.useEffect(async () => {
//     const bookshelf = axios.get("/bookshelf")
//     setLoadingStatus(false)
//     setBooks(bookshelf)
//   }, [])
//   if (isLoading) {
//     return <div />
//   }
//   return books.map((book) => <BookCard book={book} />)
// }