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
          <div className='Header__logged-in'>
            <Link
              onClick={this.handleLogoutClick}
              to='/'>
              Logout
            </Link>
          </div>
        )
      }

      renderLoginLink() {
        return (
          <div className='Header__not-logged-in'>
            <Link
              to='/login'>
              Log in
            </Link>
            <br />
            <Link
              to='/register'>
              Register
            </Link>
          </div>
        )
      }

      render() {
        return <>
          <nav className='Header'>
            <h1>
              <Link to='/home'>
                {/* insert fontawesome icon of some kind here */}
                Moodify
              </Link>
            </h1>
            <span className='Nav--wide'>Track your mental health!</span>
            {TokenService.hasAuthToken()
              ? this.renderLogoutLink()
              : this.renderLoginLink()}
          </nav>
        </>
      }
    }