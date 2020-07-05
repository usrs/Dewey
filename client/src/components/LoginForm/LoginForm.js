import React , { useContext } from 'react'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import LoginContext from '../../utils/LoginContext'

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
    '& > *': {
      margin: theme.spacing(1),
    },
    flexGrow: 1, 
  },
  paper: {
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  }
}))

const LoginForm = () => {
  const classes = useStyles()

  const {
    username,
    password,
    handleInputLoginChange,
    handleLoginSubmit
  } = useContext(LoginContext)

  return(
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
      <TextField
        required
        id="outlined-required"
        label="username"
        name="username"
        variant="outlined"
        value={username}
        onChange={handleInputLoginChange}
      />
      </Grid>
      <Grid item xs={12}>
        <TextField
          required
          id="outlined-required"
          label="password"
          name="password"
          variant="outlined"
          value={password}
          onChange={handleInputLoginChange}
        />
        <Button
          variant="outlined"
          label="signInBtn"
          color="primary"
          href="#outlined-buttons"
          onClick={handleLoginSubmit}>
          Submit
        </Button>
        </Grid>
      </Grid>
    </div>
    
  )
}

export default LoginForm