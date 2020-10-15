import React from 'react'
import { Link } from 'react-router-dom'
import './css/nav.css'
import TokenService from '../services/TokenService'

export default class Nav extends React.Component {


  handleLogoutClick = () => {
    TokenService.clearAuthToken();
  }

  renderLogoutLink() {
    return (
      <li className="left">
        <Link
          onClick={this.handleLogoutClick}
          to='/'>
          Logout
            </Link>
      </li>
    )
  }

  renderLoginLink() {
    return (
      <li className="left">
        <Link
          to='/login'>
          Log in
            </Link>
      </li>
    )
  }

  renderRegisterLink() {
    return (
      <li className="right">
        <Link
          to='/register'>
          Register
            </Link>
      </li>
    )
  }

  render() {
    return <>
      <nav className='Header'>
        <ul>
          <li className="right">

            
              {TokenService.hasAuthToken() ? <Link to='/home'>
                {/* insert fontawesome icon of some kind here */}
                Moodify
              </Link> : <Link to='/'>Moodify</Link>}
          

          </li>

          
            {TokenService.hasAuthToken() ? <li><span className='Nav--wide'>Track your mental health!</span></li> : null}
          
          {/* <li> */}
          {TokenService.hasAuthToken()
            ? this.renderLogoutLink()
            : this.renderLoginLink()}

          {/* </li> */}
          {/* <li> */}
          {!TokenService.hasAuthToken()
            ? this.renderRegisterLink() : null}
          {/* </li> */}

        </ul>
        
      </nav>
    </>
  }
}