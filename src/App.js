import React, { useState, useEffect } from "react";
import Main from './components/main';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Axios from 'axios';
import MoviePage from './components/MoviePage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './auth/Login'
import Register from './auth/Register'
import UserContext from "./context/UserContext";

function App() {
const [userData, setUserData] = useState({
  token: undefined,
  user: undefined,
})

useEffect(() => {
  const checkLoggedIn = async () => {
    let token = localStorage.getItem("auth-token");
    if (token === null) {
      localStorage.setItem("auth-token", "");
      token = "";
    }
    const tokenRes = await Axios.post('http://localhost:8080/users/tokenIsValid',
    null,
    { headers: {"x-auth-token": token } }
  );
  if (tokenRes.data) {
    const userRes = await Axios.get("http://localhost:8080/users/", {headers: { "x-auth-token": token },
    });
    setUserData({
      token,
      user: userRes.data,
    })
  }
};
  checkLoggedIn();
}, [])

    return(
      <div>
      <BrowserRouter>
      <UserContext.Provider value={{userData, setUserData}}>
      <Navbar />
        <Switch>
          <Route path="/movie/:movieId" component={MoviePage} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/" component={Main} />
        </Switch>
        <Footer />
        </UserContext.Provider>
      </BrowserRouter>
      </div>
    )
}

export default App;
