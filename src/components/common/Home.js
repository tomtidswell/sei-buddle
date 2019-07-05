import React from 'react'

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
            <div className="card">Sports
            </div>
            <div className="card">Skills
            </div>
          </div>
          <div className="column">
            <div className="card">Experiences
            </div>
            <div className="card">Furry Friends
            </div>
          </div>
        </section>
      </main>
    )
  }
}

export default Home
