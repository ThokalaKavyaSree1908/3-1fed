import React from "react";

const Navbar = () => {
  return (
    <div className="nav-menu">
      <div className="logo">
        <strong>
          <a href="">
            <img src="images/logo.png" alt="Sam Jarvis logo" />
          </a>
        </strong>
      </div>
      <div className="menu">
        <ul>
          
          <li>
            <b><a href="#home">HOME</a></b>
          </li>
          <li>
            <b><a href="#about">ABOUT</a></b>
          </li>
          <li>
           <b><a href="#work">PORTFOLIO</a></b>
          </li>
          <li>
           <b><a href="#clients">CONTACT</a></b>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
