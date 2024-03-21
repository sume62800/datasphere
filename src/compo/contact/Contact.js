import React from "react";
import imgs from "../images/support.png";
import "./Contact.css";
import { useState } from "react";




function Contact() {
  const [email, setEmail] = useState();
 
  const[msg,setMsg]=useState()
  const [name, setName] = useState();

  function handlesubmit(e) {
    e.preventDefault();
  }
  async function senddata() {
    const res=await fetch("http://localhost:8000/contact", {
      // Adding method type
      method: "POST",

      // Adding body or contents to send
      body: JSON.stringify({
        name: name,
        email: email,
        message:msg
        
      }),

      // Adding headers to the request
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
    let s= await res.json()
    console.log(s)  
  }
  return (
    <>
      <section>
        <div className="contact">
          <img src={imgs} alt="contact-img" />
        </div>
        <div className="loginform">
          <h3>Contact Us</h3>
          <form onSubmit={handlesubmit}>
            <label htmlFor="name">Name</label>
            <br />
            <input
              onChange={(e) => {
                setName(e.target.value);
              }}
              type="text"
              id="name"
            /><br/>
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
            <label htmlFor="message">Message</label>
            <textarea onChange={(e)=>{setMsg(e.target.value)}} id="message"/>
            <button className="btn" type="submit" onClick={senddata}>
              Submit
            </button>
          </form>

        </div>
      </section>
    </>
  );
}

export default Contact;
