import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/events'>Index</Link>
      <Link to='/events/new'>Create New Event</Link>
    </nav>
  )
}

export default Navbar
