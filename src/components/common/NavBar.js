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

  toggleNavbar() {
    this.setState({ navbarOpen: !this.state.navbarOpen })
  }

  render() {

    return (
      <nav className="top-navigation">
        <Link to='/' className="nav-link">Home</Link>
        <Link to='/events' className="nav-link">Index</Link>
        {!Auth.isAuthenticated() && <Link to='/register' className="nav-link">Register</Link>}
        {!Auth.isAuthenticated() && <Link to='/login' className="nav-link">Login</Link>}
        {Auth.isAuthenticated() && <Link to='/events/new' className="nav-link">Create New Event</Link>}
        {Auth.isAuthenticated() && <Link to={`/users/${this.state.userId}`} className="nav-link">View Profile</Link>}
        {Auth.isAuthenticated() && <a onClick={this.logout} className="nav-link">Log Out</a>}


      </nav>
    )
  }
}

export default withRouter(Navbar)
