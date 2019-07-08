import React from 'react'
import { Link } from 'react-router-dom'

const EventsCard = ({ name, postcode, price, date, _id }) => {
  return (
    <div className="card">
      <Link to={`/events/${_id}`}>
        <div className="card-header">
          <h4 className="card-header-title">{name}</h4>
          <h4 className="card-header-title">{postcode}</h4>
        </div>
        <div className="card-content">
          <p>{new Date(date).toLocaleDateString()}</p>
          <p>£{price}</p>
        </div>
      </Link>
    </div>
  )
}

export default EventsCard
