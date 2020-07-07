import React, { useContext } from 'react'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'
import LoginContext from '../../utils/LoginContext'
import Logo from '../../Logo/deweyWhite.png'


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
  large: {
    width: theme.spacing(16),
    height: theme.spacing(16),
    marginTop: theme.spacing(3),
    margin: "auto"
  },
  text: {
    textAlign: 'center',
    textSize: "",
    color: "black",
  },
  input: {
    marginTop: theme.spacing(1),
    background: "white",
    borderColor: "#E44D2E",
    borderRadius: "5px"
  },
  button: {
    marginTop: theme.spacing(2),
    color: "#E44D2E"
  },
  login: {
    color: "white",
    marginTop: theme.spacing(2),
  },
}))

const LoginForm = () => {
  const classes = useStyles()

  const {
    username,
    password,
    handleInputLoginChange,
    handleLoginSubmit,
    handleSignUpDivert
  } = useContext(LoginContext)

  return(
    <div>
      <Avatar alt="Dewey" src={Logo} className={classes.large} />
      <h3 className={classes.text}>Login</h3>
      <Grid 
        container
        direction="column"
        justify="center"
        alignItems="center">
          <TextField
            required
            className={classes.input}
            id="outlined-required"
            label="username"
            name="username"
            variant="outlined"
            value={username}
            onChange={handleInputLoginChange}
          />
          <TextField
            required
            className={classes.input}
            id="outlined-required"
            label="password"
            name="password"
            variant="outlined"
            type="password"
            value={password}
            onChange={handleInputLoginChange}
          />
          <Button
            variant="contained"
            label="signInBtn"
            // color="primary"
            href="#outlined-buttons"
            className={classes.button}
            onClick={handleLoginSubmit}>
            Login
          </Button>
          <Button
            className={classes.login}
            onClick={handleSignUpDivert}>
            Not yet a user? Sign up
          </Button>
      </Grid>
    </div>
  )
}

export default LoginForm