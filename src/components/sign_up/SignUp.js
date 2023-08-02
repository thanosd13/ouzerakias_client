import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import styles from "../sign_up/SignUp.module.css"
import Footer from "../footer/Footer";
import config from "../../Config";


const SignUp = () => {

    let today = new Date();
    let yyyy = today.getFullYear();
    let mm = String(today.getMonth() + 1).padStart(2, '0'); 
    let dd = String(today.getDate()).padStart(2, '0');

    let formattedDate = `${yyyy}-${mm}-${dd}`;

    const [formData, setFormData] = useState({
        fName: '',
        lName: '',
        mobile: '',
        email: '',
        registerDate: formattedDate,
        username: '',
        password: ''
    });

    const handleInputChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();


        try {
            const response = await axios.post(`${config.BASE_URL}/register`, formData);
            if(response.status == 200){
                console.log(response);
                
            }
            
        } catch (error) {
            console.log(error);
        }
    };
  
    return(
        <div className={styles.centralForm}>
            <form className={styles.formRegister} onSubmit={handleSubmit}> 
                <input type="text" placeholder="Όνομα" name="fName" onChange={handleInputChange} required/>
                <input type="text" placeholder="Επώνυμο" name="lName" onChange={handleInputChange} required/>
                <input type="text" placeholder="Κινητό" name="mobile" onChange={handleInputChange} required/>
                <input type="text" placeholder="Email" name="email" onChange={handleInputChange} required/>
                <input type="text" placeholder="Username" name="username" onChange={handleInputChange} required/>
                <input type="password" placeholder="Password" name="password" onChange={handleInputChange} required/>
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