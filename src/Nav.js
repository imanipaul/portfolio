import React, { useState, useEffect } from "react";
import logo from "./images/logo.png";

export default function Nav() {
  let [pos, setPos] = useState(window.pageYOffset);
  let [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      let temp = window.pageYOffset;

      setVisible(pos > temp);
      setPos(temp);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <nav className={"navbar  " + (!visible ? "navbarHidden" : " ")}>
      {/* <img src={logo} /> */}
      <p>Imani Paul</p>
      <div className="nav">
        <a href="#About">About</a>
        <a href="#Projects">Projects</a>
        <a href="#Contact">Contact</a>
        <a href="#">Resume</a>
      </div>
    </nav>
  );
}
