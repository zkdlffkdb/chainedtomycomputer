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

  const addStory = ({ message }) => {
    if (message === "Congratulations!") {
        return (
            <>
                <p>
                    <strong>2 month later</strong>, 
                    Ah Beng decided to go online to research more on love scams and realised
                    his online girlfriend was indeed very suspicious. A while later, he saw a
                    news article about how love scams exploits people's feeling of love. 
                </p>
                <br />
                <p>
                    Ah Beng is very thankful for your advice.
                </p>
            </>
        ) 
    } else {
        return (
            <>
            <p>
                The scammer took Ah Beng's money and immediately
                ghosted him. <strong>Ah Beng loses
                   his money.</strong>
            </p>
            <br />
            <p> 
                Ah Beng now owes his friends money as he borrowed heavily to 
                give the money to the scammer. 
            </p>
            </>
        )
    }
}

  return (
    <div className="container">
      <h1>{message}</h1>
      <div className="story">
            { addStory({message}) }
      </div>
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