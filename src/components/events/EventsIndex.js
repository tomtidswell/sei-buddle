import React, { Component } from 'react'
import axios from 'axios'
import EventsCard from './EventsCard'
import Filters from '../common/Filters'

class EventsIndex extends Component {
  constructor() {
    super()

    this.state = { events: null, data: {} }

    this.handleFilterChange = this.handleFilterChange.bind(this)
  }

  componentDidMount() {
    axios.get(`/api/events${this.props.location.search}`)
      .then(res => {
        console.log(res)
        this.setState( { events: res.data })
      })
      .catch(err => console.log(err))
  }

  handleFilterChange(e){
    console.log('filter updated', e.target.name)
    this.setState({ ...this.state.data, [e.target.name]: e.target.value })
  }


  render() {
    if (!this.state.events) return null
    console.log(this.state.events)
    return (
      <section className="section">
        <div className="container filters">
          <Filters
            handleChange={this.handleFilterChange}
            data={this.state.data}
          />
        </div>
        <div className="container">
          {this.state.events.map(events => (
            <EventsCard
              key={events._id}
              {...events}
            />
          ))}
        </div>
      </section>

    )
  }
}

export default EventsIndex
