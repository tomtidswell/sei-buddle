import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './style.scss'
// import 'bulma'

import Home from './components/common/Home'
import Navbar from './components/common/Navbar'
import Register from './components/auth/Register'
import Login from './components/auth/Login'

import EventsIndex from './components/events/EventsIndex'
import EventsShow from './components/events/EventsShow'
import EventsNew from './components/events/EventsNew'
import EventsEdit from './components/events/EventsEdit'
import UserShow from './components/users/Usershow'


const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Navbar />
        <Switch>
          <Route path="/users/:id" component={UserShow} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/events/:id/edit" component={EventsEdit} />
          <Route exact path="/events/new" component={EventsNew} />
          <Route exact path="/events/:id" component={EventsShow} />
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
