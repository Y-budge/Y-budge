import React, { Component } from 'react';

export default class About extends Component {
  render() {
    return (
        <div className="container-fluid hero-container">
            <div className="hero-image">
            <div className="hero-text">
                <h1 id="demo">About</h1>
                <p>Keep your spending responsible with automatic social media posts when you go out</p>
                {/* <button type="button" class="btn btn-outline-light" >Read More</button> */}
            </div>
            </div>
        </div>
    );
  }
}
