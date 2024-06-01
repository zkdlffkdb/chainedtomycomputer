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
                        scam syndicate.
                    </p>
                    <br />
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
                    away all Ahmad's money. <strong>Ahmad loses 
                    all his money.</strong>
                </p>
                <br />
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
            <li><strong>Too good to be true?: </strong> A high salary alone 
            is not a warning sign, but if a company is offering a high salary without 
            requiring experience or training, it may be too good to believe</li>
            <li><strong>Too vague, contains errors: </strong> Look out for grammatical errors and misspellings. 
            Multiple errors in an announcement is another red flag!</li>
            <li><strong>Means of communication:</strong> Legitimate employers generally communicate using 
            an official company email address and not their personal email address or through telegram.</li>
        </ol>
        <div className="final-word">
            <p>
                While you are job hunting, keep the key warning signs at the forefront of your mind.
                If you have concerns about the legitimacy of any job advertisement, you can check on the 
                business's official website or call the company directly to verify.
            </p>
        </div>
        <div className="next-chapter">
            <button onClick={routeChange} className='button'>Chapter 3</button>
        </div>
    </div>
  )
}
