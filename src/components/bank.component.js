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
    axios.get('http://localhost:5000/teller/login/' + window.tellerAccount.id)
  }

  render() {
    const { tellerAccount } = this.state;
    return (
      <div className="container-fluid hero-container">
        <div className="hero-image">
        <div className="hero-text">
            <h1 id="demo">YBudge</h1>
            <button type="button" class="btn btn-outline-light" id="teller-connect">Connect to your bank through Teller</button>
            <div className="Bank" ref={el => (this.div = el)} />
        </div>
        </div>
      </div>
    );
  }
}

{/* <html>
<head></head>
<body>
<button onClick={this.print}>test</button>
<button id="teller-connect">Connect to your bank</button>
<div className="Bank" ref={el => (this.div = el)}>
</div>
</body>
</html> */}
