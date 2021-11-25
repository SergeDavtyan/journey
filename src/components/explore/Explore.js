import React from 'react';
import "./Explore.css";

function Explore() {
    return (
        <div className="explore">
            <div className="container">

                <h2 className="explore-title">Your <strong>Journey</strong> is our priority</h2>
                <p className="explore-text">Nullam auctor, sapien sit amet lacinia euismod, lorem magna lobortis massa, in tincidunt mi metus quis lectus. Duis nec lobortis velit. Vivamus id magna vulputate, tempor ante eget, tempus augue. Maecenas ultricies neque magna.</p>
                <button className="btn" onClick={e => e.preventDefault}>Continue explore</button>

            </div>
        </div>
    )
}

export default Explore
