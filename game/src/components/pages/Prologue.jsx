import React from 'react';
import { useNavigate } from "react-router-dom";
import "./Prologue.css";
import "./button.css";

import xiaoming from "../../assets/xiaoming.png";

export const Prologue = () => {
  let navigate = useNavigate();

  const routeChange = () => {
    let path = '/chapter_1';
    navigate(path);
  }

  return (
    <div className="container">
      <h1>Prologue</h1>
      <div className="profile">
        <div className="section">
          <div className="info">
            <p>Name: Xiao Ming</p>
            <p>Occupation: University Student</p>
            <p>Age: 24</p>
          </div>
          <div className="photo-frame">
            <img src={xiaoming} alt="Xiaoming's profile" className='profile-img'/>
          </div> 
        </div>
        <div className="line"></div>
        <p className='background'>
          Background: Xiao Ming's family was scammed out of their life savings 2 years ago,
          hence Xiao Ming now has a personal vendetta against fraudsters, and is very paranoid 
          of potential scams.
        </p>
      </div>
      <div className="start-game">
        <button onClick={routeChange} className='button'>Chapter 1</button>
      </div>
    </div>

      
      
    
  )
}