import React, { useContext } from 'react'
import BookContext from '../../utils/BookContext'
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
    // maxWidth: 500,
  },
  image: {
    marginRight: '25px',
    display: 'inline-block',
    maxWidth: '50%',
    maxHeight: '50%',
  },
  contains: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: '25px',
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
          <div key={book.isbn[0]} className={classes.root}>
            <Container component="main" maxWidth="s" className={classes.contains}>
              <CssBaseline />
              <Paper className={classes.paper}>
                <Grid container spacing={3}>
                  <Grid item xs>
                    <CardMedia> 
                      <img
                        className={classes.image}
                        src="http://covers.openlibrary.org/b/isbn/9781593275846.jpg"
                        alt="book cover" />
                      </CardMedia>
                  </Grid>
                  <Grid item xs sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography className={classes.typograph} gutterBottom variant="h5">
                        {book.title}
                      </Typography>
                      <Typography className={classes.typograph}gutterBottom variant="h6">
                        {book.isbn[0]}
                      </Typography>
                      <Typography className={classes.typograph} variant="body2" gutterBottom>
                        {book.author_name[0]}
                      </Typography>
                      <Typography className={classes.typograph} variant="body2" color="textSecondary">
                        {book.fist_publish_year}
                      </Typography>
                      <Typography className={classes.typograph} variant="body2" color="textSecondary">
                        {book.publisher[0]}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <CardActions>
                        <Button
                          size='xs'
                          onClick={() => handleBookSave(book)}>
                            Add to library
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

export default BookCard