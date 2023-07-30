import React from "react";
import { FaFacebook, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";
import "../footer/Footer.css";
import logo from "../../images/logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="social_media">
        <a href="#" className="social-icon">
          <FaFacebook />
        </a>
        <a href="#" className="social-icon">
          <FaInstagramSquare />
        </a>
        <a href="#" className="social-icon">
          <FaTwitterSquare />
        </a>
      </div>
      <div className="contact-info">
        <p>&copy; 2023 Ouzerakias. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
