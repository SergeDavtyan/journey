import React from 'react'
import BC from "../../img/button-curve.png";
import "./Hotel.css"

function Hotel({ date }) {

    return (
        <div className={`hotel ${date.componentName}`} >

            {date.countryInfo.map((t, tind) => {
                return <div className="hotel-container" key={tind}>

                    <div className="hotel-img">
                        <img src={t.img} alt="Hotel" />
                    </div>

                    <div className="hotel-main">
                        <h3>{t.title}</h3>
                        <span>{t.subtitle}</span>
                        <p>{t.text}</p>
                    </div>

                    <div className="hotel-footer">
                        <img src={BC} alt="BC" />
                        <p>{`$${t.price}`}</p>
                        <button onClick={e => e.preventDefault}>Continue Reading</button>
                    </div>

                </div>
            })}
        </div>
    )
}

export default Hotel
