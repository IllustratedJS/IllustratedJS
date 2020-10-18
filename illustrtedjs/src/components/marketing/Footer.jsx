import React from 'react';
import FooterWave from "../../assets/footer-wave.svg";
import FooterLogo from "../../assets/footer-logo.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <img className="footer-wave" src={FooterWave} />
    <div className="footer-container">
      <div className="footer-box1">
        <img className="footer-logo" src={FooterLogo} alt="Illustrated JS white logo" />
        <p>
          illustratedJS is an online Computer Science education company designed
          for the developer who is dedicated to growing an understanding in data
          structures, algorithms and advanced javascript.
        </p>
      </div>
      <div className="footer-box2">
        <p className="footer-title">Company</p>
        <p>Staff</p>
        <p>Leadership</p>
        <p>Vision</p>
        <p>Careers</p>
      </div>
      <div className="footer-box3">
        <p className="footer-title">Product</p>
        <p>Courses</p>
        <p>Animations</p>
        <p>Features</p>
        <p>Style Test</p>
      </div>
    </div>
    </div>
  );
};

export default Footer;
