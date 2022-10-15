import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <p> &copy; {new Date().getFullYear()} Recipe Theory</p>
        <h1 className="logo">Recipe Theory</h1>
      </div>
      <div className="footerText">
        <p>Made by Harsh with ❤️</p>
      </div>
    </div>
  );
};

export default Footer;
