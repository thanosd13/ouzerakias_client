import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import validator from "validator";
import styles from "../sign_up/SignUp.module.css";
import AlertMsg from "../alert_msg/AlertMsg";
import config from "../../Config";
import SpinnerLoader from "../spinner_loader/SpinnerLoader";
import { axiosInstanceWithoutHeader } from "../../services/AxiosInstance";

const SignUp = () => {
  let today = new Date();
  let yyyy = today.getFullYear();
  let mm = String(today.getMonth() + 1).padStart(2, "0");
  let dd = String(today.getDate()).padStart(2, "0");

  let formattedDate = `${yyyy}-${mm}-${dd}`;

  const [spinnerLoader, setSpinnerLoader] = useState(false);
  const [alertStyle, setAlertStyle] = useState("");
  const [alertMesg, setAlertMesg] = useState("");
  const [formData, setFormData] = useState({
    fName: "",
    lName: "",
    mobile: "",
    email: "",
    registerDate: formattedDate,
    username: "",
    password: "",
  });

  const checkUsername = (username) => {
    axiosInstanceWithoutHeader
      .get("/user/findByUsername?username=" + username)
      .then((response) => {
        if (response.data.length !== 0) {
          setAlertMesg("Δεν είναι διαθέσιμο το συγκεκριμένο username");
          setAlertStyle("danger");
        } else {
          setAlertMesg("");
          setAlertStyle("");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
    if (event.target.name === "username") {
      checkUsername(event.target.value);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSpinnerLoader(true);

    if (
      validator.isStrongPassword(formData.password, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      //password okay
    } else {
      setAlertStyle("danger");
      setAlertMesg(
        "Ο κωδικός πρόσβασης σας πρέπει να αποτελείται από τουλάχιστον 8 χαρακτήρες."
      );
      setSpinnerLoader(false);
      return;
    }

    try {
      const response = await axios.post(
        `${config.BASE_URL}/register`,
        formData
      );
      if (response.status == 200) {
        setSpinnerLoader(false);
        setAlertStyle("warning");
        setAlertMesg("Σας έχει σταλεί e-mail επιβεβαίωσης!");
      }
    } catch (error) {
      setSpinnerLoader(false);
      setAlertStyle("danger");
      setAlertMesg("Παρουσιάστηκε κάποιο πρόβλημα κατά την εγγραφή σας");
    }
  };

  return (
    <div className={styles.centralForm}>
      <AlertMsg result={alertStyle} message={alertMesg} />
      <form className={styles.formRegister} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Όνομα"
          name="fName"
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          placeholder="Επώνυμο"
          name="lName"
          onChange={handleInputChange}
          required
        />
        <input
          type="number"
          placeholder="Κινητό"
          name="mobile"
          onChange={handleInputChange}
          required
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          placeholder="Username"
          name="username"
          onChange={handleInputChange}
          required
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleInputChange}
          required
        />
        {spinnerLoader ? (
          <SpinnerLoader />
        ) : (
          <input type="submit" value="Εγγραφή" />
        )}
      </form>
      <div className={styles.accountCheck}>
        <span>Έχετε ήδη λογαριασμό;</span>
        <Link to="/login">Σύνδεση</Link>
      </div>
    </div>
  );
};

export default SignUp;
