import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import CountrysData from '../countrysData/CountrysData';
import "./Countrys.css";
import Hotel from '../hotel/Hotel';



function Countrys() {



    return (
        <div className="country">
            <Router>
                <div className="kim">

                    {
                        CountrysData.map((e, index) => {

                            return (
                                <NavLink to={`/${e.countryPath}`} key={index} >
                                    <img src={e.img} alt="Country" />
                                    <p>{e.name}</p>
                                </NavLink>
                            )
                        })
                    }

                </div>
                <Routes>

                    {
                        CountrysData.map((e, ind) => {

                            return (
                                <Route path={`/${e.countryPath}`} key={ind} element={<Hotel date={e} />} />
                            )
                        })
                    }

                </Routes>
            </Router>
            <button className="btn" onClick={e => e.preventDefault}>show more place</button>
        </div >
    )
}

export default Countrys
