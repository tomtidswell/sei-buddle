import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Auth from '../../lib/Auth'

class EventsShow extends React.Component {
  constructor() {
    super()

    this.state = { event: null }
    this.handleDelete = this.handleDelete.bind(this)
  }

  componentDidMount() {
    this.getData()
  }

  getData() {
    axios.get(`/api/events/${this.props.match.params.id}`)
      .then(res => this.setState({ event: res. data }))
      .catch(err => console.log(err))
  }

  isOwner() {
    return Auth.getPayload().sub === this.state.event.user
  }

  handleDelete() {
    axios.delete(`/api/events/${this.props.match.params.id}  `, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(() => this.props.history.push('/index'))
      .catch(err => console.log(err.response))
  }

  render() {
<<<<<<< HEAD

    if (!this.state.event) return null
    const { event } =  this.state

    if (!this.state.events) return null
    const { events } =  this.state
    console.log(events)

=======
    if (!this.state.event) return null
    const { event } =  this.state
>>>>>>> edit
    return (
      <main className="section">
        <div className="container">
          <h2 className="title">{event.name}</h2>
          <h4 className="title">Description</h4>
          <p>{event.description}</p>
          <hr />
          <h4 className="title">Date</h4>
          <p>{new Date(event.date).toLocaleDateString()}</p>
          <hr />
          <h4 className="title">Location</h4>
          <div key={location._id}>
            <p>{location.city}</p>
            <p>{location.line1}</p>
            <p>{location.postcode}</p>
<<<<<<< HEAD
            <hr />
            <h4 className="title">Going</h4>
=======
>>>>>>> edit
          </div>
          <hr />
          {
            this.isOwner() &&
            <div>
              <button onClick={this.handleDelete} className="button is-danger">Delete</button>
              <Link
                className="button is-left is-warning"
                to={`/events/${event._id}/edit`}
              >
                Edit
              </Link>
            </div>
          }
        </div>
      </main>
    )
  }
}

export default EventsShow
