import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import classnames from 'classnames';
import {connect} from 'react-redux';
import {registerUser} from '../../actions/authActions';

class Register extends Component {
  constructor() {
      super();
      this.state = {
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          password2: '',
          errors: {}
      };
      this.onChange = this.onChange.bind(this);
      this.onClick = this.onClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(e) {
      this.setState({[e.target.name]: e.target.value});
  }
  onClick(e) {
    //   e.preventDefault();
      let newUser = {
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          email: this.state.email,
          gender: this.state.gender,
          address: this.state.address,
          password: this.state.password,
          password2: this.state.password2
      }
    //   console.log(newUser)
    this.props.registerUser(newUser, this.props.history);
  }

  render() {
    const {errors} = this.state;

    return (
      <React.Fragment>
          <h1>Register Form</h1>
          <ul>
              <li>
                <input value={this.state.firstName} onChange={this.onChange} type='text' name='firstName' placeholder='First Name' className={classnames('register-input',{'invalid':errors.firstName})}></input>
                {errors.firstName && (<div className='invalid-feedback'>{errors.firstName}</div>)}
              </li>
              <li>
                <input value={this.state.lastName} onChange={this.onChange} type='text' name='lastName' placeholder='Last Name' className={classnames('register-input',{'invalid':errors.lastName})}></input>
                {errors.lastName && (<div className='invalid-feedback'>{errors.lastName}</div>)}
              </li>
              <li>
                <input value={this.state.email} onChange={this.onChange} type='text' name='email' placeholder='Email' className={classnames('register-input',{'invalid':errors.email})}></input>
                {errors.email && (<div className='invalid-feedback'>{errors.email}</div>)}
              </li>
              <li>
                <input value={this.state.gender} onChange={this.onChange} type='text' name='gender' placeholder='Gender' className={classnames('register-input',{'invalid':errors.gender})}></input>
                {errors.gender && (<div className='invalid-feedback'>{errors.gender}</div>)}
              </li>
              <li>
                <input value={this.state.address} onChange={this.onChange} type='text' name='address' placeholder='address' className={classnames('register-input',{'invalid':errors.address})}></input>
                {errors.address && (<div className='invalid-feedback'>{errors.address}</div>)}
              </li>
              <li>
                <input value={this.state.password} onChange={this.onChange} type='password' name='password' placeholder='Password' className={classnames('register-input',{'invalid':errors.password})}></input></li>
                {errors.password && (<div className='invalid-feedback'>{errors.password}</div>)}
              <li>
                <input value={this.state.password2} onChange={this.onChange} type='password' name='password2' placeholder='Confirm password' className={classnames('register-input',{'invalid':errors.password2})}></input></li>
                {errors.password2 && (<div className='invalid-feedback'>{errors.password2}</div>)}
              <li><input onClick={this.onClick} type='submit' value='Register'></input></li>
          </ul>
      </React.Fragment>
    )
  }
}

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});
  

// export default connect(mapStateToProps,{registerUser})(Register);
export default connect(mapStateToProps, { registerUser })(withRouter(Register));