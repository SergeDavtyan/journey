import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import "./Date.css";
import 'react-calendar/dist/Calendar.css';


function DateCom() {

    const [checkIn, setCheckIn] = useState(new Date());
    const [checkInCalendar, setCheckInCalendar] = useState(false);

    const [checkOut, setCheckOut] = useState(new Date());
    const [checkOutCalendar, setCheckOutCalendar] = useState(false);

    useEffect(() => {
        setCheckInCalendar(false)
    }, [checkIn])

    useEffect(() => {
        setCheckOutCalendar(false)
    }, [checkOut])


    return (
        <div className="date">

            <div className="date-top">

                <div>
                    <p>Choose Your Destination</p>
                    <input type="text" placeholder="Type your destination" />
                </div>
                <div>
                    <p>How many rooms?</p>
                    <select>
                        <option>1 Room</option>
                        <option>2 Room</option>
                        <option>3 Room</option>
                        <option>4 Room</option>
                        <option>5 Room</option>
                        <option>6 Room</option>
                        <option>7 Room</option>
                        <option>8 Room</option>
                        <option>9 Room</option>
                        <option>10 Room</option>
                    </select>
                </div>
                <div>
                    <p>Adult</p>
                    <select>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                    </select>
                </div>
                <div>
                    <p>Children</p>
                    <select>
                        <option>0</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                    </select>
                </div>

            </div>



            <div className="date-bottom">

                <div>
                    <p className="date-title">Check In Date</p>

                    <p className="date-calendar"

                        onClick={() => {
                            setCheckInCalendar(true)
                            setCheckOutCalendar(false)
                        }}

                    >
                        {checkIn.getFullYear() + "/" + (checkIn.getMonth() + 1) + "/" + checkIn.getDate()}
                    </p>


                    {
                        checkInCalendar ? <div className="calendar"><Calendar
                            onChange={setCheckIn}
                        /></div> : <div></div>
                    }

                </div>

                <div>
                    <p className="date-title">Check Out Date</p>

                    <p className="date-calendar"

                        onClick={() => {
                            setCheckOutCalendar(true)
                            setCheckInCalendar(false)
                        }}

                    >
                        {checkOut.getFullYear() + "/" + (checkOut.getMonth() + 1) + "/" + checkOut.getDate()}
                    </p>


                    {
                        checkOutCalendar ? <div className="calendar"><Calendar
                            onChange={setCheckOut}
                        /></div> : <div></div>
                    }

                </div>

                <button className="btn" onClick={e => e.preventDefault}>Check Availability</button>

            </div>

        </div>
    )
}

export default DateCom
