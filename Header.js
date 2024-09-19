import React from 'react';
import icon from './icon.png'; // Import the image
import './App.css'; // Import the CSS file
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"> <img src={icon} width="75" height="48" /></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#"></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="Index.html" style={{ fontSize: '14px' }}>HOME</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="about.html" style={{ fontSize: '14px' }}>ABOUT</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="contact.html" style={{ fontSize: '14px' }}>CONTACT US</a>
            </li>
          </ul>
          
        </div>
      </div>
    </nav>
  );
}

export default Header;
