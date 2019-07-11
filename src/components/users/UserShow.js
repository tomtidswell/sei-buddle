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
    return Auth.getPayload().sub === this.state.user._id
  }

  handleDelete() {
    axios.delete(`/api/users/${this.props.match.params.id}  `, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(() => this.props.history.push('/'))
      .catch(err => console.log(err.response))
  }

  render() {
    if (!this.state.user) return null
    const { user } =  this.state
    return (
      <main className="section">
        <div className="profile-container">
          <h2 className="profile-title">{user.username}</h2>
          <figure>
            <img src={user.picture} alt={user.name} className="profile-pic"/>
          </figure>
          <section className="profile-content">
            <h4 className="profile-subtitle">Bio</h4>
            <p>{user.bio}</p>
            <hr />
          </section>
          {
            this.isOwner() &&
            <div>
              <button onClick={this.handleDelete} className="user-delete">Delete</button>
              <button>
                <Link
                  className=""
                  to={`/users/${user._id}/edit`}
                >
                  Edit
                </Link>
              </button>
            </div>
          }
        </div>
      </main>
    )
  }
}

export default UserShow
