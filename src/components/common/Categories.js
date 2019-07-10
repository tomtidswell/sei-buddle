import React from 'react'
import { Link } from 'react-router-dom'

const Modal = ({ show }) => {

  return (
    <main className={show ? 'modal display-block' : 'modal display-none'}>
      <div className="modal-main">
        <div className="columns is-multiline">
          <div className="column">
            <Link to="/events?category=sports">
              <div className="cat-card">
                <div className="card-content">
                  <p className="title">Sports</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="column">
            <Link to="/events?category=skills">
              <div className="cat-card">
                <div className="card-content">
                  <p className="title">Skills</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="column">
            <Link to="/events?category=experiences">
              <div className="cat-card">
                <div className="card-content">
                  <p className="title">Experiences</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="column">
            <Link to="/events?category=pet-playdates">
              <div className="cat-card">
                <div className="card-content">
                  <p className="title">Furry Friends</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Modal
