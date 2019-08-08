import React, { Component } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        &ensp;
         &ensp; 
         &ensp; 
         &ensp; 
         &ensp; 
         &ensp;
        <footer class="container-fluid text-center">
          <p>Pets Copyright</p>
          <form class="form-inline">
            Get Your Pet &ensp;
            {/* <input type="email" class="form-control" size="50" placeholder="Email Address"></input> */}
            &ensp;
            <Link to="/register">
              <button type="button" class="btn btn-danger">
                Sign Up
              </button>
            </Link>
          </form>
          <div className="call">
            <p>
              <img src="images/call.jpg" alt="..." /> <h5>Any Question?</h5>
            </p>
            call us : +10
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
