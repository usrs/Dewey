import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Homepage from './pages/Homepage'
import axios from 'axios'
import SignUpContext from './utils/SignUpContext'
import LoginContext from './utils/LoginContext'


const App = () => {

  const [signUpState, setSignUpState] = useState({
    name: '',
    email: '',
    username: '',
    password: ''
  })

  signUpState.handleInputSignUpChange = event => {
    setSignUpState({ ...signUpState, [event.target.name]: event.target.value })
  }

  signUpState.handleSignUpSubmit = event => {
    event.preventDefault()
    axios.post('/api/users/register', signUpState)
      .then(({ data }) => {
        console.log(data)
        // If data equals new user, then window.location to homepage
        // Else, alert "User already exists, please sign in"
      })
      .catch(err => console.error(err))
  }

  const [loginState, setLoginState] = useState({
    username: '',
    password: ''
  })

  loginState.handleInputLoginChange = event => {
    setLoginState({ ...loginState, [event.target.name]: event.target.value})
  }

  loginState.handleLoginSubmit = event => {
    event.preventDefault()
    axios.post('/api/users/login', loginState)
      .then(({ data }) => {
        if (data) {
          localStorage.setItem('user', data)
          window.location = '/Homepage'
        }  else {
          console.log('something')
          } 
        }
         
      )
      .catch(err => console.error(err))
  }

  return(
    <Router>
      <div>
        <Switch>
          <Route exact path='/'>
            <SignUpContext.Provider value={signUpState}>
              <SignUp />
            </SignUpContext.Provider>
          </Route>
          <Route path='/Login'>
            <LoginContext.Provider value={loginState}>
              <Login />
            </LoginContext.Provider>
          </Route>
          <Route path='/Homepage'>
            <Homepage />
          </Route>
        </Switch>
      </div>
    </Router>
    // <>
    // <Login />
    // <div>
    //   hello world
    // </div>
    // </Router>
  )
}

export default App
