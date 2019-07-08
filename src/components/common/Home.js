import React from 'react'
import { Link } from 'react-router-dom'

class Home extends React.Component {
  render() {
    return (
      <main>
        <section className="title">
          <div>
            <h1>Buddle</h1>
            <h2>Interesting strapline here</h2>
          </div>
        </section>
        <section className="categories">
          <div className="column">
            <div className="card">
              <Link to="/events?category=sports">Sports</Link>
            </div>
            <div className="card">
              <Link to="/events?category=skills">Skills</Link>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <Link to="/events?category=experiences">Experiences</Link>
            </div>
            <div className="card">
              <Link to="/events?category=pet-playdates">Furry Friends</Link>
            </div>
          </div>
        </section>
      </main>
    )
  }
}

export default Home
