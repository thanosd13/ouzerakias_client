import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../sign_in/Login.css";
import Footer from "../footer/Footer";


const Login = () => {

  
    return(
        <div className="central-form">
            <h4>Εγγραφή</h4>
            <form>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <input type="submit" value="Σύνδεση"/>
                <span>Ξέχασες τον κωδικό σου;</span>
            </form>
            <div className="account-check">
                <span>Είστε εγγεγραμένος μέλος;</span>
                <Link to="/register">Εγγραφή</Link>
            </div>
            <Footer />
        </div>
    )
}

export default Login;