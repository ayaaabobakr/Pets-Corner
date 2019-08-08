import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navbar from "./Components/Navbar.js";
import Footer from "./Components/Footer.js";
import Info from "./Components/Info.js";

function Index() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

function AppRouter() {
  return (
    // <div className="app">
    //       <Navbar />
    //       <div>
    //         <div className="slide-container">
    //           <Slide {...properties}>
    //             {slideImages.map((each, index) => (
    //               <div key={index} className="each-slide">
    //                 <div style={{ backgroundImage: `url(${each})` }}>
    //                   {/*<span>Slide {index + 1}</span>*/}
    //                   <div className="font">
    //                     <h2>They Need Your Love and Care</h2>
    //                   </div>
    //                 </div>
    //               </div>
    //             ))}
    //           </Slide>
    //         </div>
    //         <br />

    //         {/*  <h3>Fade Effect</h3>
    //     <div className="slide-container">
    //       <Fade {...fadeProperties}>
    //         <div className="each-fade">
    //           <div className="image-container">
    //             <img src={fadeImages[0]} />
    //           </div>
    //           <h2>First Slide</h2>
    //         </div>
    //         <div className="each-fade">
    //           <h2>Second Slide</h2>
    //           <div className="image-container">
    //             <img src={fadeImages[1]} />
    //           </div>
    //         </div>
    //         <div className="each-fade">
    //           <div className="image-container">
    //             <img src={fadeImages[2]} />
    //           </div>
    //           <h2>Third Slide</h2>
    //         </div>
    //       </Fade>
    //     </div>

    //     <br />
    //     <h3>Zoom out Effect</h3>
    //     <div className="slide-container">
    //       <Zoom {...zoomOutProperties}>
    //         {zoomOutImages.map((each, index) => (
    //           <img key={index} style={{ width: '100%' }} src={each} />
    //         ))}
    //       </Zoom>
    //     </div>
    //     <br />
    //     <h3>Zoom in Effect</h3>
    //     <div className="slide-container">
    //       <Zoom {...zoomInProperties}>
    //         {fadeImages.map((each, index) => (
    //           <img key={index} style={{ width: '100%' }} src={each} />
    //         ))}
    //       </Zoom>
    //     </div>
    //         <br />*/}
    //         {/* <Switch> */}
    //           <Route path="/signup" Component={Footer} />

    //           <Route path="/" Component={Info} />
    //         {/* </Switch> */}
    //         {/* <Info /> */}
    //         <Footer />
    //       </div>
    //     </div>
    <Router>
      <div>
        <nav>
          <Navbar/>
          <ul>
            <li>
        
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <Link to="/users/">Users</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Index} />
        <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} />
        <Route path="/signup/"  render={() => <Footer/>}/>

      </div>
    </Router>
  );
}

export default AppRouter;
{/* <Switch> */}
            {/* <Route path="/signup/"  render={() => <Footer/>}/> */}

            {/* <Route path="/" Component={Info} /> */}
            {/* </Switch> */}
            {/* <Info /> */}
            // onClick={()=>this.props.history.push("/signup/")}