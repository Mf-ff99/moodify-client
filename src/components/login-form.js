import React from 'react'
import AuthApiService from '../services/AuthApiService'
import TokenService from '../services/TokenService'

export default class LoginForm extends React.Component {


  state = {
    username: '',
    password: '',
    error: null
  }

  onLoginSuccess = () => {
    this.props.history.push('/home')
  }

  
  handleSubmitJwtAuth = ev => {
    ev.preventDefault()
    this.setState({ error: null })
    const { username, password } = ev.target

    console.log(username.value, password.value)
 
    AuthApiService.postLogin({
      user_name: username.value,
      password: password.value,
    })
      .then(res => {
        username.value = ''
        password.value = ''
        TokenService.saveAuthToken(res.authToken)
        this.onLoginSuccess()
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  }


  render() {
    return (
      <section className="login-form">
        <h1>Log in</h1>

        <form className="LoginForm"
         onSubmit={this.handleSubmitJwtAuth}
        >

          <div className="container">
            <label htmlFor="username"><b>Username</b></label>
            <input type="text" placeholder="Enter Username" name="username" required />
            <br />
            <label htmlFor="password"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="password" required />

            <button type="submit">Login</button>
            {/* <label>
        <input type="checkbox" checked="checked" name="remember"> Remember me</input>
      </label> */}
          </div>

          {/* <div class="container" style={{ "background-color": "#f1f1f1"}}>
      <button type="button" class="cancelbtn">Cancel</button>
      <span class="psw">Forgot <a href="#">password?</a></span>
    </div> */}
        </form>

      </section>
    )
  }
}