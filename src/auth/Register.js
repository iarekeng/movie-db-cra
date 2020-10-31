import React, { useState, useContext } from 'react'
import UserContext from "../context/UserContext"
import { useHistory } from "react-router-dom";
import Axios from 'axios';

function Register() {

  const [username, setUser] = useState();
  const [password, setPassword] = useState();
  const { setUserData } = useContext(UserContext)
  const history = useHistory();

  const submit = async (e) => {
    e.preventDefault();
    const newUser = { username, password }
    await Axios.post('http://localhost:8080/users/new', newUser)
    const loginRes = await Axios.post('http://localhost:8080/users/login', {
      username,
      password,
  });
  setUserData({
    token: loginRes.data.token,
    user: loginRes.data.username,
  })
  localStorage.setItem("auth-token", loginRes.data.token);
  history.push("/");
}

  return (
    <div className="register-container">
      <div className="form-container">
        <h2 className="register-title">Register</h2>
        <form onSubmit={submit}>
        <label htmlFor="register-username">Username:</label>
        <input className="form-control" id="register-username" type="text" placeholder="Username here" onChange={(e) => setUser(e.target.value)}/>
      <br/>
        <label htmlFor="register-password">Password:</label>
        <input className="form-control" id="register-password" type="text" placeholder="Password here" onChange={(e) => setPassword(e.target.value)} />
      <br />
        <input className="btn btn-outline-info" id="register-submit" type="submit" value="Register" />
        </form>
      </div>
    </div>
  )
}

export default Register;
