import React from 'react'
import "./Form.css"

function Form() {
    return (
        <form onSubmit={e => e.preventDefault()}>
            <div>
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Email" />
            </div>
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Message" />
            <button className="btn">Send Message Now</button>
        </form>
    )
}

export default Form
