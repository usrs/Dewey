import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Login from './pages/Login'
import SignUp from './pages/SignUp'

const App = () => {

  const [userState, setUserState] = useState({

  })

  userState.handleInputChange = event => {
    setUserState({ ...userState, [event.target.name]: event.target.value })
    console.log(userState)
  }

  return(
    <Router>
      <div>
        <Switch>
          <Route exact path='/'>
            <SignUp />
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
