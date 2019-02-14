import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <nav className='top-nav'>
        <ul className='top-nav__list'>
            <li className='top-nav__list__item'>
                <Link to="/register">Register</Link>                                
            </li>
            <li className='top-nav__list__item'>
                <Link to="/login">Login</Link>
            </li>
        </ul>
      </nav>
    )
  }
}
