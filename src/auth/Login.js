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

  const register = () => history.push('/register')

    return (
      <div className="login-container">
        <div className="form-container">
          <h2 className="login-title">Log in</h2>
          <form>

            <input className="form-control user-input" id="login-username" type="text" placeholder="Username" />
            <br/>
            <input className="form-control user-input" id="login-password" type="text" placeholder="Password" />
            <br />
            <input type="submit" id="logging-in" value="Log in" />
            <p className="not-registered">not registered? <button className="not-reg-button" onClick={register}>create an account</button></p>
          </form>
        </div>
      </div>
  )
}

export default Login;
