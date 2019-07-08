import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './style.scss'

import Home from './components/common/Home'
import Navbar from './components/common/Navbar'
import EventsIndex from './components/events/EventsIndex'
import EventsNew from './components/events/EventsNew'

const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Navbar />
        <Switch>
<<<<<<< HEAD
          <Route path="/events/new" component={EventsNew} />
=======
>>>>>>> development
          <Route path="/events" component={EventsIndex} />
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
