import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

class Cats extends Component {
  render() {
    return (
      <div>
        <div className="text">
          &ensp; &ensp; &ensp; &ensp;
          <p>
            <h1>Cats for Adoption</h1>
          </p>
          &ensp; &ensp; &ensp; &ensp; &ensp; &ensp;
        </div>
        <div class="card-deck">
          <div class="card">
            <img src="images/cat1.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">American Shorthair</h5>
              <p class="card-text">
                <b className="price">500 L.E</b>
              </p>
              <Button href="#" variant="outline-primary">
                View{" "}
              </Button>
            </div>
          </div>
          <div class="card">
            <img src="images/cat2.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Colorpoint Shorthair </h5>
              <p class="card-text">
                <b className="price">860 L.E</b>
              </p>
              <Button href="#" variant="outline-primary">
                View{" "}
              </Button>
            </div>
          </div>
          <div class="card">
            <img src="images/cat3.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">American Bobtail</h5>
              <p class="card-text">
                <b className="price">900 L.E</b>
              </p>
              <Button href="#" variant="outline-primary">
                View{" "}
              </Button>
            </div>
          </div>
        </div>
        &ensp; &ensp;
        <div class="card-deck">
          <div class="card">
            <img src="images/cat4.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Perisian Cat</h5>
              <p class="card-text">
                <b className="price">280 L.E</b>
              </p>
              <Button href="#" variant="outline-primary">
                View{" "}
              </Button>
            </div>
          </div>
          <div class="card">
            <img src="images/cat5.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Toyger</h5>
              <p class="card-text">
                <b className="price">500 L.E</b>
              </p>
              <Button href="#" variant="outline-primary">
                View{" "}
              </Button>
            </div>
          </div>
          <div class="card">
            <img src="images/cat6.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">British Shorthair</h5>
              <p class="card-text">
                <b className="price">1000 L.E</b>
              </p>
              <Button href="#" variant="outline-primary">
                View{" "}
              </Button>
            </div>
          </div>
        </div>
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

export default Cats;
