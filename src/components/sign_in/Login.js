import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import styles from "../sign_in/Login.module.css"
import Footer from "../footer/Footer";
import config from "../../Config";
import ModalResp from "../modal/ModalResp";


const Login = () => {

    const [showModal, setShowModal] = useState(false);
    const [success, setSuccess] = useState(false);
    const[resp, setResp] = useState("");

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const handleInputChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const openModal = () => {
        setShowModal(true);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        console.log(formData);

        try {
            const response = await axios.post(`${config.BASE_URL}/authenticate`, formData);
            if(response.status == 200){
                console.log("user exists!");
                setResp("Επιτυχής σύνδεση")
                setSuccess(true);
                openModal();
                
            }
            
        } catch (error) {
            if(error.response.status == 401){
                setResp("Δε βρέθηκε χρήστης!");
                setSuccess(false);
                openModal();
            }
        }
    };
  
    return(
        <div className={styles.centralForm}>
            <form className={styles.formLogin} onSubmit={handleSubmit}>
                <input type="text" placeholder="Username" name="username" onChange={handleInputChange} />
                <input type="password" placeholder="Password" name="password" onChange={handleInputChange} />
                <input type="submit" value="Σύνδεση"/>
                <span>Ξέχασες τον κωδικό σου;</span>
            </form>
            <div className={styles.accountCheck}>
                <span>Είστε εγγεγραμένος μέλος;</span>
                <Link to="/register">Εγγραφή</Link>
            </div>
            <ModalResp show={showModal} handleClose={() => setShowModal(false)} resp={resp} success={success}/>
            <Footer />
        </div>
    )
}

export default Login;