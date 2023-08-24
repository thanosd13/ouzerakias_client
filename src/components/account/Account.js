import React, { useState, useEffect } from "react";
import styles from "../account/Account.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk } from "@fortawesome/free-solid-svg-icons";
import RingLoader from "react-spinners/RingLoader";
import Alert from "react-bootstrap/Alert";      
import {
  axiosInstanceWithHeader,
  axiosInstanceWithoutHeader,
} from "../../services/AxiosInstance";

function Account() {
  const user = localStorage.getItem("user");
  const formatUser = JSON.parse(user);
  const [storedUser, setStoredUser] = useState(formatUser);
  const [spinnerLoader, setSpinnerLoader] = useState(false);
  const [succesMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStoredUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSpinnerLoader(true);

    axiosInstanceWithHeader
      .post("/user/update_user", storedUser)
      .then((response) => {
        if (response.status === 200) {
          setSpinnerLoader(false);
          localStorage.setItem("user", JSON.stringify(storedUser));
          setSuccessMsg("επιτυχής αλλαγή στοιχείων");
        }
      })
      .catch((error) => {
        setSpinnerLoader(false);
        setErrorMsg("ανεπιτυχής αλλαγή στοιχείων");
      });
  };

  return (
    <div className={styles.accountPage}>
      {succesMsg ? (
        <Alert className={styles.alert} variant="success">
          {succesMsg}
        </Alert>
      ) : null}
      {errorMsg ? (
        <Alert className={styles.alert} key="danger" variant="danger">
          {errorMsg}
        </Alert>
      ) : null}
      <form className={styles.accountForm} onSubmit={handleSubmit}>
        <h2>Ο λογαριασμός μου</h2>
        <div className={styles.accountInputs}>
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={storedUser.email}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Κινητό"
            name="mobile"
            value={storedUser.mobile}
            onChange={handleChange}
          />
        </div>
        <div className={styles.accountInputs}>
          <input
            type="text"
            placeholder="Όνομα"
            name="fName"
            value={storedUser.fName}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Επώνυμο"
            name="lName"
            value={storedUser.lName}
            onChange={handleChange}
          />
        </div>
        <div className={styles.accountInputs}>
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={storedUser.username}
            onChange={handleChange}
            disabled
          />
          <input
            type="date"
            placeholder="Η/νία εγγραφής"
            name="registerDate"
            value={storedUser.registerDate}
            onChange={handleChange}
            disabled
          />
        </div>
        {spinnerLoader ? (
          <div className={styles.centerLoader}>
            <RingLoader color="#042739" size={30} />
          </div>
        ) : (
          <button type="submit" className={styles.sendButton}>
            Αποθήκευση Αλλαγών
            <FontAwesomeIcon
              className={styles.iconSave}
              icon={faFloppyDisk}
              size="lg"
            />
          </button>
        )}
      </form>
    </div>
  );
}

export default Account;
