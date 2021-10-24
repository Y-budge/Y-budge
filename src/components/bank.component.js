import React, { Component } from 'react';
import { useEffect } from 'react';

export default class Bank extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tellerAccount: window.tellerAccount,
    };
    this.print = this.print.bind(this);
  }

  print() {
    this.setState({
      tellerAccount: window.tellerAccount
    });
    console.log(this.state);
  }

  render() {
    const { tellerAccount } = this.state;
    return (
      <div className="container-fluid hero-container">
        <div className="hero-image">
          <div className="hero-text">
            <html>
              <head></head>
              <body>
                <div className="row">
                  <button onClick={this.print}>test</button>
                  <button type="button" class="btn btn-outline-dark" id="teller-connect">Connect to your bank</button>
                  <div className="Bank" ref={el => (this.div = el)}>
                  </div>
                </div>
              </body>
            </html>
          </div>
        </div>
      </div>

    );
  }
}
