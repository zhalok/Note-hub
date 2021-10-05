import React, { Component } from "react";

import Img1 from "../images/a.jpg";
import Img2 from "../images/b.jpg";
import Img3 from "../images/c.jpg";

export default class Caro extends Component {
  render() {
    return (
      <div
        id="demo"
        className="container-fluid carousel slide text-center w-50"
        data-ride="carousel"
        //style={{ marginLeft: 'auto' }}
      >
        <ul className="carousel-indicators">
          <li data-target="#demo" data-slide-to="0" class="active"></li>
          <li data-target="#demo" data-slide-to="1"></li>
          <li data-target="#demo" data-slide-to="2"></li>
        </ul>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Img1} alt="a.jpg" />
            <div class="carousel-caption">
              <h3>Browse</h3>
              <p>Browse resources from your seniors (books, notes, questons)</p>
            </div>
          </div>
          <div className="carousel-item ">
            <img src={Img2} alt="b.jpg" />
            <div class="carousel-caption">
              <h3>Contribute</h3>
              <p>
                SignUp and Login to contribute your resources for your juniors
              </p>
            </div>
          </div>
          <div
            className="carousel-item 
        "
          >
            <img src={Img3} alt="c.jpg" />
            <div class="carousel-caption">
              <h3>Project Archieve</h3>
              <p>
                checkout our project archieve to see the projects of previous
                years
              </p>
            </div>
          </div>
        </div>

        <a class="carousel-control-prev" href="#demo" data-slide="prev">
          <span class="carousel-control-prev-icon"></span>
        </a>
        <a class="carousel-control-next" href="#demo" data-slide="next">
          <span class="carousel-control-next-icon"></span>
        </a>
      </div>
    );
  }
}
