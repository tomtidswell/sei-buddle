import React from 'react'
import { Link } from 'react-router-dom'

const Modal = () => {

  return (
    <div className="columns is-multiline">
      <Link to="/events?category=sports">
        <div className="column">
          <div className="cat-card">
            <p className="title sports-title">Sports</p>
            <p className="subtitle">Looking for a tennis partner?</p>
            <hr />
            <p className="arrow">-&gt;</p>
          </div>
        </div>
      </Link>
      <Link to="/events?category=skills">
        <div className="column">
          <div className="cat-card">
            <p className="title">Skills</p>
            <p className="subtitle">Trade your language skills, ever wanted to learn French?</p>
            <hr />
            <p className="arrow">-&gt;</p>
          </div>
        </div>
      </Link>
      <Link to="/events?category=experiences">
        <div className="column">
          <div className="cat-card">
            <p className="title">Experiences</p>
            <p className="subtitle">Always fancied a trip to the zoo but don&apos;t want to go on your own?</p>
            <hr />
            <p className="arrow">-&gt;</p>
          </div>
        </div>
      </Link>
      <Link to="/events?category=pet-playdates">
        <div className="column">
          <div className="cat-card">
            <p className="title">Furry Friends</p>
            <p className="subtitle">Is your dog feeling lonely and looking for a date?!</p>
            <hr />
            <p className="arrow">-&gt;</p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Modal
