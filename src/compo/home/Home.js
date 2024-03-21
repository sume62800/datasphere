import React from 'react'
import img from '../images/home.png'
import './Home.css'
import { useAuth } from '../../store/auth'

function Home() {
  const{data}=useAuth()
  console.log(data)
  return (
    <>
      <div className='frontdiv'>
        <div className='hometext'>
            {data?<><p style={{textTransform:'capitalize'}}>Dear, {data.msg.name}</p></>:<p>Dear, user</p>}
            <h1>
                Welcome To The DataSphere
            </h1>
            <p>Elevate your online presence with DataSphere, the web development experts. From captivating designs to seamless functionality, we craft tailored solutions for your digital success.</p>
           <div className='homebutton'>
             <button className='btn'>Connect</button>
             <button className='btn'>Learn More</button>
           </div>
        </div>
        <div className='homeimg'>
            <img src={img} alt="homeImg" />
        </div>
      </div>
    </>
  )
}

export default Home
