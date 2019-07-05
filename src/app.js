import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './style.scss'

import Home from './components/Home'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Navbar />
        <Switch>
          <Route path="/" component={Home}/>
        </Switch>
      </main>
    </BrowserRouter>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
