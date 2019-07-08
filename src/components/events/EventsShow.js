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
    console.log(events)
    return (
      <main className="section">
        <div className="container">
          <h2 className="title">{events.name}</h2>
          <h4 className="title">Description</h4>
          <p>{events.description}</p>
          <hr />
          <h4 className="title">Date</h4>
          <p>{new Date(events.date).toLocaleDateString()}</p>
          <hr />
          <h4 className="title">Location</h4>
          {events.location.map(location => (
            <div key={location._id}>
              <p>{location.city}</p>
              <p>{location.line1}</p>
              <p>{location.postcode}</p>
            </div>
          ))}
          <hr />
        </div>
      </main>
    )
  }
}

export default EventsShow
