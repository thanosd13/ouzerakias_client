import { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../sign_up/SignUp.module.css"
import Footer from "../footer/Footer";


const SignUp = () => {

  
    return(
        <div className={styles.centralForm}>
            <form className={styles.formRegister}>
                <input type="text" placeholder="Όνοματεπώνυμο" required/>
                <input type="text" placeholder="Κινητό" required/>
                <input type="text" placeholder="Email" required/>
                <input type="text" placeholder="Username" required/>
                <input type="password" placeholder="Password" required/>
                <input type="submit" value="Εγγραφή" required/>
            </form>
            <div className={styles.accountCheck}>
                <span>Έχετε ήδη λογαριασμό;</span>
                <Link to="/login">Σύνδεση</Link>
            </div>
            <Footer />
        </div>
    )
}

export default SignUp;