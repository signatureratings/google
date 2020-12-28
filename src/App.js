import './App.css'
import Home from './Home'
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SearchPage from './SearchPage'
import Error from './Error'

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/search'>
            <SearchPage />
          </Route>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='*'>
            <Error />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
