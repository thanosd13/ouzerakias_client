import React, { useState } from "react";
import styles from "../admin/Admin.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { axiosInstanceWithHeader } from "../../services/AxiosInstance";

function Admin() {


  const [formData, setFormData] = useState({
    ouzeri: "",
    mobile: 0,
    address: "",
    description: "",
    image: null,
  });


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setFormData((prevData) => ({
          ...prevData,
          image: event.target.result,
        }));
      };
      reader.readAsArrayBuffer(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...formData,
      image: Array.from(new Uint8Array(formData.image)) // Convert ArrayBuffer to array of bytes
  };

    try {
      const response = await axiosInstanceWithHeader.post(
        "/customer/save",
        payload
      );
      if (response.status === 200) {
        console.log("okay!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.divForm}>
      <form className={styles.uploadForm} onSubmit={handleSubmit}>
        <div className={styles.uploadInputs}>
          <input
            type="text"
            placeholder="Όνομα επιχείρησης"
            name="ouzeri"
            onChange={handleInputChange}
            required />                       
          <input 
            type="text" 
            placeholder="Τηλέφωνο" 
            name="mobile"
            onChange={handleInputChange} 
            required />
        </div>
        <div className={styles.uploadInputs}>
          <input
            type="text"
            placeholder="Δ/ση επιχείρησης"
            name="address"
            onChange={handleInputChange}
            required />          
          <input
            type="file"
            name="image"
            onChange={handleFileChange}
            />          
        </div>
        <div className={styles.uploadInputs}>
          <textarea
            className={styles.textArea}
            placeholder="Περιγραφή..."
            name="description"
            onChange={handleInputChange}
            required />          
        </div>
        <button type="submit" className={styles.uploadButton}>
          Upload
          <FontAwesomeIcon className={styles.icon} icon={faUpload} />
        </button>
      </form>
    </div>
  );
}

export default Admin;
