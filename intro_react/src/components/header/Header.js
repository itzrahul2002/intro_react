import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <Link className="navbar-brand logo" to="/">Company Logo</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar1">
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/Men">Men</Link>
                </li>
                {/* <li className="nav-item">
                    <Link className="nav-link" to="/Women">Women</Link>
                </li> */}
                <li className="nav-item">
                    <Link className="nav-link" to="/live-conact-list">Live</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/about-us">About Us</Link>
                </li>
                {/* <li className="nav-item">
                    <Link className="nav-link" to="/contact-us">Contact Us</Link>
                </li> */}
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="/contact-us" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Contact Us
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="/contact-us">Contact</a></li>
                    <li><a className="dropdown-item" href="/Conact-list">Contact List</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                   <Link className="nav-link" to="/services">Services</Link>
                </li>
            </ul>
            <i className="fa-solid fa-magnifying-glass fa-bounce search"></i>
            <i className="fa-solid fa-cart-shopping cart"></i>
          </div>
        </div>
      </nav>
     </>
    )
  }
}
