import { React, useState } from 'react';
import logo from "../../images/logo.png";
import "../navbar/Navbar.css";
import {
    AiOutlineUser,
    AiOutlineSearch,
    AiOutlineMenu,
    AiOutlineClose,
  } from 'react-icons/ai';
  import { Link } from 'react-router-dom';



const Navbar = () => {

    const [nav, setNav] = useState(false);



  return (
    <header className="navbar">
      <img className="logo" src={logo} alt="logo" />
      <nav>
        <ul className={nav ? [ 'menu', 'active'].join(' ') : ['menu']}>
          <li>
            <Link to="/">Ουζερί</Link>
          </li>
          <li>
            <Link to="/">Σύνδεση</Link>
          </li>
          <li>
            <Link to="/register">Εγγραφή</Link>
          </li>
          <li>
            <AiOutlineSearch className='search_btn' size={25} style={{ marginTop: '6px' }} />
          </li>
          <li>
            <AiOutlineUser size={25} style={{ marginTop: '6px' }} />
          </li>
        </ul>
      </nav>
      <div onClick={()=> setNav(!nav)} className="mobile_btn">
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}       
      </div>
    </header>
  );
};

export default Navbar;
