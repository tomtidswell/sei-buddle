import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './style.scss'

import Home from './components/common/Home'
import Navbar from './components/common/Navbar'
import EventsIndex from './components/events/EventsIndex'

const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Navbar />
        <Switch>
          <Route path="/" component={Home}/>
          <Route path="/events" component={EventsIndex} />
        </Switch>
      </main>
    </BrowserRouter>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
