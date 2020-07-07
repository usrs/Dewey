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
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles'


const useStyles = makeStyles((theme) => ({
  // root: {
  //   flexGrow: 1,
  // },
  paper: {
    padding: theme.spacing(2),
    // margin: '20px',
    maxWidth: 500,
  },
  image: {
    // marginRight: '25px',
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

// makes typography mobile responsive
let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

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
    <>
    <ThemeProvider theme={theme}>
    <div>
      {
        books.map(book => (
          <div key={book.isbn[0]} className={classes.root}>
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
                        src="./books_image_1.jpg"
                        alt="book cover" />
                      </CardMedia>
                  </Grid>
                  <Grid item xs={6} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                      <Grid 
                      item xs container 
                      direction="column" 
                      justify="flex-start"
                      alignItems="flex-start"
                      spacing={2}>
                      <Typography className={classes.typograph} gutterBottom variant="h5">
                        {book.title}
                      </Typography>
                      <Typography className={classes.typograph}gutterBottom variant="h6">
                        {book.isbn[0]}
                      </Typography>
                      <Typography className={classes.typograph} variant="body2" gutterBottom>
                        Author: {book.author_name[0]}
                      </Typography>
                      <Typography className={classes.typograph} variant="body2" color="textSecondary">
                        {book.fist_publish_year}
                      </Typography>
                      <Typography className={classes.typograph} variant="body2" color="textSecondary">
                        Publisher: {book.publisher[0]}
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
    </ThemeProvider>
    </>
  )
}

export default BookCard