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
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '25px',
  },
}))

const LoanBook = () => {

  const classes = useStyles()

  const [loanBookState, setLoanBookState] = useState([])

  const handleReturnSubmit = book => {
    // making axios request here
  }
  
  // to render user's book cards on load
  useEffect(() => {
    axios.get('/api/bookshelf', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('id')}`
      }
    })
      .then(({ data }) => {
        const loanBooksFiltered = data.books.filter(loans => loans.isLoaned === true)
        setLoanBookState([ ...loanBooksFiltered ])
        // console.log(books)
      })
      .catch(err => console.error(err))
  }, [])

  const handleBookReturn = (event) => {
    event.preventDefault();

    const { bookId } = event.target

    axios.post(`/api/bookshelf/returnBook/${bookId.value}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("id")}`,
        }
      },
    ).then(() => window.location.reload())
    .catch(error => console.log(error))
  }

  return (
    <div>
      {
        loanBookState.map(book => {
          console.log(book)
          return (
            <div key={book.bookId} className={classes.root}>
              <Container 
              component="main" 
              maxWidth="s" 
              className={classes.contains}>
                <CssBaseline />
                <Paper className={classes.paper}>
                  <Grid container spacing={12}>
                    <Grid 
                    direction="row"
                      justify="space-around"
                      alignItems="flex-start"
                      item xs={6}>
                      <CardMedia>
                        <img
                          className={classes.image}
                          src="./books_image_2.jpg"
                          alt="book shelf" />
                      </CardMedia>
                    </Grid>
                    <Grid item xs={6} sm container>
                      <Grid 
                      item xs container direction="column" spacing={2}>
                        <Grid item xs>
                          <Typography
                            className={classes.typograph}
                            gutterBottom
                            variant="h6">
                            {book.title}
                          </Typography>
                          <Typography
                            className={classes.typograph}
                            gutterBottom
                            variant="h7">
                            ISBN: {book.isbn}
                          </Typography>
                          <Typography className={classes.typograph} variant="body2"
                          color="textSecondary">
                            Author: {book.author}
                          </Typography>
                          <Typography className={classes.typograph} variant="body2" color="textSecondary">
                            Lent to: {book.name}
                          </Typography>
                          <Typography className={classes.typograph} variant="body2" color="textSecondary">
                            Contact Email: {book.email}
                          </Typography>
                          <Typography className={classes.typograph} variant="body2" color="textSecondary">
                            Contact Phone: {book.phone}
                          </Typography>
                        </Grid>
                        <Grid item>
                          <CardActions>
                            <Button
                              size='small'
                              onClick={handleBookReturn}
                              >
                              Return
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
