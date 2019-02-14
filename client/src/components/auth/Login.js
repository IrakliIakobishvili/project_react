import React, { Component } from 'react'

export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            errors: {}
        };
        this.onChange = this.onChange.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }
    onClick(e) {
        let loginUser = {
            email: this.state.email,
            password: this.state.password
        }
        console.log(loginUser)
    }


  render() {
    return (
        <React.Fragment>
        <h1>Login Form</h1>
        <ul>
            <li><input value={this.state.email} onChange={this.onChange} type='text' name='email' placeholder='Email'></input></li>
            <li><input value={this.state.password} onChange={this.onChange} type='password' name='password' placeholder='Password'></input></li>
            <li><input onClick={this.onClick} type='submit' value='Login'></input></li>
        </ul>
        </React.Fragment>
    )
  }
}
