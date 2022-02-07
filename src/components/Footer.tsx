import React from "react";
import "../App.css";
function Footer() {
  return (
    <div className="footerSection">
      <div className="container">
        <div className="mainFooter ">
          <div className="footerText">
            <p>
              <a href="https://render.com">Render Home Page</a>
            </p>
            <a href="../images/lever-logo-full (1).svg" className="imageLink">
              <span>Jobs powered by </span>
              <img alt="Lever logo" src="/img/lever-logo-full.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
