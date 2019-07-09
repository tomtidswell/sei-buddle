import React from 'react'
import axios from 'axios'
import Auth from '../../lib/Auth'

class EventsShow extends React.Component {
  constructor() {
    super()

    this.state = { events: null }
    this.handleDelete = this.handleDelete.bind(this)
  }

  componentDidMount() {
    this.getData()
  }

  getData() {
    axios.get(`/api/events/${this.props.match.params.id}`)
      .then(res => this.setState({ events: res. data }))
      .catch(err => console.log(err))
  }

  isOwner() {
    return Auth.getpayload().user === this.state.event.user
  }

  handleDelete() {
    axios.delete(`/api/events/${this.props.match.params.id}  `, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(() => this.props.history.push('/index'))
      .catch(err => console.log(err.response))
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
          <p>{new Date(events.date).toLocaleDateString()}</p>
          <hr />
          <h4 className="title">Location</h4>
          <div key={location._id}>
            <p>{location.city}</p>
            <p>{location.line1}</p>
            <p>{location.postcode}</p>
          </div>
          <hr />
          {
            this.Owner &&
            <button onClick={this.handleDelete} className="button is-danger">Delete</button>
          }

        </div>
      </main>
    )
  }
}

export default EventsShow
