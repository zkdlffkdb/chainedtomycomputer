import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import "./Chapter1EducationalPage.css";
import "./button.css"

export const Chapter1EducationalPage = () => {
  let navigate = useNavigate();
  let location = useLocation(); 

  const { message } = location.state || {};

  const routeChange = () => {
    let path = '/chapter_2';
    navigate(path);
  };

  return (
    <div className="container">
      <h1>{message}</h1>
      <h2>Here are some things to look out for in Love Scams & Tips to keep you safe</h2>
      <ol>
        <li>
            <strong>Stay Informed:</strong> Keep up to date with common scam tactics to help you better identify
            potential scams. 
        </li>
        <li>
            <strong>Look out for fake profiles:</strong> Pay attention to overly poetic phrases, 
            repetitive words and inconsistencies in their pictures and words. 
        </li>
        <li>
            <strong>Exercise Caution:</strong> Quick-moving relationships, especially those that 
            swiftly transition to less regulated communication platforms, should raise suspicions.
        </li>
        <li>
            <strong>Beware of financial requests:</strong> Regardless of any reason, request for monetary assistance
            are classic hallmarks of love scams. Never send money to someone you just met online.
        </li>
      </ol>
      <div className="final-word">
        <p>
          If caught in a love scam, sever all contact with the scammer, inform your banks if any 
          transactions have been made, and lastly file a police report. 
        </p>
      </div>
      
      <div className="next-chapter">
        <button onClick={routeChange} className="button">Chapter 2</button>
      </div>
    </div>
  );
}