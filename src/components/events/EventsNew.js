import React from 'react'
import axios from 'axios'

import EventsForm from './EventsForm'
import Auth from '../../lib/Auth'

class EventsNew extends React.Component {
  constructor() {
    super()

    const now = new Date(Date.now()).toJSON()

    this.state = { data: { category: '', subcategory: '' , date: now }, errors: {} }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleCatChange = this.handleCatChange.bind(this)
    this.handleSubCatChange = this.handleSubCatChange.bind(this)
    this.handleAttChange = this.handleAttChange.bind(this)

  }

  handleChange(e) {
    const data = { ...this.state.data, [e.target.name]: e.target.value }
    if (e.target.name === 'priceTBC' &&  this.state.data.priceTBC) delete data.priceTBC
    const errors = { ...this.state.errors, [name]: '' }
    this.setState({ data, errors })
  }

  handleCatChange(selectedOption) {
    const data = { ...this.state.data, category: selectedOption.value }
    this.setState({ data })
  }

  handleSubCatChange(selectedOption){
    const data = { ...this.state.data, subcategory: selectedOption.value }
    this.setState({ data })
  }

  handleAttChange(totalAttendees) {
    const data = { ...this.state.data, totalAttendees: totalAttendees.value }
    this.setState({ data })
  }

  handleSubmit(e) {
    e.preventDefault()

    axios.post('/api/events', this.state.data, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })

      .then(() => this.props.history.push('/events'))
      .catch(err => this.setState({ errors: err.response.data.errors }))
  }

  render() {
    console.log(this.state)
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
            buttonText="Create a New Event"
          />
        </section>
      </main>
    )
  }
}

export default EventsNew
