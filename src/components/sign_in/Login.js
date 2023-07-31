import { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../sign_in/Login.module.css"
import Footer from "../footer/Footer";


const Login = () => {

  
    return(
        <div className={styles.centralForm}>
            <form className={styles.formLogin}>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <input type="submit" value="Σύνδεση"/>
                <span>Ξέχασες τον κωδικό σου;</span>
            </form>
            <div className={styles.accountCheck}>
                <span>Είστε εγγεγραμένος μέλος;</span>
                <Link to="/register">Εγγραφή</Link>
            </div>
            <Footer />
        </div>
    )
}

export default Login;