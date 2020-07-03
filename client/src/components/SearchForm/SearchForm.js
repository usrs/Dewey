import React, { useState } from 'react'
import BookContextProvider, { BookContext } from '../../utils/BookContext/BookContext'
import { makeStyles, createMuiTheme } from '@material-ui/core/styles'
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
    color: '#FFFFFF',
    backgroundColor: '#E44D2E',
    outlineColor: '#E44D2E',
    
  },
}))

const SearchForm = () => {

  const classes = useStyles()

  const [searchValue, changeSearchValue] = useState('');

  return (
    <BookContextProvider>
      <BookContext.Consumer>
        {({ books, handleSearchBook }) => (
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
              <form className={classes.form} onSubmit={handleSearchBook}>
                <TextField
                  id="outlined-basic" 
                  placeholder="Enter you book's ISBN..." 
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="search"
                  value={searchValue}
                  onChange={event => changeSearchValue(event.target.value)}
                />
                <Button
                  className={classes.submit}
                  fullWidth
                  variant="contained"
                  type="submit"
                >
                  Search
                </Button>
              </form>
            </div>
          </Container>
        )}
      </BookContext.Consumer>
    </BookContextProvider>
  )
}

export default SearchForm;
