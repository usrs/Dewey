import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import axios from 'axios'
import SignUpContext from './utils/SignUpContext'

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
      .then(() => {
        console.log(signUpState)
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
      .then(() => {
        console.log(loginState)
      })
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
            <Login />
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
