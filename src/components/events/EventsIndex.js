import React, { Component } from 'react'
// import axios from 'axios'
import EventsCard from './EventsCard'

class EventsIndex extends Component {
  constructor() {
    super()

    this.state = { events: null }
  }

  render() {
    return (
      <section className="section">
        <div className="conatiner">
          <div className="columns is-multiline">
            {this.state.events.map(events => (
              <EventsCard
                key={events._id}
                {...events}
              />
            ))}
          </div>
        </div>
      </section>

    )
  }
}

export default EventsIndex
