import React, { PropTypes } from 'react';

class Login extends React.Component {
  render () {
    return (
      <div className="login">
        <h1>Login</h1>
        <input type="text "className="email" placeholder="Email..."></input>
        <input type="password" className="password" placeholder="Password:"></input>
        <input type="password" className="confPassword" placeholder="Conf Password"></input>
        <button className="loginBtn" value="Login"></button>
        <span>Or...<a href="/#/login">Register Here</a></span>
      </div>
    );
  }
}

export default Login;
