import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const EventsCard = ({ name, postcode, price, date, _id, user, attendees, totalAttendees, description }) => {
  return (
    <div className="event-card">
      <div className="card-header">
        <Link to={`/events/${_id}`} className="link">
          <figure className="event-card-photo">
            <img src="https://image.shutterstock.com/mosaic_250/276265/292597868/stock-photo-into-the-forest-nature-composition-292597868.jpg" className="event-photo" />
          </figure>
          <h4 className="card-header-title">{name}</h4>
          <p className="card-header-date">{new Date(date).toLocaleDateString()}</p>
          <h4 className="card-header-title">{postcode}</h4>
          <p className="card-price">
            {price === 0 ? 'FREE' : `£${price}` }
          </p>
        </Link>
      </div>
      <div className="card-content">
        <div className="event-users">
        </div>
      </div>
      <div className="card-footer">
        <div className="event-users-child-user">
          <Link to={`/users/${user._id}`} className="link">
            <img className="avatar" src={user.picture} title={user.username}/>
          </Link>
        </div>
        <div className="event-users-child-att">
          <Link to={`/events/${_id}`} className="link">
            {`${attendees.length} of ${totalAttendees} attending`}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default EventsCard
