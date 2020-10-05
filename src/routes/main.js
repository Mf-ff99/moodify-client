import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../components/home'
import LandingPage from '../components/landing-page'
import AddMood from '../components/add-mood'
import LoginForm from '../components/login-form'

const Main = () => (
    <>
        <Switch>
            {/* make private and public routes to ensure these are not visited 
        again by logged-in users */}
            <Route exact path="/" component={LandingPage} />
            <Route path="/home" component={Home} />
            <Route path="/add-mood" component={AddMood} />
            <Route path="/login" component={LoginForm} />

            {/* <Route path="/?" component={???} */}
        </Switch>
    </>
)

export default Main