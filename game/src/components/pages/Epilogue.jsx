import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./Epilogue.css"

import xiaoming from "../../assets/xiaoming.png";

export const Epilogue = () => {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = '/';
    navigate(path);
  }

  return (
    <div className="container">
      <h1>Epilogue</h1>
      <div className="section">
        <img src={xiaoming} alt="Xiao Ming" />
        <div className="thought">
          <p>Wow, identifying and stopping scams is really meaningful.</p>
          <p>I should apply for a job at ISD to help prevent cyberthreats and make a difference in society!</p>
        </div>
      </div>

      <h1>Summary</h1>
      <div className="learning-points">
        <ol>
          <li><strong>Love Scams:</strong> If caught in a love scam, sever all contact with the scammer, inform your banks if any 
          transactions have been made, and lastly file a police report.</li>
          <li><strong>Job Scams:</strong> While you are job hunting, keep the key warning signs at the forefront of your mind.
            If you have concerns about the legitimacy of any job advertisement, you can check on the 
            business's official website or call the company directly to verify.</li>
        </ol>
      </div>
      <div className="home">
        <p>Thanks for playing Scam Buster!</p>
        <br />
        <button className="button" onClick={routeChange}>Back to home</button>
      </div>
    </div>
  )
}
