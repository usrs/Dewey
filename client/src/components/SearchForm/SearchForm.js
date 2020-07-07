import React, { useContext } from 'react'
import BookContext from '../../utils/BookContext'
//material-ui elements
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  submit: {
    color: '#E44D2E',
  },
  input: {
    marginTop: theme.spacing(3),
    background: "white",
    borderColor: "#E44D2E",
    borderRadius: "5px"
  },
}))

const SearchForm = () => {

  const classes = useStyles()

  const {
    search,
    handleInputBookChange,
    handleBookSubmit
  } = useContext(BookContext)

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <form
          className={classes.form}
          onSubmit={handleBookSubmit}>
          <TextField
            id="outlined-basic"
            placeholder="Enter you book's ISBN..."
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="search"
            className={classes.input}
            value={search}
            onChange={handleInputBookChange} />
          <Button
            className={classes.submit}
            fullWidth
            variant="contained"
            type="submit"
            onClick={handleBookSubmit}
          >
            Search
          </Button>
        </form>
      </div>
    </Container>
  )
}

export default SearchForm
