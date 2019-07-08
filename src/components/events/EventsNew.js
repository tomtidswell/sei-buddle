import React from 'react'
import axios from 'axios'

import EventsForm from './EventsForm'

class EventsNew extends React.Component {
  constructor() {
    super()

    this.state = { data: { } }

    this.handleChange = this.handleChange.bind(this)

  }

  handleChange(e) {
    const data = { ...this.state.data, [e.target.name]: e.target.value }
    this.setState({ data })
  }

  render() {
    return (
      <main>
        <section>
          <EventsForm
            data={this.state.data}
            handleChange={this.handleChange}
          />
        </section>
      </main>
    )
  }
}

export default EventsNew


// <label>Address Line One</label>
// <div className="control">
//   <input
//     className="input"
//     name="address-line-one"
//     placeholder="Address Line One"
//   />
// </div>
// <label>Address Line Two</label>
// <div className="control">
//   <input
//     className="input"
//     name="address-line-two"
//     placeholder="Address Line Two"
//   />
// </div>
// <label>City</label>
// <div className="control">
//   <input
//     className="input"
//     name="city"
//     placeholder="City"
//   />
// </div>
