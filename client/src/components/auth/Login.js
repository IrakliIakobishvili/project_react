import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { loginUser } from '../../actions/authActions';

class Login extends Component {
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
        let userData = {
            email: this.state.email,
            password: this.state.password
        }
        this.props.loginUser(userData);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
          this.props.history.push('/dashboard');
        }
    
        if (nextProps.errors) {
          this.setState({ errors: nextProps.errors });
        }
      }


  render() {
    const { errors } = this.state;
    
    return (
        <React.Fragment>
        <h1>Login Form</h1>
        <ul>
            <li>
                <input value={this.state.email} onChange={this.onChange} type='text' name='email' placeholder='Email' className={classnames('register-input',{'invalid':errors.email})}></input>
                {errors.email && (<div className='invalid-feedback'>{errors.email}</div>)}
            </li>
            <li>
                <input value={this.state.password} onChange={this.onChange} type='password' name='password' placeholder='Password' className={classnames('register-input',{'invalid':errors.password})}></input>
                {errors.password && (<div className='invalid-feedback'>{errors.password}</div>)}
            </li>
            <li><input onClick={this.onClick} type='submit' value='Login'></input></li>
        </ul>
        </React.Fragment>
    )
  }
}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};
  
  const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, { loginUser })(Login);