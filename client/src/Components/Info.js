import React, { Component } from "react";
import "./Info.css";
import Button from "react-bootstrap/Button";

class Info extends Component {
  render() {
    return (
      <div className="info">
        <div className="text">
        &ensp;
         &ensp;
         &ensp;
         &ensp;
          <p>
            <h1>Pets for Adoption</h1>
          </p>
          &ensp;
         &ensp;
         &ensp;
         &ensp;
         &ensp;
         &ensp;
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
            <img src="images/dog3.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
            <h5 class="card-title">Puppy</h5>
              <p class="card-text">
                <b className="price">8000 L.E</b>
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
        &ensp;
         &ensp;
        <div class="card-deck">
          <div class="card">
            <img src="images/husky.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
            <h5 class="card-title">Siberian Husky</h5>
              <p class="card-text">
                <b className="price">11,000 L.E</b>
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
            <img src="images/dog.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
            <h5 class="card-title">Labrador Retriever</h5>
              <p class="card-text">
                <b className="price">1200 L.E</b>
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

export default Info;
