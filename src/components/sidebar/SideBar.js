import React, { useEffect, useState, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "../sidebar/Sidebar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { SidebarData, sideBarMobileData } from "./SidebarData";
import { UserContext } from "../../context/UserContext";

function Sidebar({ isOpen, setIsOpen }) {
  const navigate = useNavigate();
  const { setIsLogged, isLogged } = useContext(UserContext);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    let data = [];

    if (isLogged) {
       data = sideBarMobileData.filter(item => item.link !== "/log_in");
    } else {
       data = sideBarMobileData.filter(item => item.link !== "/log_out" && item.link !== "/account" && item.link !== "/love_list");
    }
 
    setFilteredData(data);
  }, [isLogged]);

  const redirect = (key) => {
    if (key === "/log_out") {
      localStorage.clear();
      navigate("/");
      setIsLogged(false);
      setIsOpen(false);
    } else if (key === "/home") {
      navigate("/");
      setIsOpen(false);
    } else if (key === "/account") {
      navigate("/account");
      setIsOpen(false);
    } else if (key === "/contact") {
      navigate("/contact");
      setIsOpen(false);
    }
  };

  const redirectForMobile = (key) => {
    if (key === "/log_out") {
      localStorage.clear();
      navigate("/");
      setIsLogged(false);
      setIsOpen(false);
    } else if (key === "/home") {
      navigate("/");
      setIsOpen(false);
    } else if (key === "/account") {
      navigate("/account");
      setIsOpen(false);
    } else if (key === "/contact") {
      navigate("/contact");
      setIsOpen(false);
    } else if(key === "/log_in"){
      navigate("/login");
      setIsOpen(false);
    }
  };

  return (
    <div>
      {isOpen && (
        <div className={styles.overlay} onClick={() => setIsOpen(false)}></div> // Overlay
      )}
      {isOpen ? (
        <div className={styles.sideBar}>
          <FontAwesomeIcon
            className={styles.closeIcon}
            icon={faXmark}
            size="xl"
            onClick={() => setIsOpen(false)}
          />
          {!isMobile ? (
            <ul className={styles.sideBarList}>
              {SidebarData.map((val, key) => {
                return (
                  <li
                    className={styles.row}
                    key={key}
                    onClick={() => redirect(val.link)}
                  >
                    {""}
                    <div id={styles.icon}>{val.icon}</div>
                    {""}
                    <div id={styles.title}>{val.title}</div>
                  </li>
                );
              })}
            </ul>
          ) : (
            <ul className={styles.sideBarList}>
              {filteredData.map((val, key) => {
                return (
                  <li
                    className={styles.row}
                    key={key}
                    onClick={() => redirectForMobile(val.link)}
                  >
                    {""}
                    <div id={styles.icon}>{val.icon}</div>
                    {""}
                    <div id={styles.title}>{val.title}</div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      ) : null}
    </div>
  );
}

export default Sidebar;
