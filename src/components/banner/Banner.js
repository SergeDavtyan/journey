import React from 'react';
import "./Banner.css";
import Dots from "../../img/dots.png";
import DateCom from '../date/Date';


function Banner() {

    return (
        <div className="banner">
            <div className="container">

                <div className="banner-top">
                    <h1>LET'S BEGIN</h1>
                    <img src={Dots} alt="Dots" />
                    <p>We assist you to choose the best.</p>
                    {/* <a href=""><i className="fas fa-chevron-down"></i></a> */}
                </div>

                <DateCom />

            </div>
        </div>
    )
}

export default Banner
