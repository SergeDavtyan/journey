import React from 'react';
import "./Place.css";

function Place({ pclass }) {
    return (
        <div className={"p " + pclass}>

            <h2>Europe's most visited places</h2>
            <p>Aenean in lacus nec dolor fermentum congue. Maecenas ut velit pharetra, pharetra tortor sit amet, vulputate sem. Vestibulum mi nibh, faucibus ac eros id, sagittis tincidunt velit. Proin interdum ullamcorper faucibus. Ut mi nunc, sollicitudin non pulvinar id, sagittis eget diam.</p>
            <button className="btn">Continue Reading</button>

        </div>
    )
}

export default Place
