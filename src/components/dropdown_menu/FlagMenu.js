import React, { useState } from 'react'
import styles from "../dropdown_menu/FlagMenu.module.css";
import Flag from "react-flagkit";
import FlagMenuItem from './FlagMenuItem';

function FlagMenu({isOpenFlag, toggleFlag}) {
    const[isOpen, setIsOpen] = useState(false);
  return (
    <div>
        {isOpenFlag?
        <div className={styles.dropdown}>
            <FlagMenuItem icon={<Flag className="country_flag" country="GB" size={23} />}>English </FlagMenuItem>
        </div>
        :null}
    </div>
  )
}

export default FlagMenu
