import "./FormStyles.css"

import React from 'react'

const Form = () => {
  return (
    <div className="form">
        <label> Your Name </label>
        <input type="text"/>

        <label> Email </label>
        <input type="email"/>

        <label> Subject </label>
        <input type="text"/>

        <label> Messages</label>
      <textarea rows="6" placeholder="Type your message here"/>
      <button className="btn">Submit</button>
    </div>
  )
}

export default Form