import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";
import { useAuth } from "../../store/auth";
import profile from '../images/profile.png'

function Nav() {
  const { IsLogin, data } = useAuth();

  

  useEffect(() => {}, []);
  return (
    <div>
      <nav>
        <p>
          <NavLink to="/">DataSphere</NavLink>
        </p>
        <ul style={{ display: "flex", justifyContent: "space-between" }}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink>courses</NavLink>
          </li>
          {IsLogin ? (
            <>
              <li >
                <img className="profile" src={profile}/>
                <ul className="dropdown">
                  <li>{data?<><p style={{textTransform:'capitalize'}}>{data.msg.name}</p></>:<p>user</p>}</li>
                  <li><NavLink to="/logout">logout</NavLink></li>
                </ul>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/login">LOGIN</NavLink>
              </li>
              <li>
                <NavLink to="/register">register</NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
