import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="top-navigation">
      <Link to='/'>Home</Link>
      <Link to='/events'>Index</Link>
      <Link to='/register'>Register</Link>
      <Link to='/login'>Login</Link>
      <Link to='/events/new'>Create New Event</Link>

    </nav>
  )
}

export default Navbar
