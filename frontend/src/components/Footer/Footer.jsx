import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className='footer-content'>
                <div className='footer-content-left'>
                    <img src={assets.logo} alt="Logo" width={200} />
                    <p>Welcome to our food app, where we serve delicious dishes 🍲</p>
                    <p>crafted with passion ❤️ and care 🍴 to satisfy your cravings 🤤!</p>

                    <div className='footer-social-icons'>
                        <img src={assets.facebook_icon} alt="Facebook" />
                        <img src={assets.twitter_icon} alt="Twitter" />
                        <img src={assets.linkedin_icon} alt="LinkedIn" />
                    </div>
                </div>
                <div className='footer-content-center'>
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div className='footer-content-right'>
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+1-212-456-7890</li>
                        <li>Contact@instaCart.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <div>
                <p className='footer-copy-write'>
                    Owner of this project is Nihal Pratap Singh.....
                </p>
            </div>
        </div>
    );
};

export default Footer;
