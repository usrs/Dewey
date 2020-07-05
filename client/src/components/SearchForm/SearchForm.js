import React, { useState, useContext } from 'react'
import BookContext from '../../utils/BookContext'
//material-ui elements
import { makeStyles, createMuiTheme } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
//card elements
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import CardHeader from "@material-ui/core/CardHeader"


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

  const {
    search,
    books,
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
              value={search} 
              onChange={handleInputBookChange}/>
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
