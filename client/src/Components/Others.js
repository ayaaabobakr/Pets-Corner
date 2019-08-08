import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

class Others extends Component {
  render() {
    return (
      <div>
        <div className="text">
          &ensp; &ensp; &ensp; &ensp;
          <p>
            <h1>For Adoption</h1>
          </p>
          &ensp; &ensp; &ensp; &ensp; &ensp; &ensp;
        </div>
        <div class="card-deck">
          <div class="card">
            <img src="images/bird1.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">White Cockatoo</h5>
              <p class="card-text">
                <b className="price">10,000 L.E</b>
              </p>
              <Button href="#" variant="outline-primary">
                View{" "}
              </Button>
            </div>
          </div>
          <div class="card">
            <img src="images/Turtle.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Turtle</h5>
              <p class="card-text">
                <b className="price">200 L.E</b>
              </p>
              <Button href="#" variant="outline-primary">
                View{" "}
              </Button>
            </div>
          </div>
          <div class="card">
            <img src="images/bird.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Blue Budgerigar</h5>
              <p class="card-text">
                <b className="price">150 L.E</b>
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
            <img src="images/rabbit1.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">New Zeland Red</h5>
              <p class="card-text">
                <b className="price">299 L.E</b>
              </p>
              <Button href="#" variant="outline-primary">
                View{" "}
              </Button>
            </div>
          </div>
          <div class="card">
            <img src="images/rabbit.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">New Zeland White</h5>
              <p class="card-text">
                <b className="price">200 L.E</b>
              </p>
              <Button href="#" variant="outline-primary">
                View{" "}
              </Button>
            </div>
          </div>
          <div class="card">
            <img src="images/bird2.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title" >Love Birds</h5>
              <p class="card-text">
                <b className="price" >1000 L.E</b>
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

export default Others;
