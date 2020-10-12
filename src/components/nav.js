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

            <h1>
              <Link to='/home'>
                {/* insert fontawesome icon of some kind here */}
                Moodify
              </Link>
            </h1>

              </li>
              
            <li>
              {TokenService.hasAuthToken() ? <span className='Nav--wide'>Track your mental health!</span> : null}
              </li>
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