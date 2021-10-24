import React, { Component } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

export default class Bank extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '',
    };
    this.print = this.print.bind(this);
  }
  
  print() {
    this.setState({
      id: window.tellerAccount.id
    });

    // const account = {
    //   id: this.state.id,
    // }
    axios.get('http://localhost:5000/teller/login/' + window.tellerAccount.id)
    // console.log(this.state.id);
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
