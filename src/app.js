import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './style.scss'
import './styleHomepage.scss'
import './styleProfile.scss'
// import 'bulma'

import Home from './components/common/Home'
//import Navbar from './components/common/Navbar'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import Footer from './components/common/Footer'
import BurgerMenu from './components/common/BurgerMenu'
import NotFound from './components/common/NotFound'

import EventsIndex from './components/events/EventsIndex'
import EventsShow from './components/events/EventsShow'
import EventsNew from './components/events/EventsNew'
import EventsEdit from './components/events/eventsEdit'
import UserShow from './components/users/UserShow'
import UserEdit from './components/users/UserEdit'
import SecureRoute from './components/common/SecureRoute'


const App = () => {
  return (
    <BrowserRouter>
      <main>
        <BurgerMenu />
        <div id="page-wrap">
          <Switch>
            <Route path="/users/:id/edit" component={UserEdit} />
            <Route path="/users/:id" component={UserShow} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <SecureRoute path="/events/:id/edit" component={EventsEdit} />
            <SecureRoute exact path="/events/new" component={EventsNew} />
            <Route exact path="/events/:id" component={EventsShow} />
            <Route path="/events" component={EventsIndex} />
            <Route exact path="/" component={Home}/>
            <Route path="/*" component={NotFound}/>
          </Switch>
        </div>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
