import React, { useState, Component } from 'react';
import { Link } from 'react-router-dom';

const TopNav = props => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" className="navbar-brand">
        {/* <img src={Logo} alt="Logo" width="36" height="36" className="vertical-align-middle" /> */}
        <span className="">Y Budge</span>
      </Link>
      <button class="custom-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarsExample09">
        <Link to="/login" className="nav-link" to="/login">Login</Link>
        <Link to="/signup" className="nav-link" to="/signup">Signup</Link>
        <Link to="/bank" className="nav-link" to="/bank">Bank Connect</Link>
        <Link to="/twitter" className="nav-link" to="/twitter">Twitter</Link>
      </div>
    </nav>
  );
}

export default TopNav;
