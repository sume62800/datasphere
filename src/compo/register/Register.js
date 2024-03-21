import React from "react";
import imgs from "./register.png";
import "./Register.css";
import { useState } from "react";
import { useAuth } from "../../store/auth";
import { useNavigate } from "react-router-dom";


function Register() {
  const [fname, setFname] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const {StoreTokenInLS}=useAuth()
  const navigate=useNavigate()

  function handlesubmit(e) {
    e.preventDefault();
  }
  async function senddata() {
    const res=await fetch("http://localhost:8000/register", {
      // Adding method type
      method: "POST",

      // Adding body or contents to send
      body: JSON.stringify({
        name: fname,
        username: email,
        password: password,
      }),

      // Adding headers to the request
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    try {
      const s= await res.json()
      console.log(s)
      if (s.token){
        navigate('/')
      }
      StoreTokenInLS(s.token)
    } catch (error) {
      console.log(error)
    }

    
 
    console.log(res)
  }
  return (
    <>
      <section>
        <div className="register">
          <img src={imgs} alt="registerimg" />
        </div>
        <div className="registerform">
          <h3>Registeration Form</h3>
          <form onSubmit={handlesubmit}>
            <label htmlFor="fname">Full Name</label>
            <br />
            <input
              onChange={(e) => {
                setFname(e.target.value);
              }}
              type="text"
              id="fname"
            />
            <br />
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

export default Register;
