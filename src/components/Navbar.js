import React from 'react';
import logo from '../assets/NV.png';
import './Navbar.scss';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <div className='left'>
        <img src={logo} alt="logo"/>
        <Link to="/" className="link">
          <span className="links_name">Home</span>
        </Link>
        <Link to="/experience" className="link">
          <span className="links_name">Experience</span>
        </Link>
        <Link to="/others" className="link">
          <span className="links_name">Others</span>
        </Link>
      </div>
      
      <div className="right">
        <a href='https://github.com/alfathnv'><i class="fa fa-github"></i></a>
        <a href='https://www.linkedin.com/in/alfathnv/'><i class="fa fa-linkedin"></i></a>
        <a href='https://www.artstation.com/alfathnoverio'><i class="fa fa-dribbble"></i></a>
      </div>
    </header>
  )
}

export default Navbar
