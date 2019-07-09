import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import Auth from '../../lib/Auth'


class Navbar extends React.Component {
  constructor() {
    super()

    this.state = { }
    this.logout = this.logout.bind(this)
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

  logout() {
    Auth.logout()
    this.props.history.push('/')
  }

  render() {

    return (
      <nav className="top-navigation">
        <Link to='/'>Home</Link>
        <Link to='/events'>Index</Link>
        {!Auth.isAuthenticated() && <Link to='/register'>Register</Link>}
        {!Auth.isAuthenticated() && <Link to='/login'>Login</Link>}
        {Auth.isAuthenticated() && <Link to='/events/new'>Create New Event</Link>}
        {Auth.isAuthenticated() && <Link to={`/users/${this.state.userId}`}>View Profile</Link>}
        {Auth.isAuthenticated() && <a onClick={this.logout}>Log Out</a>}


      </nav>
    )
  }
}

export default withRouter(Navbar)
