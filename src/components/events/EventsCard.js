import React from 'react'
import { Link } from 'react-router-dom'

const EventsCard = ({ name, postcode, price, date, _id, user, attendees, totalAttendees }) => {
  return (
    <div className="event-card">

      <Link to={`/events/${_id}`}>
        <div className="card-header">
          <h4 className="card-header-title">{name}</h4>
          <h4 className="card-header-title">{postcode}</h4>
        </div>
      </Link>

      <div className="card-content">
        <div className="event-users">
          <div className="event-users-child">
            <Link to={`/users/${user._id}`}>
              <img className="avatar" src={user.picture} title={user.username}/> | {user.username}
            </Link>
          </div>
          <div className="event-users-child">
            <Link to={`/events/${_id}`}>
              {`${attendees.length} of ${totalAttendees} attending`}
            </Link>
          </div>
        </div>
      </div>

      <div className="card-footer">
        <p>{new Date(date).toLocaleDateString()}</p>
        <p>
          {price === 0 ? 'FREE' : `£${price}` }
        </p>
      </div>

    </div>
  )
}

export default EventsCard
