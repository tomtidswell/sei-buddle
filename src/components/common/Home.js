import React from 'react'
// import { Link } from 'react-router-dom'

import Categories from './Categories'

class Home extends React.Component {
  render() {
    return (
      <section className="home-page">
        <div className="card-content">
          <h1 className="title">
            BUDDLE
          </h1>
          <h2 className="subtitle">
            Buddy huddle your way to new skills and interests!
          </h2>
        </div>
        <Categories />
      </section>
    )
  }
}

export default Home
