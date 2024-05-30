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
        <div className="title">Welcome to game name</div>
      </div>
      <div className="start-game">
        <button onClick={routeChange}>Start game</button>
      </div>
    </div>
    
  )
}
