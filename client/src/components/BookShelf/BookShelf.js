import React, { useContext, useEffect, useState } from "react";
import BookShelfContext from "../../utils/BookShelfContext";
import axios from "axios";
// material-ui elements
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Modal } from "@material-ui/core";
import { render } from "react-dom";
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    maxWidth: 500,
  },
  modalPaper: {
    position: "absolute",
    width: 400,
    backgroundColor: "#fff",
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  image: {
    marginRight: "25px",
    display: "inline-block",
    maxWidth: "90%",
    maxHeight: "90%",
  },
  contains: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "25px",
  },
}));

// makes typography mobile responsive
let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand()
  const left = 50 + rand()

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const BookShelf = () => {
  const classes = useStyles();

  const [bookShelfState, setBookShelfState] = useState({
    books: [],
    loaned: [],
  })

  bookShelfState.handleDeleteBook = book => {
    // console.log(book)
    axios.delete(`/api/bookshelf/${book._id}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('id')}`
      },
    })
      .then(() => {
        const books = JSON.parse(JSON.stringify(bookShelfState.books))
        const booksFiltered = books.filter(boock => boock._id !== book._id)
        setBookShelfState({ ...bookShelfState, books: booksFiltered })
      })
      .catch(err => console.error(err))
  }

  // to render user's SAVED book cards on load
  // useEffect(() => {
  //   axios.get("/api/bookshelf", {
  //       headers: {
  //         Authorization: `Bearer ${localStorage.getItem("id")}`,
  //       },
  //     })
  //     .then(({ data }) => {
  //       data.forEach(books => {
  //         if (books.isLoaned === false) {
  //           setBookShelfState({ ...bookShelfState, books: data.books })
  //         } else {
  //           setBookShelfState({ ...bookShelfState, loaned: data.books })
  //         }
  //       })
  //       console.log(bookShelfState.books)
  //       console.log(bookShelfState.loaned)
  //     })
  //     .catch((err) => console.error(err))
  // }, [])
  

  // to render user's LOANED books
  useEffect(() => {
    axios.get('/api/bookshelf', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('id')}`
      }
    })
      .then((data) => {
        console.log(data)
        setBookShelfState({ ...bookShelfState, books: data.books })
        console.log(bookShelfState.books)
        // remove book after saved
        //boock is intentional, feel free to ask Erika about it.
        // const books = bookShelfState.books
        // const loanBooksFiltered = books.filter(loans => loans.isLoaned === true)
        // setBookShelfState({ ...bookShelfState, loaned: loanBooksFiltered })
      })
      .catch(err => console.error(err))
  }, [])

  const [isOpen, setOpenStatus] = useState(false);
  const [modalStyle] = React.useState(getModalStyle)

  const handleBookLoan = (book) => {
    axios.post(`/api/bookshelf/loan/${book._id}`, {
      name: document.querySelector('input[name="name"]').value,
      phone: document.querySelector('input[name="phone"]').value,
      email: document.querySelector('input[name="email"]').value
    }, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("id")}`,
      }
    })
    .then(() => {
    
    })
    .catch((err) => console.error(err))
  }

  // bookShelfState.updateLoanShelf = (book) =>{
  //   axios.put(`/api/bookshelf/loan/${book._id}`, {
  //     // setting is loaned to opposite of current value
  //     book.isLoaned= !isLoaned,
  //     name: document.querySelector('input[name="name"]').value,
  //     phone: document.querySelector('input[name="phone"]').value,
  //     email: document.querySelector('input[name="email"]').value
  //   })
  //   .then(() =>{
  //     // update item with id and change to have new is loaned value

  //     // local copy of array
  //     const loaned = JSON.parse(JSON.stringify(loanBookState.loaned))
  //     loaned.forEach(loan => {
  //       if(loan._id === id ) {
  //         book.isLoaned = !isLoaned
  //       }
  //     })
  //     setbookShelfState({ ...bookShelfState, books })
  //   })
  //   .catch(err => console.error(err))
  // }

  return (
    <>
    <ThemeProvider theme={theme}>
    <div>
      {
      bookShelfState.books.map((book) => {
        console.log(book);
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
                        alt="book shelf"
                      />
                    </CardMedia>
                  </Grid>
                  <Grid item xs={6} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                      <Grid item xs>
                        <Typography
                          className={classes.typograph}
                          gutterBottom
                          variant="h6"
                        >
                          {book.title}
                        </Typography>
                        <Typography
                          className={classes.typograph}
                          gutterBottom
                          variant="h7"
                        >
                          ISBN: {book.isbn}
                        </Typography>
                        <Typography
                          className={classes.typograph}
                          variant="body2"
                          color="textSecondary"
                          >
                          Author: {book.author}
                        </Typography>
                        <Typography
                          className={classes.typograph}
                          variant="body2"
                          color="textSecondary">
                          Published: {book.publishDate}
                        </Typography>
                        <Typography
                          className={classes.typograph}
                          variant="body2"
                          color="textSecondary">
                          Publisher: {book.publisher}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <CardActions>
                          <Button 
                          size="small" 
                          color="danger"
                          onClick={() => bookShelfState.handleDeleteBook(book)}>
                            Remove from Library
                          </Button>
                          <Button
                            size="small"
                            onClick={() => {
                              setOpenStatus(true);
                            }}
                          >
                            Loan
                          </Button>
                          <Modal
                            open={isOpen}
                            onClose={() => {
                              setOpenStatus(false);
                            }}
                            aria-labelledby="simple-modal-title"
                            aria-describedby="simple-modal-description"
                          >
                            <div
                              style={modalStyle}
                              className={classes.modalPaper}
                            >
                              <h2 id="simple-modal-title">Text in a modal</h2>
                              <form>
                              {/* Form or Button */}
                              <input placeholder="Name" type="text" name="name" />
                              <input placeholder="Mobile Number" type="tel" name="phone" />
                              <input placeholder="Email" type="email" name="email" />
                              <Button
                              type="submit"
                              onClick={(event) => {
                                event.preventDefault()
                                handleBookLoan(book)
                              }}>
                                Loan Book
                              </Button>
                              </form>
                            </div>
                          </Modal>
                        </CardActions>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Container>
          </div>
        );
      })}
    </div>
  </ThemeProvider>
  </>
  );
};

export default BookShelf;
/*

                            */
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
