import React, { useContext, useEffect, useState } from 'react'
import BookShelfContext from '../../utils/BookShelfContext'
import axios from 'axios'
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
    maxWidth: '75%',
    maxHeight: '75%',
  },
  contains: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: '25px',
  },
}))

const LoanBook = () => {

  const classes = useStyles()

  const [loanBookState, setLoanBookState] = useState({
    books: []
  })

  // to render user's book cards on load
  useEffect(() => {
    axios.get('/api/bookshelf', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('id')}`
      }
    })
      .then(({ data }) => {
        console.log(data)
        setLoanBookState({ ...loanBookState, books: data.books })
      })
      .catch(err => console.error(err))
  }, [])

  return (
    <div>
      {
        loanBookState.books.map(book => {
          console.log(book)
          return (
            <div key={book.bookId} className={classes.root}>
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
                              color='danger'>
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
          )
        })
      }
    </div>
  )

}

export default LoanBook
