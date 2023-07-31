import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";
import { Link } from "react-router-dom";
import "../navbar_two/Navbar.css";
import logo from "../../images/logo.png";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <div>
      <header>
        <img className="logo" src={logo} alt="logo" />
        <nav ref={navRef}>
          <Link onClick={showNavbar} to="/">Ουζερί</Link>
          <Link onClick={showNavbar} to="/about">Χάρτες</Link>
          <Link onClick={showNavbar} to="/contact">Επικοινωνία</Link>
          <Link onClick={showNavbar} to="/login" className="sign_in_btn">
            Σύνδεση/Εγγραφή
          </Link>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </header>

    </div>
  );
}

export default Navbar;
