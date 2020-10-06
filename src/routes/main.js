import React from 'react'
import { Switch } from 'react-router-dom'
import Home from '../components/home'
import LandingPage from '../components/landing-page'
import AddMood from '../components/add-mood'
import LoginForm from '../components/login-form'
import PrivateRoute from '../components/Utils/PrivateRoute'
import PublicOnlyRoute from '../components/Utils/PublicOnlyRoute'
import RegistrationForm from '../components/registration-form'

const Main = () => (
    <>
        <Switch>
            {/* make private and public routes to ensure these are not visited 
        again by logged-in users */}
            <PublicOnlyRoute exact path="/" component={LandingPage} />
            <PrivateRoute path="/home" component={Home} />
            <PrivateRoute path="/add-mood" component={AddMood} />
            <PublicOnlyRoute path="/login" component={LoginForm} />
            <PublicOnlyRoute path="/register" component={RegistrationForm} />
        </Switch>
    </>
)

export default Main