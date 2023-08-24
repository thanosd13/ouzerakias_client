import React from 'react'
import styles from "../dropdown_menu/FlagMenu.module.css";

function FlagMenuItem(props) {
  return (
    <a href='#' className={styles.menuItem}>
        <span className={styles.iconButton}>{props.icon}</span>
            {props.children}
    </a>
  )
}

export default FlagMenuItem
