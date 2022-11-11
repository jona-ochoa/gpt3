import React from "react";
import "./footer.css";
import gpt3 from '../../assets/logo.svg'

const Footer = () => {
  return (
    <div className="footer section__padding">
      <div className="heading">
        <h1 className="gradient__text">Do you want to step in to the future before others</h1>
      </div>

      <div className="footer-btn">
        <p>Request Early Access</p>
      </div>

      <div className="footer-links">
          <div className="footer-link-logo">
            <img src={gpt3} alt='logo-footer' />
            <p>©Derechos reservados y privados 2022</p>
          </div>

          <div className="link-div">
            <h4>Links</h4>
            <p>Overons</p>
            <p>Social Media</p>
            <p>Counters</p>
            <p>Contact</p>
          </div>

          <div className="link-div">
            <h4>Company</h4>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
            <p>Contact</p>
          </div>

          <div className="link-div">
            <h4>Get in touch</h4>
            <p>Crechterwoord K12 182 DK Alknjkcb</p>
            <p>tel: 3525 619061</p>
            <p>Country: ARG</p>
            <p>jonaochoa00@gmail.com</p>
          </div>

      </div>

      <div className="footer-copyright">
        <h6>© 2021 JONACODER. All rights reserved.</h6>
      </div>

    </div>
  );
};

export default Footer;
