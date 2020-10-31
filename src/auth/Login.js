import React, { useState, useContext } from 'react'
import UserContext from "../context/UserContext"
import { useHistory } from "react-router-dom";
import Axios from 'axios';


function Login() {

  const [username, setUser] = useState();
  const [password, setPassword] = useState();
  const { setUserData } = useContext(UserContext)
  const history = useHistory();

  const submit = async (e) => {
    e.preventDefault();
    const loginUser = { username, password }
    const loginRes = await Axios.post('http://localhost:8080/users/login', loginUser
  );
  setUserData({
    token: loginRes.data.token,
    user: loginRes.data.username,
  })
  localStorage.setItem("auth-token", loginRes.data.token);
  history.push("/");
  }

    return (
      <div className="login-container">
        <div className="form-container">
          <h2 className="login-title">Log in</h2>
          <form>
            <label htmlFor="login-username">Username:</label>
            <input className="form-control" id="login-username" type="text" placeholder="Username here" />
            <br/>
            <label htmlFor="login-password">Password:</label>
            <input className="form-control" id="login-password" type="text" placeholder="Password here" />
            <br />
            <input className="btn btn-outline-info" type="submit" value="Log in" />
          </form>
        </div>
      </div>
  )
}

export default Login;
