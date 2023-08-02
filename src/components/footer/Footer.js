import React from "react";
import { FaFacebook, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";
import styles from "../footer/Footer.module.css";
import logo from "../../images/logo.png";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.social_media}>
        <a href="#" className={styles.socialIcon}>
          <FaFacebook />
        </a>
        <a href="#" className={styles.socialIcon}>
          <FaInstagramSquare />
        </a>
        <a href="#" className={styles.socialIcon}>
          <FaTwitterSquare />
        </a>
      </div>
      <div className={styles.contactInfo}>
        <p>&copy; 2023 Ouzerakias. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
