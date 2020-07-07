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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    // margin: '20px',
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
    maxWidth: "75%",
    maxHeight: "75%",
  },
  contains: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "25px",
  },
  typograph: {
    marginLeft: "20px",
  },
}));

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
  });

  const [isOpen, setOpenStatus] = useState(false);
  const [modalStyle] = React.useState(getModalStyle)

  const handleBookLoan = (book) => {
    // make the axios post request here
    /*make isLoaned true
     */
    axios.post(`/api/bookshelf/loan/${book._id}`, {
      name: document.querySelector('input[name="name"]').value,
      phone: document.querySelector('input[name="phone"]').value,
      email: document.querySelector('input[name="email"]').value
    }, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("id")}`,
      }
    })
    .then()
    .catch((err) => console.error(err))
  }

  // to render user's book cards on load
  useEffect(() => {
    axios
      .get("/api/bookshelf", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("id")}`,
        },
      })
      .then(({ data }) => {
        console.log(data)
        setBookShelfState({ ...bookShelfState, books: data.books })
      })
      .catch((err) => console.error(err))
  }, [])

  return (
    <div>
      {bookShelfState.books.map((book) => {
        console.log(book);
        return (
          <div key={book.bookId} className={classes.root}>
            <Container
              component="main"
              maxWidth="s"
              className={classes.contains}
            >
              <CssBaseline />
              <Paper className={classes.paper}>
                <Grid container spacing={12}>
                  <Grid item xs={6}>
                    <CardMedia>
                      <img
                        className={classes.image}
                        src="http://covers.openlibrary.org/b/isbn/9781593275846.jpg"
                        alt="book cover"
                      />
                    </CardMedia>
                  </Grid>
                  <Grid item xs={6} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                      <Grid item xs>
                        <Typography
                          className={classes.typograph}
                          gutterBottom
                          variant="h5"
                        >
                          {book.title}
                        </Typography>
                        <Typography
                          className={classes.typograph}
                          gutterBottom
                          variant="h6"
                        >
                          {book.isbn}
                        </Typography>
                        <Typography
                          className={classes.typograph}
                          variant="body2"
                          gutterBottom
                        >
                          {book.author}
                        </Typography>
                        <Typography
                          className={classes.typograph}
                          variant="body2"
                          color="textSecondary"
                        >
                          {book.publishDate}
                        </Typography>
                        <Typography
                          className={classes.typograph}
                          variant="body2"
                          color="textSecondary"
                        >
                          {book.publisher}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <CardActions>
                          <Button size="small" color="danger">
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
