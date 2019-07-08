import React from 'react'
// import axios from 'axios'

import EventsForm from './EventsForm'
import Auth from '../../lib/Auth'

class EventsNew extends React.Component {
  constructor() {
    super()

    this.state = { data: { category: '', subcategory: '' } }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleCatChange = this.handleCatChange.bind(this)
    this.handleSubCatChange = this.handleSubCatChange.bind(this)

  }

  handleChange(e) {
    const data = { ...this.state.data, [e.target.name]: e.target.value }
    this.setState({ data })
  }

  handleCatChange(selectedOption) {
    console.log(selectedOption)
    const data = { ...this.state.data, category: selectedOption.value }
    this.setState({ data })
  }

  handleSubCatChange(selectedOption){
    const data = { ...this.state.data, subcategory: selectedOption.value }
    this.setState({ data })
  }

  handleSubmit(e) {
    e.preventDefault()

    axios.post('/api/events', this.state.data, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })

      .then(() => this.props.history.push('/api/events'))
      .catch(err => (err.response))
  }

  render() {
    console.log(this.state.data)
    return (
      <main>
        <section>
          <EventsForm
            data={this.state.data}
            handleChange={this.handleChange}
            handleCatChange={this.handleCatChange}
            handleSubCatChange={this.handleSubCatChange}
            handleSubmit={this.Submit}
          />
        </section>
      </main>
    )
  }
}

export default EventsNew
