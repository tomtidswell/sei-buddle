import React from 'react'
import { Link } from 'react-router-dom'

class Home extends React.Component {
  render() {
    return (
      <section className="home-page">

        <div className="card">
          <div className="card-content">
            <p className="title">
              Buddle
            </p>
            <p className="subtitle">
              Interesting strapline here
            </p>
          </div>
        </div>

        <br />

        <div className="columns is-multiline">
          <div className="column">
            <Link to="/events?category=sports">
              <div className="card">
                <div className="card-content">
                  <p className="title">Sports</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="column">
            <Link to="/events?category=skills">
              <div className="card">
                <div className="card-content">
                  <p className="title">Skills</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="column">
            <Link to="/events?category=experiences">
              <div className="card">
                <div className="card-content">
                  <p className="title">Experiences</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="column">
            <Link to="/events?category=pet-playdates">
              <div className="card">
                <div className="card-content">
                  <p className="title">Furry Friends</p>
                </div>
              </div>
            </Link>
          </div>
        </div>

      </section>
    )
  }
}

export default Home
