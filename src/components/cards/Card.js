import React from "react";
import "../cards/Card.css";
import ouzeri1 from "../../images/ouzeri1.jpg";
import ouzeri2 from "../../images/ouzeri_2.jpg";
import ouzeri3 from "../../images/ouzeri_3.jpg";
import ouzeri4 from "../../images/ouzeri_4.jpg";

const Cards = () => {
  return (
    <div className="card_container">
      <div className="container">
        <div className="card">
          <img
            src={ouzeri1}
            alt=""
          />
          <div className="content">
            <h3>Ουζερί 1</h3>
          </div>
        </div>
        <div className="card">
          <img
            src={ouzeri2}
            alt=""
          />
          <div className="content">
            <h3>Ουζερί 2</h3>
          </div>
        </div>
        <div className="card">
          <img
            src={ouzeri3}
            alt=""
          />
          <div className="content">
            <h3>Ουζερί 3</h3>
          </div>
        </div>
        <div className="card">
          <img
           src={ouzeri4}
            alt=""
          />
          <div className="content">
            <h3>Ουζερί 4</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;