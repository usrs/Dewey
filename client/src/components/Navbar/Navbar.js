import React, { useContext } from 'react'
import UserDash from '../../pages/UserDash'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: "#E44D2E"
  },
  theme: {
    backgroundColor: 'white',
  },
}))



function Navbar() {

  const classes = useStyles()
  const [auth, /*setAuth*/] = React.useState(true)
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)

  // const handleChange = (event) => {
  //   setAuth(event.target.checked)
  // }

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleLogoutSubmit = event => {
    console.log('ping!')
    localStorage.removeItem('id')
    window.location = '/Login'
  }

  return (
    <div className={classes.root}>
      {/*Login switch that sits above the menubar, it's weird and looks bad */}
      {/* <FormGroup>
        <FormControlLabel
          control={<Switch checked={auth} onChange={handleChange} aria-label="login switch" />}
          label={auth ? 'Logout' : 'Login'}
        />
      </FormGroup> */}
      <AppBar position="static">
        <Toolbar className={classes.theme}>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" className={classes.title}>
            Dewey -  Your Personal Library
          </Typography>
          {auth && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <img src="./Dewey_Red_sm.png" alt="dewey logo"/>
                {/* <AccountCircle /> */}
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <Link to='/Homepage'>
                  <MenuItem onClick={handleClose}>
                    Home
                  </MenuItem>
                </Link>
                <Link to='/UserDash'>
                  <MenuItem onClick={handleClose}>
                    Profile
                  </MenuItem>
                </Link>
                <MenuItem onClick={handleLogoutSubmit}>Log Out</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar