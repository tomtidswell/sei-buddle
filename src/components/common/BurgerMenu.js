import React from 'react'
import { Link } from 'react-router-dom'
import { pushRotate as Menu } from 'react-burger-menu'

import Auth from '../../lib/Auth'

class BurgerMenu extends React.Component {
  constructor() {
    super()

    this.state = { }

  }



  showSettings (e) {
    e.preventDefault()
  }

  render () {
    return (
      <Menu >
        <main>
          <Link to='/' className="nav-link">Home</Link>
          <Link to='/events' className="nav-link">Index</Link>
          <Link to='/register' className="nav-link">Register</Link>
          <Link to='/login' className="nav-link">Login</Link>
          <Link to='/events/new' className="nav-link">Create New Event</Link>
          <Link to={`/users/${this.state.userId}`} className="nav-link">View Profile</Link>
          <a onClick={this.logout} className="nav-link">Log Out</a>
        </main>
      </Menu>
    )
  }
}

export default BurgerMenu
