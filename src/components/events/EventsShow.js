import React from 'react'
import axios from 'axios'

class EventsShow extends React.Component {
  constructor() {
    super()

    this.state = { events: null }
  }

  componentDidMount() {
    this.getData()
  }

  getData() {
    axios.get(`/api/events/${this.props.match.params.id}`)
      .then(res => this.setState({ events: res. data }))
      .catch(err => console.log(err))
  }

  render() {
    if (!this.state.events) return null
    const { events } =  this.state
    return (
      <main className="section">
        <div className="container">
          <h2 className="title">{events.name}</h2>
          <h4 className="title">Description</h4>
          <p>{events.description}</p>
          <hr />
          <h4 className="title">Date</h4>
          <p>{events.date}</p>
          <hr />
          <h4 className="title">Location</h4>
          <p>{events.location}</p>
          <hr />
        </div>
      </main>
    )
  }



}

export default EventsShow
