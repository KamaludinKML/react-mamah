import React, { Component } from "react";
import "./Documentation.css";
import IMG from "../../asset/document.png"
class Documentation extends Component {
  render() {
    return (
      <div className="card">
        <div className="container">
          <div className="Title">Documentation</div>
          <div className="content-img">
            <a href="">
              <img src= {IMG}  className="img" alt="documen" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Documentation;
