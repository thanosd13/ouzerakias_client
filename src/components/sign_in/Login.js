import React, { useState, useContext, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "../sign_in/Login.module.css";
import config from "../../Config";
import { UserContext } from "../../context/UserContext";
import AlertMsg from "../alert_msg/AlertMsg";
import SpinnerLoader from "../spinner_loader/SpinnerLoader";
import { axiosInstanceWithoutHeader } from "../../services/AxiosInstance";

const Login = () => {
  const [alertStyle, setAlertStyle] = useState("");
  const [alertMsg, setAlertMsg] = useState("");
  const [spinnerLoader, setSpinnerLoader] = useState(false);
  const { setIsLogged } = useContext(UserContext);
  const navigate = useNavigate();

  let { token } = useParams();

  useEffect(() => {
    if (!token) {
      return;
    }

    const getToken = async () => {
      try {
        console.log("bika edw mesa");
        const response = await axiosInstanceWithoutHeader.get(
          "/user/findByToken?token=" + token
        );
        if (response.status === 200) {
          setAlertStyle("success");
          setAlertMsg("Πραγματοποιήθηκε η επιβεβαίωση του λογαριασμού σας!");
        } else {
          setAlertStyle("danger");
          setAlertMsg("Κάποιο πρόβλημα παρουσιάστηκε!");
        }
      } catch (error) {
        setAlertStyle("danger");
        setAlertMsg("Κάποιο πρόβλημα παρουσιάστηκε!");
      }
    };

    getToken();
  }, []);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSpinnerLoader(true);

    try {
      const response = await axios.post(
        `${config.BASE_URL}/authenticate`,
        formData
      );
      if (response.status == 200) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        navigate("/");
        setSpinnerLoader(false);
        setIsLogged(true);
      }
    } catch (error) {
      if (error.response.status == 401) {
        setSpinnerLoader(false);
        setAlertStyle("danger");
        setAlertMsg("Λάθος στοιχεία εισόδου!");
      } else {
        setSpinnerLoader(false);
        setAlertStyle("danger");
        setAlertMsg("Κάποιο πρόβλημα παρουσιάστηκε!");
      }
    }
  };

  return (
    <div className={styles.centralForm}>
      <AlertMsg result={alertStyle} message={alertMsg} />
      <form className={styles.formLogin} onSubmit={handleSubmit}>
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
          <input type="submit" value="Σύνδεση" />
        )}
        <span>
          <Link to="/forgot_pass">Ξέχασες τον κωδικό σου;</Link>
        </span>
      </form>
      <div className={styles.accountCheck}>
        <span>Είστε εγγεγραμένος μέλος;</span>
        <Link to="/register">Εγγραφή</Link>
      </div>
    </div>
  );
};

export default Login;
