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
        <div className="title">Welcome to game!</div>
      </div>
      <div className="body">
        <p>text about the game</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam ipsum, modi voluptatibus, tempora corrupti eum et possimus reiciendis assumenda dolor id fuga ab aspernatur molestias aut quos, itaque accusamus asperiores sed voluptate quasi neque error maiores. Voluptate itaque doloremque expedita aut ad ipsam, delectus fugit fuga assumenda est ratione inventore!</p>
      </div>
      <div className="start-game">
        <button onClick={routeChange} class="button">Start game</button>
      </div>
    </div>
    
  )
}
