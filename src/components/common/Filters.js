import React from 'react'
import { Link } from 'react-router-dom'

const Filters = ({ data, handleChange }) => {
  console.log('', data)
  return (
    <nav>
      <form>
        <label className="">
          <input type="radio"
            checked={data.category === 'sport'}
            name="category"
            onChange={handleChange}
            value="sports"/>
          Sport
        </label>
        <label className="">
          <input type="radio"
            checked={data.category === 'skills'}
            name="category"
            onChange={handleChange}
            value="skills"/>
          Skills
        </label>
        <Link to="/events?category=sports">Sports</Link>
        <Link to="/events?category=skills">Skills</Link>
        <Link to="/events?category=experiences">Experiences</Link>
        <Link to="/events?category=pet-playdates">Pet playdates</Link>
      </form>
    </nav>
  )
}

export default Filters
