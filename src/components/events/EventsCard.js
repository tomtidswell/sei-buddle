import React from 'react'
import { Link } from 'react-router-dom'

const EventsCard = ({ name, postcode, price, date, _id, user, attendees, totalAttendees, category, subcategory, imageId }) => {
  console.log(name.length)
  return (
    <div className="event-card" style={{ backgroundImage: `url(./assets/img/${category}-${subcategory}-${imageId}.jpeg)` }}>
      <Link to={`/users/${user._id}`} className="avatar-container">
        <img className="avatar" src={user.picture} title={user.username}/>
      </Link>
      <Link to={`/events/${_id}`} className="card-content">
        <h4 className="card-header-title">{name.slice(0,25) + '...'}</h4>
        <p className="card-attending">
          {`${attendees.length} of ${totalAttendees} attending`}
        </p>
        <p className="card-text">
          {new Date(date).toLocaleDateString()} | {postcode} | {price === 0 ? 'FREE' : `£${price}` }
        </p>
      </Link>
    </div>
  )
}

export default EventsCard
