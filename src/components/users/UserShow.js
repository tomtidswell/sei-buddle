import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Auth from '../../lib/Auth'

class UserShow extends React.Component {
  constructor() {
    super()

    this.state = { user: null }
    this.handleDelete = this.handleDelete.bind(this)
  }

  componentDidMount() {
    this.getData()
  }

  getData() {
    axios.get(`/api/users/${this.props.match.params.id}`)
      .then(res => this.setState({ user: res. data }))
      .catch(err => console.log(err))
  }

  isOwner() {
    return Auth.getPayload().sub === this.state.user
  }

  handleDelete() {
    axios.delete(`/api/users/${this.props.match.params.id}  `, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(() => this.props.history.push('/index'))
      .catch(err => console.log(err.response))
  }

  render() {
    if (!this.state.user) return null
    const { user } =  this.state
    return (
      <main className="section">
        <div className="container">
          <h2 className="title">{user.username}</h2>
          <figure>
            <img src={user.picture} alt={user.name} />
          </figure>
          <h4 className="title">Age</h4>
          <p>{user.age}</p>
          <hr />
          <h4 className="title">Bio</h4>
          <p>{user.bio}</p>
          <hr />
          {
            this.isOwner() &&
            <div>
              <button onClick={this.handleDelete} className="button is-danger">Delete</button>
              <Link
                className="button is-left is-warning"
                to={`/users/${user._id}/edit`}
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

export default UserShow
