import React, { useState } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/assets';

const LoginPopup = ({ setShowLogin }) => {
    const [currState, setCurrState] = useState("Login"); // Changed "sign up" to "Sign Up" to match the button content

    const handleSubmit = () => {
        // Handle form submission logic here
    };

    return (
        <div className='login-popup'>
            <form className="login-popup-container" onSubmit={handleSubmit}>
                <div className='login-popup-title'>
                    <h2>{currState}</h2>
                    <img 
                        onClick={() => setShowLogin(false)} 
                        src={assets.cross_icon} 
                        alt="Close" // Added alt text
                    />
                </div>
                <div className='login-popup-input'>
                    {currState==="Login"?<></>:<input type='text' placeholder='Name' required/>}
                    <input type='email' placeholder='Email' required />
                    <input type='password' placeholder='Password' required />
                </div>
                <button>
                    {currState === "Sign Up" ? "Create Account" : "Login"}
                </button>
                <div className='login-popup-condition'>
                    <input type='checkbox' required></input>
                    <p> By continuing , i aggree to the terms of use & privacy policy </p>
                </div>
                {currState==="Login"
                ?     <p> Create a new Account ? <span onClick={()=>setCurrState("Sign Up")}>  Click here</span></p>
                : <p> Already have an account ? <span onClick={()=>setCurrState("Login")}>Login here </span></p>
                }
           
            </form>
           
        </div>
    );
};

export default LoginPopup;
