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
        <Link to='/' className="menu-item">Home</Link>
        <Link to='/events' className="menu-item">Index</Link>
        <Link to='/register' className="menu-item">Register</Link>
        <Link to='/login' className="menu-item">Login</Link>
        <Link to='/events/new' className="menu-item">Create New Event</Link>
        <Link to={`/users/${this.state.userId}`} className="menu-item">View Profile</Link>
        <a onClick={this.logout} className="menu-item">Log Out</a>
      </Menu>
    )
  }
}

export default BurgerMenu
