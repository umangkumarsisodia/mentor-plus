import React from 'react'
import './Navbar.css';
import { Link } from "react-router-dom";

function Navbar() {
    const mobNav = () => {
        const mobContainer = document.getElementById("mobContainer");
        if(mobContainer.style.display == "none") {
            mobContainer.style.display = "block";
        }
        else {
            mobContainer.style.display = "none";
        }
    }
    return (
    <>
        <div className="mob-nav">
            <div className="mob-area">
                <h1>Mentor<span>Plus</span></h1>
                <button id="mob-btn" onClick={mobNav}><i class="fa-solid fa-bars fa-2x"></i></button> 
            </div>
            <div className="mob-container" id="mobContainer">
                <div className="mob-content">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/profile">Profile</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className='nav-container'>
            <div className='nav-area'>
                <h1>Mentor<span>Plus</span></h1>
                <ul>
                    <li>
                        <Link to="/" className='unabled'>Home</Link>
                    </li>
                    <li>
                        <Link to="/profile" className='disabled'>Profile</Link>
                    </li>
                    <li>
                        <Link to="/about" className='disabled'>About</Link>
                    </li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Navbar