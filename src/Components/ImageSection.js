import React from "react";
import about from "../img/about.jpg";

function ImageSection() {
  return (
    <div className="ImageSection">
      <div className="img">
        <img src={about} alt="" />
      </div>

      <div className="about-info">
        <div className="about-details">
          <div className="left-section">
            <p>Full Name</p>
            <p>Age</p>
            <p>Nationality</p>
            <p>Languages</p>
            <p>Address</p>
          </div>
          <div className="right-section">
            <p>: Otman Ouali</p>
            <p>: 36</p>
            <p>: Moroccan</p>
            <p>: English, Spanish, French, Arabic</p>
            <p>: 173 Lilyfield Rd Sydney 2040</p>
          </div>
        </div>
        <br />
        <a
          type="button"
          href="https://drive.google.com/file/d/1wmlZFgkD5WIl6vye7kR_f-SB0We-819j/view?usp=sharing"
          className="btn"
          rel="noreferrer"
          target="_blank"
          style={{ "text-decoration": "none" }}
        >
          Download Cv
        </a>
      </div>
    </div>
  );
}

export default ImageSection;
