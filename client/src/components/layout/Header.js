import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import Navbar from './Navbar';

class Header extends Component {
  render() {
    return (
      <header className='main-header'>
        <h1>LOGO</h1>
        <Link className="btn" to="/">Home</Link>        
        <Navbar />
      </header>
    )
  }
}

export default Header;