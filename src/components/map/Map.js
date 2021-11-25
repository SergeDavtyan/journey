import React from 'react'
import Form from '../form/Form'
import "./Map.css"

function Map() {
    return (
        <div className="map container">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97583.88432389435!2d44.418527494817376!3d40.153500508563944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406aa2dab8fc8b5b%3A0x3d1479ae87da526a!2z0JXRgNC10LLQsNC9LCDQkNGA0LzQtdC90LjRjw!5e0!3m2!1sru!2s!4v1637683719557!5m2!1sru!2s"></iframe>
            <Form />
        </div>
    )
}

export default Map
