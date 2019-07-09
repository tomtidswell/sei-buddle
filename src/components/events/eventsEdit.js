import React from 'react'
import axios from 'axios'
import EventsForm from './eventsForm'
import Auth from '../../lib/Auth'

class EventsEdit extends React.Component {
  constructor() {
    super()


    this.state = { data: { } }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    axios.get(`/api/events/${this.props.match.params.id}`)
      .then(res => this.setState({ data: res.data }))
      .catch(err => console.log(err.response))
  }

  handleChange({ target: { name, value } }) {
    const data = { ...this.state, [name]: value }
    this.setState({ data })
  }

  handleSubmit(e){
    e.preventDefault()

    axios.put(`/api/events/${this.props.params.id}`, this.state.data,{
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })

      .then(() => this.props.history.push(`/events/${this.props.match.params.id}`))
      .catch(err => console.log(err.response))
  }

  render() {
    if (!this.state.event) return null
    console.log('events edit')
    return (
      <main>
        <section>
          <EventsForm
            data={this.state.data}
            handleChange={this.handleChange}
            handleCatChange={this.handleCatChange}
            handleSubCatChange={this.handleSubCatChange}
            handleAttChange={this.handleAttChange}
            handleSubmit={this.handleSubmit}
          />
        </section>
      </main>
    )
  }
}

export default EventsEdit
