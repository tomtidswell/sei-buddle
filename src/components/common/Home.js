import React from 'react'
import { Link } from 'react-router-dom'

import Dashboard from './Dashboard'

class Home extends React.Component {
  render() {
    return (
      <section className="home-page">

        <div className="container">
          <div className="card-content">
            <h1 className="title">
              BUDDLE.
            </h1>
          </div>
        </div>

        <br />
        <Dashboard />

      </section>
    )
  }
}

export default Home
