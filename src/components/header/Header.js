import React from 'react';
import "./Header.css";
import Logo from "../../img/logo.png";

function Header() {
    return (
        <div className="header">

            <div className="container">
                <div className="logo">
                    <img src={Logo} alt="Logo" />
                    <span>Journey</span>
                </div>

                <ul className="menu">
                    <li className="menu__item">Home</li>
                    <li className="menu__item">Top Destinations</li>
                    <li className="menu__item">Recommended Places</li>
                    <li className="menu__item">Contact Us</li>
                </ul>
            </div>

        </div>
    )
}

export default Header
