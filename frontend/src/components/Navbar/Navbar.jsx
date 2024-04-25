import React, { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import {Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({setShowLogin}) => {
    const [menu, setMenu] = useState("Home");  
    const {getTotalCartAmount}=useContext(StoreContext);
    return (
        <div className='navbar'>
            <Link to='/'><img src={assets.logo} width={200} alt="Logo" /></Link>
            <ul className='navbar-menu'>
                <Link to='/' className={menu === "Home" ? "active" : ""}
                 onClick={() => setMenu("Home")}
                >
                    Home
                </Link>
                <a href='#explore-menu'
                    className={menu === "Menu" ? "active" : ""}
                    onClick={() => setMenu("Menu")}
                >
                    Menu
                </a>
                <a href='#app-download'
                    className={menu === "Mobile-app" ? "active" : ""}
                    onClick={() => setMenu("Mobile-app")}
                >
                    Mobile-app
                </a>
                <a href='#footer'
                    className={menu === "Contact-us" ? "active" : ""}
                    onClick={() => setMenu("Contact-us")}
                >
                    Contact us
                </a>
            </ul>
            <div className='navbar-right'>
                <img src={assets.search_icon} alt="Search Icon" />
                <div className='navbar-search-icon'>
                  <Link to='/cart'> <img src={assets.basket_icon} alt="Basket Icon" /></Link> 
                    <div className={getTotalCartAmount()===0?"":"dot"}></div>
                </div>
                <button onClick={()=>setShowLogin(true)}>SIGN IN</button>
            </div>
        </div>
    );
}

export default Navbar;
