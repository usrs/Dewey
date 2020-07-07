import React from 'react'
import BookShelf from '../../components/BookShelf'
import LoanBook from '../../components/LoanBook'
import './app.css'
import { Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  border: {
    marginTop: '15px',
  }
}))

const UserDash = () => {

  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid className={classes.border} container spacing={3}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <h1>Your Bookshelf</h1>
            <BookShelf />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <h1>Loaned List</h1>
            <LoanBook />
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

export default UserDash