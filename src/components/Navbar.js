import React from 'react';
import logo from '../assets/NV.png';
import './Navbar.scss';

function Navbar() {
  return (
    <header>
      <img className="logo" src={logo} alt="logo"/>
      <div className="social">
        <a href='https://github.com/alfathnv'><i class="fa fa-github"></i></a>
        <a href='https://www.linkedin.com/in/alfathnv/'><i class="fa fa-linkedin"></i></a>
        <a href='https://www.artstation.com/alfathnoverio'><i class="fa fa-dribbble"></i></a>
      </div>
    </header>
  )
}

export default Navbar
