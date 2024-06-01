import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Chapter2.css";

import phone from "../../assets/ahmad-phone.png";

export const Chapter2 = () => {
  let navigate = useNavigate();

  const routeChange = (message) => {
    navigate("/chapter2educationalpage", { state: { message }});
  }

  return (
    <div className="container">
      <h1>Chapter 2</h1>
      <p>Xiao Ming's friend Ahmad has been unemployed for 2 months and is desperate to find a new job to support his family as his wife just gave birth.</p>
      <br />
      <p>Checking his Tiktok today, Xiao Ming sees that Ahmad has posted this: </p>
      <div className="phone">
        <img src={phone} alt="Ahmad's phone" />
      </div>
      <div className="buttons">
        <button className="btn btn-outline-success btn-lg" onClick={() => routeChange("Oh no! Ahmad got scammed!")}>Send Congrats</button>
        <button className="btn btn-outline-warning btn-lg" onClick={() => routeChange("Congratulations!")}>Warn Ahmad</button>
      </div>
    </div>
  )
}
