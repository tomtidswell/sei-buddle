import React from 'react'
import axios from 'axios'
import EventsForm from './EventsForm'
import Auth from '../../lib/Auth'

class EventsEdit extends React.Component {
  constructor() {
    super()


    this.state = {
      data: { }
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleCatChange = this.handleCatChange.bind(this)
    this.handleSubCatChange = this.handleSubCatChange.bind(this)
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

    axios.put(`/api/events/${this.props.params}`, this.state.data,{
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })

      .then(() => this.props.history.push(`/events/${this.props.match.params}`))
      .catch(err => console.log(err.response))
  }

  render() {
    console.log('events edit')
    if (!this.state.data) return null
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
