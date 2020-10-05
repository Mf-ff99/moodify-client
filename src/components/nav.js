import React from 'react'
import {Link } from 'react-router-dom'
import './css/nav.css'

export default class Nav extends React.Component {

    render(){
        return (
            <div className="nav">
                <Link to='/home'>
                 Home
                </Link>
                <Link to='/login'>
                 Login
                </Link>
                <Link to='/logout'>
                 Logout
                </Link>
                <Link to='/register'>
                 Register
                </Link>

            </div>
        )
    }
}