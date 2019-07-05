import React from 'react'
import { Link } from 'react-router-dom'

const MoviesCard = ({ name, postcode, price, date, _id }) => {
  return (
    <Link to={`/movies/${_id}`}>
      <div className="card">
        <div className="card-header">
          <h4 className="card-header-title">{name}</h4>
          <h4 className="card-header-title">{postcode}</h4>
        </div>
        <div className="card-content">
          <p>{date}</p>
          <p>{price}</p>
        </div>
      </div>
    </Link>
  )
}

export default MoviesCard
