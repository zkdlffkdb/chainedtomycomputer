import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Chapter3.css";

export const Chapter3 = () => {
  let navigate = useNavigate();

  const routeChange = () => {
    let path = '/epilogue';
    navigate(path);
  }

  return (
    <div className="container">
      <h1>Chapter 3</h1>
      <div className="next-chapter">
        <button onClick={routeChange} className="button">Epilogue</button>
      </div>
    </div>
    
  )
}
