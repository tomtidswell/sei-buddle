import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import Auth from '../../lib/Auth'


class Navbar extends React.Component {
  constructor() {
    super()

    this.state = { }
  }

  componentDidMount() {
    this.getUserId()
    this.setLocationInState()
  }

  getUserId() {
    this.setState({ userId: Auth.getPayload().sub })
  }

  componentDidUpdate() {
    if (this.state.previousLocation !== this.props.history.location) {
      this.getUserId()
      this.setLocationInState()
    }
  }

  setLocationInState() {
    this.setState({ previousLocation: this.props.history.location })
  }

  render() {
    if (!this.state.userId) return null
    return (
      <nav className="top-navigation">
        <Link to='/'>Home</Link>
        <Link to='/events'>Index</Link>
        <Link to='/register'>Register</Link>
        <Link to='/login'>Login</Link>
        <Link to='/events/new'>Create New Event</Link>
        <Link to={`/users/${this.state.userId}`}>View Profile</Link>

      </nav>
    )
  }
}

export default withRouter(Navbar)
