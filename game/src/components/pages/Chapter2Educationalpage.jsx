import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import "./Chapter1EducationalPage.css";

export const Chapter2Educationalpage = () => {
    let navigate = useNavigate(); 
    let location = useLocation(); 

    const { message } = location.state || {};

    const routeChange = () => {
        let path = '/chapter_3';
        navigate(path);
    };

    const addStory = ({ message }) => {
        if (message === "Congratulations!") {
            return (
                <>
                    <p>
                        <strong>1 month later</strong>, 
                        news reported that the job recruiter that 
                        was contacting Ahmad was part of a large 
                        scam syndicate
                    </p>
                    <p>
                        Ahmad is very thankful for your advice.
                    </p>
                </>
            ) 
        } else {
            return (
                <>
                <p>
                    The scammer "John" used Ahmad's 
                    bank account number to siphon 
                    away all Ahmad's money. Ahmad loses 
                    all his money.
                </p>
                <p> 
                    Ahmad's wife divorces him and 
                    takes custody of their child as 
                    Ahmad has no money to raise a child.
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
        
        <h2>Here are some things to look out for in Job Scams & Tips to keep you safe</h2>
        <ol>
            <li>Tip 1:</li>
            <li>Tip 2:</li>
            <li>Tip 3:</li>
        </ol>
        <div className="final-word">
            <p>
                final tips.
            </p>
        </div>
        <div className="next-chapter">
            <button onClick={routeChange} className='button'>Chapter 3</button>
        </div>
    </div>
  )
}
