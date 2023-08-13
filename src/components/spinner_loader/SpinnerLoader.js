import React from "react";
import styles from "../spinner_loader/SpinnerLoader.module.css";
import RingLoader from "react-spinners/RingLoader";

function SpinnerLoader() {
  return (
    <div className={styles.centerLoader}>
      <RingLoader color="#042739" size={30} />
    </div>
  );
}

export default SpinnerLoader;
