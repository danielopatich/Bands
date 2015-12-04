import React from 'react';
import jQuery from 'jQuery';
import { Link } from 'react-router';

class Register extends React.Component {
  // constructor(){
  //   super(props);
  //
  //   this.signingUp = this.signingUp.bind(this);
  // }
  //
  // signingUp(event) {
  //   event.preventDefault();
  //   let data = {username: this.refs.username.value,
  //               password: this.refs.password.value};
  //   let options = {
  //     url: 'https://api.parse.com/1/users',
  //     type: 'POST',
  //     data: data
  //   }
  // };

  render () {
    return (
      <div className="register">
        <h1>Register 4 us!</h1>
        <input type="text" className="email" placeholder="Email..."></input>
        <input type="password" className="password" placeholder="Password:"></input>
        <input type="password" className="confPassword" placeholder="Conf Password"></input>
        <button className="joinBtn" value="Join"></button>
        <span>Or...<a href="/#/login">Login Here</a></span>
      </div>
    )
  }
}

export default Register;
