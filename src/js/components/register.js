import React from 'react';
import jQuery from 'jQuery';
import { Link } from 'react-router';

class Register extends React.Component {
  constructor(){
    super(props);

    this.signingUp = this.signingUp.bind(this);
  }

  signingUp(event) {
    event.preventDefault();
    let data = {username: this.refs.username.value,
                password: this.refs.password.value
    };

    if (!email || !password || password !== confirmPassword){
      console.log(email, password, confirmPassword)
      alert("Please fill out all fields!")
      } else {
      User.register({
        data: data
      })
    }
  }
  // 
  // jQuery.ajaxSetup({
  //   headers : {
  //     "X-Parse-Application-Id": "lRKpBMLtmboTzXsqaDc3QrxpWlQOtUzqd5S8KrXI",
  //     "X-Parse-REST-API-Key": "vaTKoTPxCkt9JWRC3RGO8lluovkGYaG"
  //   }
  // })


  render () {
    return (
      <div className="register">
        <h1>Register 4 us!</h1>
        <form>
          <input type="text" className="email" placeholder="Email..."></input>
          <input type="password" className="password" placeholder="Password:"></input>
          <input type="password" className="confPassword" placeholder="Conf Password"></input>
          <button onClick={this.signingUp} className="joinBtn" value="Join"></button>
        </form>
      </div>
    )
  }
}

export default Register;
