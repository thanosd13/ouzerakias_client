import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../sign_up/SignUp.css";
import Footer from "../footer/Footer";


const SignUp = () => {

  
    return(
        <div className="central-form">
            <form>
                <input type="text" placeholder="Όνοματεπώνυμο" required/>
                <input type="text" placeholder="Κινητό" required/>
                <input type="text" placeholder="Email" required/>
                <input type="text" placeholder="Username" required/>
                <input type="password" placeholder="Password" required/>
                <input type="submit" value="Εγγραφή" required/>
            </form>
            <div className="account-check">
                <span>Έχετε ήδη λογαριασμό;</span>
                <Link to="/login">Σύνδεση</Link>
            </div>
            <Footer />
        </div>
    )
}

export default SignUp;