import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { push as Menu } from 'react-burger-menu'

import Auth from '../../lib/Auth'

class BurgerMenu extends React.Component {
  constructor() {
    super()

    this.state = { menuOpen: false }
    this.closeMenu = this.closeMenu.bind(this)
    this.logout = this.logout.bind(this)
  }

  closeMenu(){
    //console.log('close menu')
    this.setState({ menuOpen: false })
  }

  handleMenuStateChange (state) {
    this.setState({ menuOpen: state.isOpen })
  }

  showSettings (e) {
    e.preventDefault()
  }

  componentDidMount() {
    this.setState({ userId: Auth.getPayload().sub })
  }

  logout() {
    Auth.logout()
    this.props.history.push('/')
  }


  render () {
    //console.log(this.state.menuOpen)
    const isAuth = Auth.isAuthenticated()
    return (
      <Menu
        onStateChange={(state) => this.handleMenuStateChange(state)}
        isOpen={this.state.menuOpen}
        pageWrapId={ 'page-wrap' }
        outerContainerId={ 'root' }>
        <Link to='/' className="menu-item" onClick={this.closeMenu}>Home</Link>
        <Link to='/events' className="menu-item" onClick={this.closeMenu}>Index</Link>
        {!isAuth &&
          <Link to='/register' className="menu-item" onClick={this.closeMenu}>Register</Link>
        }
        {!isAuth &&
          <Link to='/login' className="menu-item" onClick={this.closeMenu}>Login</Link>
        }
        {isAuth &&
          <Link to='/events/new' className="menu-item" onClick={this.closeMenu}>Create New Event</Link>
        }
        {isAuth &&
          <Link to={`/users/${this.state.userId}`} className="menu-item" onClick={this.closeMenu}>View Profile</Link>
        }
        {isAuth &&
          <a onClick={this.logout} className="menu-item">Log Out</a>
        }
      </Menu>
    )
  }
}

export default withRouter(BurgerMenu)
