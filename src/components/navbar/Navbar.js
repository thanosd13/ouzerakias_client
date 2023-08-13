import { FaBars, FaTimes } from "react-icons/fa";
import { useRef, useContext, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSlidersH, faUserGear } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
import "../navbar/Navbar.css";
import logo from "../../images/logo.png";
import { UserContext } from "../../context/UserContext";

function Navbar({ setIsOpen }) {
  const location = useLocation();
  const [hideItems, setHideItems] = useState(false);
  const { isLogged } = useContext(UserContext);
  const navRef = useRef();

  useEffect(() => {
    if (location.pathname === "/account") {
      setHideItems(true);
    } else {
      setHideItems(false);
    }
  }, [location.pathname]);

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <div>
      <header>
        <Link to="/">
          <img className="logo" src={logo} alt="logo" />
        </Link>
        <nav ref={navRef}>
          {!hideItems ? (
            <>
              <Link onClick={showNavbar} to="/">
                Ουζερί
              </Link>
              <Link onClick={showNavbar} to="/about">
                Χάρτες
              </Link>
              <Link onClick={showNavbar} to="/contact">
                Επικοινωνία
              </Link>
            </>
          ) : null}
          {!isLogged ? (
            <Link onClick={showNavbar} to="/login" className="sign_in_btn">
              Σύνδεση/Εγγραφή
            </Link>
          ) : (
            <FontAwesomeIcon
              className="user_icon"
              icon={faUserGear}
              onClick={() => setIsOpen(true)}
            />
          )}
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={() => setIsOpen(true)}>
          <FaBars />
        </button>
      </header>
    </div>
  );
}

export default Navbar;
