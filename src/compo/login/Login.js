import React from "react";
import imgs from "./login.png";
import "./Login.css";
import { useState } from "react";
import { useAuth } from "../../store/auth";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { StoreTokenInLS } = useAuth();
  const navigate = useNavigate();

  function handlesubmit(e) {
    e.preventDefault();
  }
  async function senddata() {
    const res = await fetch("http://localhost:8000/login", {
      // Adding method type
      method: "POST",

      // Adding body or contents to send
      body: JSON.stringify({
        username: email,
        password: password,
      }),

      // Adding headers to the request
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    try {
      const s = await res.json();
  
      if (res.ok) {
       

        if (s.token) {
          navigate("/");
        }
        else{
          alert(s.message);
        }

        StoreTokenInLS(s.token);
      } 
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <section>
        <div className="login">
          <img src={imgs} alt="registerimg" />
        </div>
        <div className="loginform">
          <h3>Sign IN</h3>
          <form onSubmit={handlesubmit}>
            <label htmlFor="email">Email</label>
            <br />
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              autoComplete="current-email"
              type="email"
              id="email"
            />
            <br />
            <label htmlFor="password">Password</label>
            <br />
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              autoComplete="current-password"
              type="password"
              id="password"
            />
            <button className="btn" type="submit" onClick={senddata}>
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Login;
