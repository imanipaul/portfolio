import React from "react";
import logo from "./images/logo.png";

export default function Nav() {
  return (
    <div className="nav">
      <img src={logo} />
      <nav>
        <a href="#About">About</a>
        <a href="#Projects">Projects</a>
        <a href="#Contact">Contact</a>
        <a href="#">Resume</a>
      </nav>
    </div>
  );
}
