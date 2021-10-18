import React from 'react';
import './style.css';
import logo from "../../assets/logo.png";

function Navbar() {
  return (
    <div className="navbar">
      <img
          src={logo}
          className="App-logo"
          alt="logo"
          style={{ width: "55px" }}
        />
        <span>Home</span>
        <span>Explore</span>
        <span>Favourites</span>
        <input type="text" placeholder="Search"/>
        <button>Create</button>
    </div>
  );
}

export default Navbar;