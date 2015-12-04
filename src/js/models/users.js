import React from 'react';
import  Jquery from 'jquery';
import User from '../models/users'

class User{
  constructor(){
    this.state = {
      user
    }
  }
  //
  // isLoggedIn(){
  //   return this.access_token !== null;
  //   console.log("is be logged inned")
  // }
  //
  // login(data){
  //   let url = 'https://api.parse.com/1/users'
  //   let options = {
  //     url: url,
  //     type: "POST",
  //     data: data
  //   }
  //   Jquery.ajax(options).then(response => {
  //     console.log(response, "AUTH RESPONSE, yo")
  //     let {access_token, refresh_token, expires_in} = response;
  //     console.log(access_token)
  //   })
  // };
  register(data){
    let url = 'https://api.parse.com/1/users'
    let options = {
      url: url,
      method: 'POST',
      data: {
        user: data
      }
    };

    Jquery.ajax(options).then(response =>{
      console.log(response)
    })
  };
}

export default new User();
