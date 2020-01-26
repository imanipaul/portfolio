import React, { useEffect, useState } from "react";
// import { HashLink as Link } from "react-router-hash-link";

function LandingPage(props) {
  const allTitles = ["Software", "Full Stack", "Front End"];
  //   const [title, setTitle] = useState("Software");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index + 1) % allTitles.length);
    }, 5000);

    return () => clearInterval(interval);
  });
  return (
    <section className="landing-page-container">
      <h1>{allTitles[index]} Developer</h1>
      <h2>I build exceptional, high-quality websites and applications.</h2>
      <div className="content-button">Get In Touch</div>
    </section>
  );
}

export default LandingPage;
