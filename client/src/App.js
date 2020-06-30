import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import 'antd/dist/antd.css'
import Login from './pages/Login'
import SignUp from './pages/SignUp'

const App = () => {
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
