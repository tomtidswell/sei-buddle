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
                  <figure>
                    <img src="https://media.istockphoto.com/photos/various-sport-equipments-on-grass-picture-id949190756?k=6&m=949190756&s=612x612&w=0&h=dNek5l5xc68G0gCZv-fe0vHP8kjDpAYFrRnSPh8iLyc=" />
                  </figure>
                  <p className="title">Sports</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="column">
            <Link to="/events?category=skills">
              <div className="cat-card">
                <div className="card-content">
                  <figure>
                    <img src="https://d26a57ydsghvgx.cloudfront.net/content/blog/1_NewZendeskHeaders/skills%20based%20routing_preview.png" />
                  </figure>
                  <p className="title">Skills</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="column">
            <Link to="/events?category=experiences">
              <div className="cat-card">
                <div className="card-content">
                  <figure>
                    <img src="https://dl1.cbsistatic.com/i/r/2018/08/09/b6ca69f8-f123-408c-9b1f-ea3f9cf1fb17/resize/620xauto/8787947d1d00135d3f2ed512e56bee72/concert-crowd.jpg" />
                  </figure>
                  <p className="title">Experiences</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="column">
            <Link to="/events?category=pet-playdates">
              <div className="cat-card">
                <div className="card-content">
                  <figure>
                    <img src="http://shannonspetsitting.net/wp-content/uploads/2016/06/pets.jpg" />
                  </figure>
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
