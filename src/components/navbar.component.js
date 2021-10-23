import React, { useState } from 'react';

const TopNav = props => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="/#">
        {/* <img src={Logo} alt="Logo" width="36" height="36" className="vertical-align-middle" /> */}
        <span className="">Y Budge</span>
      </a>
      <button class="custom-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarsExample09">
        <a className="nav-link" href="/contact">About</a>
        <a className="nav-link" href="/login">Contact</a>
        <a className="nav-link" href="/login">Login</a>
      </div>
    </nav>
  );
}

export default TopNav;