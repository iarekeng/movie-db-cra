import React, { useContext } from 'react';
import { useHistory } from "react-router-dom";
import UserContext from "../context/UserContext";

function Navbar() {
  const {userData, setUserData} = useContext(UserContext);
  const history = useHistory();
  const register = () => history.push('/register');
  const login = () => history.push('/login');
  const logout = () => {
    setUserData({
      token: undefined,
      user: undefined
    })
    localStorage.setItem("auth-token", "")
  }

  return(
<nav className="navbar sticky-top navbar-expand-lg navbar navbar-dark bg-dark">
  <a className="navbar-brand" href="/">Movie Database</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
      </li>
    </ul>
    <div className="auth-options">
    {userData.user ? (
      <button className="logout-button" onClick={logout}>Log Out</button>
      ) : (
        <>
        <button className="login-button"  onClick={login}>Login</button>
        <button className="register-button"  onClick={register}>Register</button>
        </>
      )}
    </div>
  </div>
</nav>
)
}

export default Navbar;
