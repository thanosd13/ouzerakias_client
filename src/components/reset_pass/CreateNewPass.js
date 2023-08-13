import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Alert from "react-bootstrap/Alert";
import RingLoader from "react-spinners/RingLoader";
import styles from "../reset_pass/ResetPass.module.css";
import axios from "axios";
import config from "../../Config";

const CreateNewPass = () => {
  const [tokenCheck, setTokenCheck] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [succesMsg, setSuccessMsg] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [spinnerLoader, setSpinnerLoader] = useState(false);

  let { token } = useParams();

  const [formData, setFormData] = useState({
    password: "",
    token: token,
  });

  const onInputChange = (event) => {
    if (event.target.name === "confirmPassword") {
      setConfirmPassword(event.target.value);
    } else {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value,
      });
    }
  };

  useEffect(() => {
    const getToken = async () => {
      try {
        const response = await axios.get(
          `${config.BASE_URL}/forgot_pass/reset_password?token=` + token
        );
        if (response.status == 200) {
          setSuccessMsg("");
          setTokenCheck(true);
        }
      } catch (error) {
        setErrorMsg("Error occurred while fetching the token");
      }
    };

    getToken();
  }, []);

  const updatePassword = async (event) => {
    event.preventDefault();
    setSpinnerLoader(true);

    if (formData.password != confirmPassword) {
      setSuccessMsg("");
      setErrorMsg("Δεν ταιριάζουν οι κωδικοί πρόσβασης!");
      setSpinnerLoader(false);
      return;
    }

    try {
      const response = await axios.post(
        `${config.BASE_URL}/forgot_pass/reset_password`,
        formData
      );
      if (response.status == 200) {
        setErrorMsg("");
        setSuccessMsg("Ο κωδικός πρόσβασης σας άλλαξε επιτυχώς");
        setSpinnerLoader(false);
      }
    } catch (error) {
      setSuccessMsg("");
      setErrorMsg("Κάποιο πρόβλημα προέκυψε");
      setSpinnerLoader(false);
    }
  };

  useEffect(() => {
    if (errorMsg || succesMsg) {
      const timer = setTimeout(() => {
        setErrorMsg(false);
        setSuccessMsg(false);
      }, 15000);

      return () => clearTimeout(timer);
    }
  }, [errorMsg, succesMsg]);

  return (
    <div className={styles.centralForm}>
      {succesMsg ? (
        <Alert className={styles.alert} variant="success">
          {succesMsg}
        </Alert>
      ) : null}
      {errorMsg ? (
        <Alert className={styles.alert} variant="danger">
          {errorMsg}
        </Alert>
      ) : null}
      {tokenCheck ? (
        <form className={styles.formResetPass} onSubmit={updatePassword}>
          <span>Δημιοργήστε νέο κωδικό πρόσβασης</span>
          <input
            type="password"
            placeholder="Enter your new password"
            name="password"
            onChange={onInputChange}
            required
          />
          <input
            type="password"
            placeholder="Confirm you new password"
            name="confirmPassword"
            onChange={onInputChange}
            required
          />
          {spinnerLoader ? (
            <div className={styles.centerLoader}>
              <RingLoader color="#042739" size={30} />
            </div>
          ) : (
            <input type="submit" value="Αλλαγή Κωδικού Πρόσβασης" />
          )}
        </form>
      ) : null}
    </div>
  );
};

export default CreateNewPass;
