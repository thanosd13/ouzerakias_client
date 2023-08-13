import React, { useState, useEffect, CSSProperties } from "react";
import { Link } from "react-router-dom";
import Alert from "react-bootstrap/Alert";
import RingLoader from "react-spinners/RingLoader";
import Footer from "../footer/Footer";
import styles from "../reset_pass/ResetPass.module.css";
import axios from "axios";
import config from "../../Config";

const ResetPass = () => {
  const [email, setEmail] = useState("");
  const [sendEmail, setSendEmail] = useState(false);
  const [error, setError] = useState(false);
  const [spinnerLoader, setSpinnerLoader] = useState(false);

  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSpinnerLoader(true);

    try {
      const response = await axios.post(
        `${config.BASE_URL}/forgot_pass/forgot_password?email=` + email
      );
      if (response.status == 200) {
        setError(false);
        setSendEmail(true);
        setSpinnerLoader(false);
      }
    } catch (error) {
      setEmail(false);
      setSendEmail(false);
      setError(true);
      setSpinnerLoader(false);
    }
  };

  useEffect(() => {
    if (sendEmail || error) {
      const timer = setTimeout(() => {
        setSendEmail(false);
        setError(false);
      }, 15000);

      return () => clearTimeout(timer);
    }
  }, [sendEmail, error]);

  return (
    <div className={styles.centralForm}>
      {sendEmail ? (
        <Alert className={styles.alert} key="warning" variant="warning">
          Σας έχει σταλεί στο e-mail σας το αντίστοιχο link
        </Alert>
      ) : null}
      {error ? (
        <Alert className={styles.alert} key="danger" variant="danger">
          Κάποιο πρόβλημα προέκυψε κατά την αποστολή του e-mail
        </Alert>
      ) : null}
      <form className={styles.formResetPass} onSubmit={handleSubmit}>
        <span>Θα σας στείλουμε ενα link επαναφοράς κωδικού στο e-mail σας</span>
        <input
          type="text"
          placeholder="Enter your e-mail"
          name="email"
          onChange={handleInputChange}
          required
        />
        {spinnerLoader ? (
          <div className={styles.centerLoader}>
            <RingLoader color="#042739" size={30} />
          </div>
        ) : (
          <input type="submit" value="Αποστολή" />
        )}
      </form>
    </div>
  );
};

export default ResetPass;
