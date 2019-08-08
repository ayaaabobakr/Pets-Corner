import React, { Component, Fragment } from "react";
import { Slide } from "./lib";
import "./App.css";
import Navbar from "./Components/Navbar.js";
import Footer from "./Components/Footer.js";
import Info from "./Components/Info.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./Components/auth/Register";
import Login from "./Components/auth/Login";
import Aboutus from "./Components/Aboutus";
import Dog from "./Components/Dog";
import Cats from "./Components/Cats";
import Others from "./Components/Others";

class App extends Component {
  constructor() {
    super();
    this.state = {
      zoomOutImages: [
        "images/slide_2.jpg",
        "images/slide_1.jpg",
        "images/slide_5.jpg"
      ],
      slideImages: [
        "images/slide_1.jpg",
        "images/slide_2.jpg",
        "images/slide_3.jpg"
      ],
      fadeImages: [
        "images/slide_5.jpg",
        "images/slide_6.jpg",
        "images/slide_7.jpg"
      ]
    };
  }

  render() {
    const properties = {
      duration: 5000,
      transitionDuration: 500,
      infinite: true,
      indicators: true,
      onChange: (oldIndex, newIndex) => {
        console.log(
          `Slide transition finished from ${oldIndex} to ${newIndex}`
        );
      }
    };

    const { slideImages } = this.state;

    return (
      <Router>
        <Fragment>
          <div className="app">
            <Navbar />

            <div>
              <Route
                exact
                path="/"
                render={() => (
                  <div className="slide-container">
                    <Slide {...properties}>
                      {slideImages.map((each, index) => (
                        <div key={index} className="each-slide">
                          <div style={{ backgroundImage: `url(${each})` }}>
                            {/*<span>Slide {index + 1}</span>*/}
                            <div className="font">
                              <h2>They Need Your Love and Care</h2>
                            </div>
                          </div>
                        </div>
                      ))}
                    </Slide>
                  </div>
                )}
              />

              <Route exact path="/" render={() => <Info />} />

              <section className="container">
                <Switch>
                <Route path="/dog" render={() => <Dog />} />
                <Route path="/cats" render={() => <Cats />} />
                <Route path="/other" render={() => <Others />} />

                  <Route path="/aboutus" render={() => <Aboutus />} />
                  <Route path="/register" render={() => <Register />} />
                  <Route path="/login" render={() => <Login />} />
                </Switch>
              </section>

              <Footer />
            </div>
          </div>
        </Fragment>
      </Router>
    );
  }
}

export default App;
