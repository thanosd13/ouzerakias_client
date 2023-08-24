import React from "react";
import { Rating } from "react-simple-star-rating";
import styles from "../cards/Card.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useEffect } from "react";
import { axiosInstanceWithoutHeader } from "../../services/AxiosInstance";

const Cards = () => {
  const [data, setData] = useState([]);

  useEffect(()=>{
    const fetchCustomers = async () => {
        try {
          const response = await axiosInstanceWithoutHeader("/customer/fetch");
          setData(response.data);
        } catch (error) {
          console.log(error);
        }
    }
    fetchCustomers();
  },[])

  return (
    <div className={styles.card_container}>
      <div className={styles.container}>
        {data.map((i,index) =>
        <div key={index} className={styles.card}>
          <img src={`data:image/jpeg;base64,${i.imageBase64}`} alt="" />
          <div className={styles.content}>
            <h3>{i.ouzeri}</h3>
            <p className={styles.locationOuzeri}>{i.address}</p>
            <div className={styles.rating}>
              <Rating size={22} transition allowFraction/>
              <span className={styles.averageNum}>4.5</span>
              <span className={styles.flexParagraph}>(10 reviews)</span>
            </div>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Cards;
