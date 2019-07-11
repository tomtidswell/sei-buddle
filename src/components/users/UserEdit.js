import React from 'react'
import axios from 'axios'
import Auth from '../../lib/Auth'

class UserEdit extends React.Component {
  constructor() {
    super()


    this.state = { data: {}, errors: {}  }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  getData() {
    axios.get(`/api/users/${this.props.match.params.id}`)
      .then(res => this.setState({ user: res. data }))
      .catch(err => console.log(err))
  }

  handleChange({ target: { name, value } }) {
    const data = { ...this.state.data, [name]: value }
    this.setState({ data })
  }

  handleSubmit(e) {
    e.preventDefault()

    axios.put(`/api/events/${this.props.match.params.id}`, this.state.data,{
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })

      .then(() => this.props.history.push(`/events/${this.props.match.params.id}`))
      .catch(err => console.log(err.response))
  }

  render() {
    return (
      <main>
        <section className="form-container">
          <form onSubmit={this.handleSubmit}>
            <h2 className="form-title">Edit Profile</h2>
            <div className="field">
              <div className="control">
                <input
                  className={`input ${this.state.errors.username ? 'is-danger' : ''}`}
                  name="username"
                  placeholder="Username"
                  onChange={this.handleChange}
                />
              </div>
              {this.state.errors.username && <small className="help is-danger">{this.state.errors.username}</small>}
            </div>
            <div className="field">
              <div className="control">
                <input
                  className={`input ${this.state.errors.username ? 'is-danger' : ''}`}
                  name="email"
                  placeholder="Email"
                  onChange={this.handleChange}
                />
              </div>
              {this.state.errors.email && <small className="help is-danger">{this.state.errors.email}</small>}
            </div>
            <div className="field">
              <div className="control">
                <input
                  className={`input ${this.state.errors.password ? 'is-danger' : ''}`}
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={this.handleChange}
                />
              </div>
              {this.state.errors.password && <small className="help is-danger">{this.state.errors.password}</small>}
            </div>
            <div className="field">
              <div className="control">
                <input
                  className={`input ${this.state.errors.passwordConfirmation ? 'is-danger' : ''}`}
                  type="password"
                  name="passwordConfirmation"
                  placeholder="Password Confirmation"
                  onChange={this.handleChange}
                />
              </div>
              {this.state.errors.passwordConfirmation && <small className="help is-danger">{this.state.errors.passwordConfirmation}</small>}
            </div>
            <div className="field">
              <div className="control">
                <input
                  className={`input ${this.state.errors.bio ? 'is-danger' : ''}`}
                  type="bio"
                  name="bio"
                  placeholder="Write a small bio about yourself..."
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="field">
              <div className="control">
                <input
                  className={`input ${this.state.errors.image ? 'is-danger' : ''}`}
                  name="image"
                  placeholder="Image"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <button type="submit" className="button">Update</button>
          </form>
        </section>
      </main>
    )
  }
}

export default UserEdit
