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

const login = () => history.push('/login')

  return (
    <div className="register-container">
      <div className="form-container">
        <h2 className="register-title">Register</h2>
        <form onSubmit={submit}>
        <input className="form-control" id="register-username" type="text" placeholder="Username" onChange={(e) => setUser(e.target.value)}/>
      <br/>
        <input className="form-control" id="register-password" type="text" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <br />
        <input id="register-submit" type="submit" value="Register" />
        <p className="not-registered">already registered? <button className="not-reg-button" onClick={login}> Log in here!</button></p>
        </form>
      </div>
    </div>
  )
}

export default Register;
