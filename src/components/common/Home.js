import React from 'react'
// import { Link } from 'react-router-dom'

import Categories from './Categories'

class Home extends React.Component {
  render() {
    return (
      <section className="home-page">
        <h1 className="title">BUDDLE</h1>
        <h2 className="strapline">buddle: /ˈbʌd(ə)l/ <em>noun</em> ; def. 1. find cool events 2. form huddles 3. make new buddies!</h2>
        <Categories />
      </section>
    )
  }
}

export default Home
