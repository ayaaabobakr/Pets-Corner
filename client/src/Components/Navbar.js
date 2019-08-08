import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Navbar.css";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <div className="jumbotron">
          <div className="container text-center">
            <img src="images/logo1.jpg" className="image" alt="" />
          </div>
        </div>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <ul className="navbar-nav">
            <Link to="/">
              <a className="navbar-brand">
                &ensp;
                <img
                  src="images/doglogo.png"
                  width="45"
                  className="d-inline-block align-top"
                  alt=""
                />
              </a>
            </Link>

            <li className="nav-item">
              <Link to="/">
                <p className="nav-link">Home</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/aboutus">
                <p className="nav-link">About Us</p>
              </Link>
            </li>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              <NavDropdown.Item href="/dog">Dogs</NavDropdown.Item>

              <NavDropdown.Item href="/cats">Cats</NavDropdown.Item>

              <NavDropdown.Item href="/other">Else</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Offers</NavDropdown.Item>
            </NavDropdown>
          </ul>
          &ensp;
          <ul className="nav navbar-nav navbar-right">
            <Link to="/register">
              
              <button type="button" className="btn btn-danger">
                Sign Up
              </button>
            </Link>
          </ul>
          &ensp;
          <ul className="nav navbar-nav navbar-right">
            <Link to="/login">
              <button type="button" className="btn btn-danger">
                Login
              </button>
            </Link>
          </ul>

          {/* <ul className="nav navbar-nav navbar-right">
              <button type="button" className="btn btn-danger">
                Logout
              </button>
          </ul> */}

        </nav>

        <style>
          {" "}
          {"\
        .price{\
            color:green;\
        }\
        "}
        </style>

      </div>
    );
  }
}

export default withRouter(Navbar);
