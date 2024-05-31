import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./Chapter1.css";

import ahbeng from "../../assets/ahbeng.png";
import xiaoming from "../../assets/xiaoming.png";
import phone from "../../assets/ahbeng-phone.jpg";

export const Chapter1 = () => {
  let navigate = useNavigate();

  const routeChange = (message) => {
    navigate('/chapter1educationalpage', { state: { message } });
  }; 

  const [text, setText] = useState("");

  function handleText(event) {
    const newText = event.target.value; 
    setText(newText);
  };

  return (
      <div className="container">
        <h1>Chapter 1</h1>

        <div className="dialog ahbeng-dlg">
          <div className="dialog-content">
            <p>
              Xiao Ming, I need relationship advice. 
              I met this person online and I think I'm in love!
            </p>
          </div>
          <div className="image-wrapper">
            <img src={ahbeng} alt="Ahbeng's profile" className="ahbeng-img" />
          </div>
        </div>

        <div className="dialog xiaoming-dlg">
          <div className="image-wrapper">
            <img src={xiaoming} alt="Xiaoming's profile" className="xiaoming-img" />
          </div>
          <div className="dialog-content">
            <p>
              Okay...what do you need help with then?
            </p>
          </div>
        </div>
        <div className="dialog ahbeng-dlg">
          <div className="dialog-content">
            <p>
              Here look at this! What should I do? We have been chatting for 3 months and we share a lot
              of common interests, but I don't have this much money for her family's hospital bills.
            </p>
          </div>
          <div className="image-wrapper">
            <img src={ahbeng} alt="Ahbeng's profile" className="ahbeng-img" />
          </div>
        </div>

        <div className="phone-wrapper">
          <img src={phone} alt="Ahbeng's text messages with his online girlfriend" className="phone-img"/>
          <div className="response">
            <div className="input-wrapper">
              <button 
                className="btn btn-outline-primary btn-sm"
                onClick={() => routeChange("Congratulations!")}
              >
                Report
              </button>
              <input 
                type="text" 
                placeholder="Type to reply" 
                className="input" 
                onChange={handleText} 
                value={text} 
              /> 
              <button 
                className="btn btn-outline-success btn-sm"
                onClick={() => routeChange("Oh no! Ah Beng got scammed!")}
              >
                Send
              </button>
            </div>
          </div>
        </div>

        <p className="question">What should Xiao Ming do?</p>
      </div>
    );
}
