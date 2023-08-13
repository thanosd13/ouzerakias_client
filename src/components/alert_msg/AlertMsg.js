import React, { useEffect, useState } from "react";
import styles from "../alert_msg/AlertMsg.module.css";
import Alert from "react-bootstrap/Alert";

function AlertMsg({ result, message }) {
  const [hide, setHide] = useState(false);

  return (
    <>
        <Alert className={styles.alert} key={result} variant={result}>
          {message}
        </Alert>
    </>
  );
}

export default AlertMsg;
