import React from 'react'

function Register() {
  return (
    <div className="register-container">
    <h2 className="register-title">Register</h2>
    <form>
      <label htmlFor="register-username">Username:</label>
      <input id="register-username" type="text" placeholder="Username here" />
      <br/>
      <label htmlFor="register-password">Password:</label>
      <input id="register-password" type="text" placeholder="Password here" />
    </form>
    </div>
  )
}

export default Register;
