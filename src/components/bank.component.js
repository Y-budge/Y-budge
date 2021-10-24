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
      <html>
      <head></head>
      <body>
      <button onClick={this.print}>test</button>
      <button id="teller-connect">Connect to your bank</button>
      <div className="Bank" ref={el => (this.div = el)}>
      </div>
      </body>
      </html>
    );
  }
}
