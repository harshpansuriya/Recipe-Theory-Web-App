import React from "react";
import "./ComponentsStyle.css";

const Navbar = () => {
  return (
    <div className="header">
      <div className="container">
        <h1 className="logo">Recipe Theory</h1>
        <div className="menu">
          <p>About</p>
          <p>Contact</p>
          <p>Download our App</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
