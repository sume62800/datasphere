import React from 'react'
import './Error.css'
import { NavLink } from 'react-router-dom'

function Error() {
  return (
    <>
    <div className='error'>
        <h1>404</h1><br/>
        <h3>SORRY! PAGE NOT FOUND</h3>
        <p>Oops! it seems like page you're trying to access doesn't exit</p>
       <div className='btndiv'>
       <button className='btn'><NavLink to='/'>Return Home</NavLink></button>
        <button className='btn'>Report Problem</button>
       </div>
    </div>
      
    </>
  )
}

export default Error
