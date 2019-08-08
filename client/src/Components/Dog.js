import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
class Dog extends Component {
  render() {
    return (
      <div>
        <div className="text">
          &ensp; &ensp; &ensp; &ensp;
          <p>
            <h1>Dogs for Adoption</h1>
          </p>
          &ensp; &ensp; &ensp; &ensp; &ensp; &ensp;
        </div>
        <div class="card-deck">
          <div class="card">
            <img src="images/dootsdogs.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Dalmation </h5>
              <p class="card-text">
                <b className="price">2800 L.E</b>
              </p>
              <Button href="#" variant="outline-primary">
                View{" "}
              </Button>
            </div>
          </div>
          <div class="card">
            <img src="images/dog3.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Norfolk Terrier</h5>
              <p class="card-text">
                <b className="price">5000 L.E</b>
              </p>
              <Button href="#" variant="outline-primary">
                View{" "}
              </Button>
            </div>
          </div>
          <div class="card">
            <img src="images/puppy.jpeg" class="card-img-top" alt="..." />
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
        </div>
        &ensp; &ensp;
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
            <img src="images/whitedog.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Puppy</h5>
              <p class="card-text">
                <b className="price">3090 L.E</b>
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

export default Dog;
{
  /* <img src="images/dootsdogs.jpg" class="card-img-top" alt="..." /> */
}
{
  /* <img src="images/dog3.jpg" class="card-img-top" alt="..." />
            <img src="images/puppy.jpeg" class="card-img-top" alt="..." />
            <img src="images/husky.jpg" class="card-img-top" alt="..." />
            <img src="images/dog.jpg" class="card-img-top" alt="..." />
            <img src="images/whitedog.jpg" class="card-img-top" alt="..." /> */
}
