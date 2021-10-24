import React, { Component } from 'react';
import { useEffect } from 'react';

export default class Bank extends Component {
  render() {
    return (
      <html>
      <head></head>
      <body>
      <button id="teller-connect">Connect to your bank</button>
      <div className="Bank" ref={el => (this.div = el)}>
      </div>
      </body>
      </html>
    );
  }
}
