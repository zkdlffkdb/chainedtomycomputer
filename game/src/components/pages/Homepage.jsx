// first page that players will see

import React from 'react'
import { useNavigate } from "react-router-dom";
import "./Homepage.css"

export const Homepage = () => {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = '/prologue';
    navigate(path);
  }
  return (
    <div className="container">
      <div className="header">
        <div className="title">Welcome to Scam Buster!</div>
      </div>
      <div className="body">
        <p>Step into the shoes of Xiao Ming, a vigilant university student determined to protect his friends from the perils of online scams. </p>
        <p>Navigate through real-life scenarios and make critical choices that will either save his friends or lead them into traps.</p>
      </div>
      <div className="start-game">
        <button onClick={routeChange} class="button">Start game</button>
      </div>
    </div>
    
  )
}
